import { AnyIterable } from 'augmentative-iterable';

export function finallyRecipe(
  iterableType: 'sync' | 'async',
) {
  return iterableType === 'sync'
    ? function* (this: Iterable<any>, callback: () => unknown) {
        try {
          yield* this;
        } finally {
          callback();
        }
      }
    : async function* (
        this: AnyIterable<any>,
        callback: () => Promise<unknown>,
      ) {
        try {
          yield* this;
        } finally {
          await callback();
        }
      };
}
