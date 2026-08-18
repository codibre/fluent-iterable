'use strict';

const {
  getAugmentIterable,
  end,
  getSkippedAugmentIterable,
  getIterableParameters,
} = require('./augments-utils');
const {
  YIELD,
  IGNORE,
  STOP,
} = require('./augments-types');

function resolveState(augmentList, value) {
  let ai = 0;
  const { length } = augmentList;
  while (ai < length) {
    const { action, type } = augmentList[ai];
    const actionResult = action ? action(value) : value;
    if (type === YIELD) value = actionResult;
    else if (!actionResult) return type === STOP ? end : undefined;
    ai++;
  }
  return {
    done: false,
    value,
  };
}

function augmentativeIterateArray(augmentList, base, offset) {
  const length = base.length;
  let i = -1 + offset;

  return {
    next: () => {
      while (++i < length) {
        const result = resolveState(augmentList, base[i]);
        if (result) return result;
      }

      return end;
    },
  };
}

function augmentativeIterateIterable(augmentList, base, offset) {
  const it = base[Symbol.iterator]();
  const finalNext = () => {
    let n;
    while (!(n = it.next()).done) {
      const result = resolveState(augmentList, n.value);
      if (result) return result;
    }

    return end;
  };
  if (offset > 0) {
    let current = () => {
      do {
        offset--;
        if (it.next().done) return end;
      } while (offset > 0);

      current = finalNext;
      return current();
    };

    return {
      next: () => current(),
      error: it.error ? it.error.bind(it) : undefined,
      return: it.return ? it.return.bind(it) : undefined,
    };
  }

  return {
    next: finalNext,
    error: it.error ? it.error.bind(it) : undefined,
    return: it.return ? it.return.bind(it) : undefined,
  };
}

function augmentativeIterate(next) {
  const { augmentList, base, offset } = getIterableParameters(this, next, Symbol.iterator, augmentativeIterate);

  return Array.isArray(base) ? augmentativeIterateArray(augmentList, base, offset) : augmentativeIterateIterable(augmentList, base, offset);
}

function augmentativeForEach(
  action,
) {
  const it = augmentativeIterate.call(this);
  let next;
  while (!(next = it.next()).done) action(next.value);
  if (it.return) it.return();
}

function augmentativeToArray() {
  const result = [];

  augmentativeForEach.call(this, result.push.bind(result));

  return result;
}

const filterIterable = getAugmentIterable(
  Symbol.iterator,
  augmentativeIterate,
  IGNORE,
);

const mapIterable = getAugmentIterable(
  Symbol.iterator,
  augmentativeIterate,
  YIELD,
);

const takeWhileIterable = getAugmentIterable(
  Symbol.iterator,
  augmentativeIterate,
  STOP,
);

const flatMapIterable = function* flatMapIterable(iterable, mapper) {
  if (mapper) {
    for (const item of iterable) {
      yield* mapper(item);
    }
  } else {
    for (const item of iterable) {
      yield* item;
    }
  }
};

const skipIterable = getSkippedAugmentIterable(
  Symbol.iterator,
  augmentativeIterate,
);

const addFilter = getAugmentIterable(Symbol.iterator, augmentativeIterate, IGNORE);
const addMap = getAugmentIterable(Symbol.iterator, augmentativeIterate, YIELD);
const addTakeWhile = getAugmentIterable(Symbol.iterator, augmentativeIterate, STOP);

module.exports = {
  addFilter,
  addMap,
  addTakeWhile,
  augmentativeIterate,
  augmentativeForEach,
  augmentativeToArray,
  filterIterable,
  mapIterable,
  takeWhileIterable,
  flatMapIterable,
  skipIterable,
};
