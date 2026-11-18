import '../../src'; // load the plugin

import { fluentAsync } from '@codibre/fluent-iterable';
import { LazyMap } from '../../src';

const wait = (ms = 0) => new Promise((r) => setTimeout(r, ms));

interface GenOptions {
  delay?: number;
  failAt?: number;
  onPull?: (count: number) => void;
  onReturn?: () => void;
}

function source<T>(items: T[], options: GenOptions = {}): AsyncIterable<T> {
  let index = 0;
  const iterator: AsyncIterator<T> = {
    async next() {
      index += 1;
      options.onPull?.(index);
      if (options.failAt !== undefined && index > options.failAt) {
        throw new Error(`producer failure at ${index}`);
      }
      if (index > items.length) {
        return { done: true as const, value: undefined as never };
      }
      const value = items[index - 1];
      if (options.delay) {
        await wait(options.delay);
      }
      return { done: false as const, value };
    },
  };
  if (options.onReturn) {
    iterator.return = async () => {
      options.onReturn!();
      return { done: true as const, value: undefined as never };
    };
  }
  return { [Symbol.asyncIterator]: () => iterator };
}

interface Item {
  id: string;
  payload: number;
}

const items: Item[] = [
  { id: 'a', payload: 1 },
  { id: 'b', payload: 2 },
  { id: 'c', payload: 3 },
];

const byId = (item: Item) => item.id;
const byPayload = (item: Item) => item.payload;

describe('LazyMap (toLazyMap)', () => {
  it('is registered as a FluentAsyncIterable plugin', () => {
    const map = fluentAsync(source(items)).toLazyMap(byId);
    try {
      expect(map).toBeInstanceOf(LazyMap);
    } finally {
      void map.dispose();
    }
  });

  it('is inert on construction: the source is never touched', () => {
    let pulls = 0;
    const map = new LazyMap(
      source(items, { onPull: (c) => (pulls = c) }),
      byId,
    );
    void map;
    expect(pulls).toBe(0);
  });

  it('start() returns this and is idempotent', async () => {
    let pulls = 0;
    const map = new LazyMap(
      source(items, { onPull: (c) => (pulls = c) }),
      byId,
    );
    expect(map.start()).toBe(map);
    expect(map.start()).toBe(map);
    await wait(30);
    map.start();
    await wait(30);
    expect(pulls).toBe(items.length + 1); // +1: the done pull
  });

  it('serves cache hits synchronously, without a promise', async () => {
    const map = new LazyMap(source(items), byId, byPayload);
    map.start();
    await wait(30);
    const hit = map.get('b');
    expect(hit).not.toBeInstanceOf(Promise);
    expect(hit).toBe(2);
  });

  it('the first get() starts consumption when start() was not called', async () => {
    let pulls = 0;
    const map = new LazyMap(
      source(items, { delay: 5, onPull: (c) => (pulls = c) }),
      byId,
      byPayload,
    );
    expect(pulls).toBe(0);
    await expect(map.get('a')).resolves.toBe(1);
    expect(pulls).toBeGreaterThan(0);
  });

  it('a miss suspends only that caller until the key arrives', async () => {
    const map = new LazyMap(source(items, { delay: 25 }), byId, byPayload);
    map.start();
    const late = map.get('c');
    expect(late).toBeInstanceOf(Promise);
    // already produced keys stay synchronous while 'c' is in flight
    await wait(40);
    const early = map.get('a');
    expect(early).not.toBeInstanceOf(Promise);
    expect(early).toBe(1);
    await expect(late).resolves.toBe(3);
  });

  it('resolves every waiter of a key with the produced value', async () => {
    const map = new LazyMap(source(items, { delay: 15 }), byId, byPayload);
    map.start();
    const all = await Promise.all([map.get('b'), map.get('b'), map.get('c')]);
    expect(all).toEqual([2, 2, 3]);
  });

  it('returns undefined for missing keys once the stream completed', async () => {
    const map = new LazyMap(source(items), byId, byPayload);
    map.start();
    await wait(30);
    const missing = map.get('zzz');
    expect(missing).toBeUndefined();
    expect(missing).not.toBeInstanceOf(Promise);
  });

  it('propagates producer failures to pending and future gets, with onError', async () => {
    const errors: unknown[] = [];
    const map = new LazyMap(
      source(items, { delay: 10, failAt: 2 }),
      byId,
      byPayload,
    );
    map.start((err) => errors.push(err));
    const pendingB = map.get('b');
    const pendingZ = map.get('zzz');
    await expect(pendingB).resolves.toBe(2);
    await expect(pendingZ).rejects.toThrow('producer failure at 3');
    await expect(map.get('other')).rejects.toThrow('producer failure at 3');
    expect(errors).toHaveLength(1);
    // produced data stays readable
    expect(map.get('a')).toBe(1);
  });

  it('dispose() closes the underlying iterator and settles pending gets', async () => {
    let closed = false;
    const map = new LazyMap(
      source(items, { delay: 20, onReturn: () => (closed = true) }),
      byId,
      byPayload,
    );
    map.start();
    const pending = map.get('c');
    await map.dispose();
    expect(closed).toBe(true);
    await expect(pending).resolves.toBeUndefined();
    expect(map.get('zzz')).toBeUndefined();
  });

  it('Symbol.asyncDispose closes the iterator', async () => {
    let closed = false;
    const map = new LazyMap(
      source(items, { delay: 20, onReturn: () => (closed = true) }),
      byId,
      byPayload,
    );
    map.start();
    await map[Symbol.asyncDispose]();
    expect(closed).toBe(true);
  });

  it('storing whole items when no valueSelector is given', async () => {
    const map = new LazyMap(source(items), byId);
    map.start();
    await expect(map.get('b')).resolves.toEqual({ id: 'b', payload: 2 });
  });
});
