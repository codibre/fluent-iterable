import { Action, AsyncAction } from '@codibre/fluent-iterable';
import { SemaOptions } from './sema-options';
import { Sema } from 'async-sema';

export async function runConcurrently<T>(
  this: Iterable<T> | AsyncIterable<T>,
  options: SemaOptions,
  cb: Action<T> | AsyncAction<T>,
) {
  const sema = new Sema(options.maxConcurrency, options);

  for await (const item of this) {
    const release = await sema.acquire();
    setImmediate(async () => {
      try {
        await cb(item);
      } finally {
        sema.release(release);
      }
    });
  }
  await sema.drain();
}
