# @fluent-iterable/async-sema

Lightweight integration between [async-sema](https://www.npmjs.com/package/async-sema) and [@codibre/fluent-iterable](https://www.npmjs.com/package/@codibre/fluent-iterable).

This package adds a convenient `runConcurrently` resolving extension to both `fluent` and `fluentAsync` iterables so you can process items with a concurrency limit provided by `async-sema`.

Features
- Use a familiar fluent-style API to run item handlers concurrently.
- Backed by `async-sema` so the semaphore is efficient and battle-tested.
- Works with both synchronous and asynchronous iterables.

Installation

```bash
npm i @codibre/fluent-iterable @fluent-iterable/async-sema
```

Quick Examples

Important: this package registers the resolving extension when you import its `src/index` (packaged as `dist/index.js` in releases). Import it once before using the extension.

Example for a synchronous iterable (fluent):

```ts
import 'src/index'; // or import '@fluent-iterable/async-sema' after installing the package
import { fluent } from '@codibre/fluent-iterable';

const items = [1,2,3,4,5];

await fluent(items).runConcurrently({ maxConcurrency: 2 }, async (n) => {
	// do work for item n
	await doWork(n);
});
```

Example for an async iterable (fluentAsync):

```ts
import 'src/index';
import { fluentAsync } from '@codibre/fluent-iterable';

async function* gen() {
	for (let i = 1; i <= 5; i++) {
		await delay(10);
		yield i;
	}
}

await fluentAsync(gen()).runConcurrently({ maxConcurrency: 3 }, async (n) => {
	await doWork(n);
});
```

API

runConcurrently(options, cb)

- options: SemaOptions
	- maxConcurrency: number (required) — maximum number of concurrent executions
	- initFn?: () => unknown — forwarded to async-sema options
	- pauseFn?: () => void
	- resumeFn?: () => void
	- capacity?: number

- cb: (item) => void | Promise<void>

Behavior notes
- `runConcurrently` registers as a resolving extension. It acquires a semaphore permit for each item and schedules the callback with `setImmediate`. The function resolves once it finishes acquiring and scheduling callbacks for all items; callbacks themselves run next-tick. If you rely on callbacks finishing before proceeding, wait for their completion inside the callback or use your own signaling (tests in this repo show an example).

Testing

This package uses Jest + ts-jest. Tests live in `test/unit`. Run them from the package folder:

```bash
cd libs/fluent-iterable-async-sema
pnpm test
```

Contributing

- Keep tests fast: use small delays (tens of milliseconds) when simulating async work.
- When adding features that change how `runConcurrently` resolves, update tests accordingly: current implementation schedules callbacks with `setImmediate`, so tests must wait for completion explicitly if they assert on callback side effects.

License

ISC
