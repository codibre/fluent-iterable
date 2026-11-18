/**
 * A `get` miss registered while the producer stream is still active.
 */
interface Waiter<V> {
  resolve(value: V | undefined): void;
  reject(error: unknown): void;
}

/**
 * An O(1) lookup map populated on demand by an async producer stream.
 *
 * Construction is inert: no background task is spawned and the source is not
 * touched until {@link LazyMap.start} is called explicitly, or a lookup
 * triggers it. The point of the structure is overlapping producer I/O latency
 * with consumer work: a consumer that asks for a key already produced gets it
 * synchronously, while a key not produced yet suspends only that caller until
 * the producer inserts it or the stream terminates.
 *
 * Suitable for memory-bounded datasets with high network I/O latency (e.g.
 * a database cursor joined against a paginated external API). Not suitable
 * for unbounded streams (the whole producer output is cached: no backpressure
 * between producer and consumer) nor for low-latency in-memory sources, where
 * the synchronization overhead outweighs any latency overlap.
 */
export class LazyMap<K, V, T = unknown> implements AsyncDisposable {
  private readonly cache = new Map<K, V>();
  private readonly waiters = new Map<K, Waiter<V>[]>();
  private iterator: AsyncIterator<T> | undefined;
  private started = false;
  private finished = false;
  private failure: { error: unknown } | undefined;
  private errorCallback: ((err: unknown) => void) | undefined;

  constructor(
    private readonly source: AsyncIterable<T>,
    private readonly keySelector: (item: T) => K,
    private readonly valueSelector?: (item: T) => V,
  ) {}

  /**
   * Begins consuming the producer stream in the background. Idempotent:
   * subsequent calls (even with a different callback) are no-ops.
   *
   * @param onError called once when the producer stream fails. The error is
   * always captured internally regardless: pending and future `get` calls
   * reject with it, so it can never become a floating rejection.
   * @returns this, for fluent chaining.
   */
  start(onError?: (err: unknown) => void): this {
    if (this.started) {
      return this;
    }
    this.started = true;
    this.errorCallback = onError;
    this.iterator = this.source[Symbol.asyncIterator]();
    // The handler is attached at creation time: the producer promise can
    // never float, and a failure reaches the waiters instead of crashing
    // the process.
    void this.consume().catch((error: unknown) => {
      this.fail(error);
    });
    return this;
  }

  /**
   * Looks a key up.
   *
   * - Cache hit: returns the value directly — synchronously, no `await`, no
   *   allocated synchronization primitive.
   * - Cache miss on an active stream (it is started on demand if needed):
   *   returns a promise that settles when the key is inserted, the stream
   *   completes (promise of `undefined`) or the stream fails (rejection).
   * - Stream already completed: returns `undefined` immediately for keys
   *   that were never produced.
   * - Stream failed: returns a rejected promise.
   */
  get(key: K): V | undefined | Promise<V | undefined> {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    if (this.failure) {
      return Promise.reject(this.failure.error);
    }
    if (this.finished) {
      return undefined;
    }
    if (!this.started) {
      this.start();
    }
    return new Promise<V | undefined>((resolve, reject) => {
      const pending = this.waiters.get(key);
      const waiter = { resolve, reject };
      if (pending) {
        pending.push(waiter);
      } else {
        this.waiters.set(key, [waiter]);
      }
    });
  }

  /**
   * Terminates consumption: pending gets settle as if the stream had just
   * completed (with `undefined`, or with the captured error), and the
   * underlying iterator is closed via `return()` when available, so
   * cursors/resources of the producer are released deterministically.
   */
  async dispose(): Promise<void> {
    const iterator = this.iterator;
    if (!this.finished) {
      this.finished = true;
      this.wakeAll();
    }
    if (iterator) {
      this.iterator = undefined;
      await iterator.return?.();
    }
  }

  [Symbol.asyncDispose](): Promise<void> {
    return this.dispose();
  }

  private async consume(): Promise<void> {
    const iterator = this.iterator;
    if (!iterator) {
      return;
    }
    for (;;) {
      const next = await iterator.next();
      if (next.done) {
        break;
      }
      const key: K = this.keySelector(next.value);
      const value: V = this.valueSelector
        ? this.valueSelector(next.value)
        : (next.value as unknown as V);
      this.cache.set(key, value);
      const pending = this.waiters.get(key);
      if (pending) {
        this.waiters.delete(key);
        for (const waiter of pending) {
          waiter.resolve(value);
        }
      }
    }
    if (!this.finished) {
      this.finished = true;
      this.wakeAll();
    }
  }

  private fail(error: unknown): void {
    if (this.finished) {
      return;
    }
    this.failure = { error };
    this.finished = true;
    this.wakeAll();
    const onError = this.errorCallback;
    if (onError) {
      try {
        onError(error);
      } catch {
        // a failing consumer callback must not produce a floating rejection
      }
    }
  }

  private wakeAll(): void {
    const pending = [...this.waiters.values()];
    this.waiters.clear();
    const failure = this.failure;
    for (const waiters of pending) {
      for (const waiter of waiters) {
        if (failure) {
          waiter.reject(failure.error);
        } else {
          waiter.resolve(undefined);
        }
      }
    }
  }
}
