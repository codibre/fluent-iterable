import '../../src'; // load the plugin

import { fluent, fluentAsync } from '@codibre/fluent-iterable';

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

describe('runConcurrently (async-sema integration)', () => {
  it('respects maxConcurrency for a sync iterable (fluent)', async () => {
    const items = [1, 2, 3, 4, 5];
    const maxConcurrency = 2;

    let running = 0;
    let maxSeen = 0;
    const completed: number[] = [];

    // promise that resolves when all tasks finished
    let resolveAll: () => void;
    const allDone = new Promise<void>((r) => (resolveAll = r));

    await fluent(items).runConcurrently(
      { maxConcurrency },
      async (n: number) => {
        running++;
        maxSeen = Math.max(maxSeen, running);

        // simulate variable work: longer for larger numbers
        await wait(n * 20);

        completed.push(n);

        running--;
        if (completed.length === items.length) resolveAll();
      },
    );

    // runConcurrently may return before every callback finishes (callbacks run via setImmediate),
    // so wait for all to finish as signaled above.
    await allDone;

    expect(maxSeen).toBeLessThanOrEqual(maxConcurrency);
    // all items should have been processed
    expect(completed).toIncludeSameMembers(items);
  });

  it('respects maxConcurrency for an async iterable (fluentAsync)', async () => {
    async function* gen() {
      for (const n of [1, 2, 3, 4, 5]) {
        // small delay between yields to better exercise interleaving
        await wait(10);
        yield n;
      }
    }

    const items = [1, 2, 3, 4, 5];
    const maxConcurrency = 3;

    let running = 0;
    let maxSeen = 0;
    const completed: number[] = [];

    let resolveAll: () => void;
    const allDone = new Promise<void>((r) => (resolveAll = r));

    await fluentAsync(gen()).runConcurrently(
      { maxConcurrency },
      async (n: number) => {
        running++;
        maxSeen = Math.max(maxSeen, running);

        // variable work
        await wait(n * 15);

        completed.push(n);

        running--;
        if (completed.length === items.length) resolveAll();
      },
    );

    await allDone;

    expect(maxSeen).toBeLessThanOrEqual(maxConcurrency);
    expect(completed).toIncludeSameMembers(items);
  });
});
