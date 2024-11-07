import { AnyIterable } from 'augmentative-iterable';

let fluentAsync: Function;
interface LinkedNode<T> {
  value: T;
  next?: LinkedNode<T>;
}

function getBranchedAsyncIterable<T>(
  node: LinkedNode<T> | undefined,
  iterator: AsyncIterator<T>,
  context: { next?: Promise<IteratorResult<T>> },
) {
  return {
    [Symbol.asyncIterator]() {
      return {
        next() {
          let done = true;
          let value: T | undefined;
          if (node) {
            value = node.value;
            done = false;
            if (!node.next) {
              const promise = (context.next ??= new Promise(
                async (resolve, reject) => {
                  try {
                    const next = await iterator.next();
                    if (!next.done) node!.next = { value: next.value };
                    context.next = undefined;
                    resolve(next);
                  } catch (err) {
                    reject(err);
                  }
                },
              ));
              return promise.then(() => {
                node = node!.next;
                return { done, value };
              });
            }
            node = node.next;
          }
          return Promise.resolve({ done, value });
        },
      };
    },
  };
}

function getBranchedIterable<T>(
  node: LinkedNode<T> | undefined,
  iterator: Iterator<T>,
) {
  return {
    [Symbol.asyncIterator]() {
      return {
        next() {
          let done = true;
          let value: T | undefined;
          if (node) {
            value = node.value;
            done = false;
            if (!node.next) {
              const next = iterator.next();
              if (!next.done) node.next = { value: next.value };
              return new Promise((resolve) => {
                node = node!.next;
                resolve({ done, value });
              });
            }
            node = node.next;
          }
          return Promise.resolve({ done, value });
        },
      };
    },
  };
}

async function getAsync<T>(
  it: AsyncIterable<T>,
  items: ((it: AsyncIterable<T>) => unknown)[],
) {
  const context = {};
  const iterator = it[Symbol.asyncIterator]();
  const first = await iterator.next();
  const node = first.done ? undefined : { value: first.value };
  return Promise.all(
    items.map((cb) =>
      cb(fluentAsync(getBranchedAsyncIterable(node, iterator, context))),
    ),
  );
}

export function branchRecipe(): any {
  return function branch<T>(
    this: AnyIterable<T>,
    ...items: Array<(it: AsyncIterable<T>) => unknown>
  ) {
    fluentAsync ??= require('../fluent-async').fluentAsync;
    if (Symbol.iterator in this) {
      const iterator = this[Symbol.iterator]();
      const first = iterator.next();
      const node = first.done ? undefined : { value: first.value };
      return Promise.all(
        items.map((cb) => cb(fluentAsync(getBranchedIterable(node, iterator)))),
      );
    }
    return getAsync(this, items);
  };
}
