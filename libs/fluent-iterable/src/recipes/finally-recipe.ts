import { AnyIterable } from 'augmentative-iterable';

export function finallyRecipe(iterableType: 'sync' | 'async') {
  return iterableType === 'sync'
    ? function* (this: Iterable<any>, callback: (success: boolean) => unknown) {
        let success = false;
        try {
          yield* this;
          success = true;
        } finally {
          callback(success);
        }
      }
    : async function* (
        this: AnyIterable<any>,
        callback: (success: boolean) => Promise<unknown>,
      ) {
        let success = false;
        try {
          yield* this;
          success = true;
        } finally {
          await callback(success);
        }
      };
}
