/* eslint-disable @typescript-eslint/no-use-before-define */
'use strict';

const {
  getAugmentIterable,
  getSkippedAugmentIterable,
  resolverAsync,
  isPromiseLike,
  end,
  getIterableParameters,
} = require('./augments-utils');
const {
  YIELD,
  IGNORE,
  STOP,
} = require('./augments-types');

function resolveState(augmentList, value) {
  let ai = -1;
  let state = YIELD;
  let type;
  const { length } = augmentList;
  function recursive(chain) {
    while (ai < length) {
      ai++;
      const next = augmentList[ai];
      if (ai !== 0) {
        if (type === YIELD) value = chain;
        else if (!chain) {
          state = type;
          break;
        }
      }
      if (state === YIELD && next) {
        type = next.type;
        chain = next.action ? next.action(value) : value;
      }
      if (isPromiseLike(chain)) return chain.then(recursive);
    }

    // eslint-disable-next-line default-case
    switch (state) {
      case YIELD:
        return {
          done: false,
          value,
        };
      case STOP:
        return end;
    };
  };
  return recursive();
}

function asyncProcResolvingFactory(next) {
  return (result) => result.then((value) => value ? value : next());
}

function augmentativeIterateArrayAsync(augmentList, base, offset) {
  const length = base.length;
  let i = -1 + offset;
  const syncNext = () => {
    let keepGoing;
    do {
      keepGoing = false;
      while (++i < length) {
        const result = resolveState(augmentList, base[i]);
        if (isPromiseLike(result)) return asyncProcResolving(result);
        if (result) return result;
      }
    } while (keepGoing);

    return end;
  };
  const asyncProcResolving = asyncProcResolvingFactory(syncNext);

  return {
    next: syncNext,
  };
}

function augmentativeIterateAsyncIterable(augmentList, base, offset) {
  const it = base[Symbol.asyncIterator] ? base[Symbol.asyncIterator]() : base[Symbol.iterator]();
  const syncNext = () => {
    let keepGoing = false;
    do {
      const next = it.next();
      if (isPromiseLike(next)) return next.then(asyncProcNext);
      keepGoing = !next.done;
      if (offset > 0) offset--;
      else if (keepGoing) {
        const result = resolveState(augmentList, next.value);
        if (isPromiseLike(result)) return asyncProcResolving(result);
        if (result) return result;
      }
    } while (keepGoing);

    return end;
  };
  const asyncProcResolving = asyncProcResolvingFactory(syncNext);

  const processNext = (next) => {
    if (next.done) return end;
    const result = resolveState(augmentList, next.value);
    if (isPromiseLike(result)) return asyncProcResolving(result);
    if (result) return result;
    return syncNext();
  };

  let asyncProcNext = offset > 0 ? (next) => {
    if (next.done) return end;
    offset--;
    if (offset <= 0) asyncProcNext = processNext;
    return syncNext();
  } : processNext;

  return {
    next: syncNext,
    error: it.error ? it.error.bind(it) : undefined,
    return: it.return ? it.return.bind(it) : undefined,
  };
}

function augmentativeIterateAsync(next) {
  const { augmentList, base, offset } = getIterableParameters(this, next, Symbol.asyncIterator, augmentativeIterateAsync);

  return Array.isArray(base) ? augmentativeIterateArrayAsync(augmentList, base, offset) : augmentativeIterateAsyncIterable(augmentList, base, offset);
}

function augmentativeForEachAsync(
  action,
) {
  const it = this[Symbol.asyncIterator] ? this[Symbol.asyncIterator]() : this[Symbol.iterator]();
  let keepGoing = true;
  const ṕrocessNextPromise = (x) => resolverAsync(processNext(x), recursive);
  const processNext = (next) => {
    keepGoing = !next.done;
    if (keepGoing) return action(next.value);
  };
  const recursive = async () => {
    while (keepGoing) {
      let next = it.next();
      if (isPromiseLike(next)) return next.then(ṕrocessNextPromise);
      next = processNext(next);
      if (isPromiseLike(next)) return next.then(recursive);
    }
  };

  return recursive();
}

function augmentativeToArrayAsync() {
  const result = [];

  const callResult = augmentativeForEachAsync
    .call(this, result.push.bind(result));
  return resolverAsync(callResult, () => result);
}

const filterAsyncIterable = getAugmentIterable(
  Symbol.asyncIterator,
  augmentativeIterateAsync,
  IGNORE,
);

const mapAsyncIterable = getAugmentIterable(
  Symbol.asyncIterator,
  augmentativeIterateAsync,
  YIELD,
);

const takeWhileAsyncIterable = getAugmentIterable(
  Symbol.asyncIterator,
  augmentativeIterateAsync,
  STOP,
);

const flatMapAsyncIterable = async function* flatMapAsyncIterable(iterable, mapper) {
  if (mapper) {
    for await (const item of iterable) {
      yield* mapper(item);
    }
  } else {
    for await (const item of iterable) {
      yield* item;
    }
  }
};

const skipAsyncIterable = getSkippedAugmentIterable(
  Symbol.asyncIterator,
  augmentativeIterateAsync,
);

const addFilterAsync = getAugmentIterable(Symbol.asyncIterator, augmentativeIterateAsync, IGNORE);
const addMapAsync = getAugmentIterable(Symbol.asyncIterator, augmentativeIterateAsync, YIELD);
const addTakeWhileAsync = getAugmentIterable(Symbol.asyncIterator, augmentativeIterateAsync, STOP);

module.exports = {
  addFilterAsync,
  addMapAsync,
  addTakeWhileAsync,
  augmentativeIterateAsync,
  augmentativeForEachAsync,
  augmentativeToArrayAsync,
  filterAsyncIterable,
  mapAsyncIterable,
  takeWhileAsyncIterable,
  flatMapAsyncIterable,
  skipAsyncIterable,
};
