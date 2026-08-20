'use strict';

const offsetSymbol = Symbol('offset');
const baseIterable = Symbol('BaseIterableSymbol');
const addAugmentation = Symbol('addAugmentation');
const augments = Symbol('AugmentSymbol');
const end = {
  done: true,
};
const isPromiseLike = (p) => p && typeof p.then === 'function';

const resolverAsync = (
  promise,
  callback,
) => isPromiseLike(promise) ? promise.then(callback) : callback(promise);

function itClone(it) {
  let iteratorType;
  if (it[Symbol.asyncIterator]) iteratorType = Symbol.asyncIterator;
  else if (it[Symbol.iterator]) iteratorType = Symbol.iterator;
  else throw new Error('it is not an iterable nor an async iterable');

  return {
    [iteratorType]: it[augments] ? it[iteratorType] : it[iteratorType].bind(it),
    [augments]: it[augments],
    [baseIterable]: it[baseIterable],
    [addAugmentation]: it[addAugmentation],
  };
}


function addMutableAugmentation(type, action) {
  this[augments].push({
    type,
    action,
  });
  return this;
}

function addImmutableAugmentation(type, action, iteratorType, augmentativeIterate) {
  const augmentList = this[augments];
  const { length } = augmentList;
  const newAugmentList = new Array(length + 1);
  for (let i = 0; i < length; i++) newAugmentList[i] = augmentList[i];
  newAugmentList[length] = {
    type,
    action,
  };
  return {
    [iteratorType]: augmentativeIterate,
    [augments]: newAugmentList,
    [baseIterable]: this[baseIterable],
    [addAugmentation]: addImmutableAugmentation,
  };
}

const getSkippedAugmentIterable = (
  iteratorType,
  augmentativeIterate,
) => function (it, offset = 0, isImmutable) {
  const augmentList = it[augments];
  let baseOffset;

  if (!augmentList || augmentList.length === 0) baseOffset = it[offsetSymbol];

  return {
    [iteratorType]: augmentativeIterate,
    [baseIterable]: it,
    [offsetSymbol]: (baseOffset || 0) + Math.max(offset, 0),
    [addAugmentation]: it[addAugmentation] || (isImmutable ? addImmutableAugmentation : addMutableAugmentation),
  };
};

const getAugmentIterable = (
  iteratorType,
  augmentativeIterate,
  type,
) => function (it, action, isImmutable) {
  if (it[augments] && it[iteratorType]) return it[addAugmentation](type, action, iteratorType, augmentativeIterate);

  return {
    [iteratorType]: augmentativeIterate,
    [augments]: [{
      type,
      action,
    }],
    [baseIterable]: it,
    [addAugmentation]: isImmutable ? addImmutableAugmentation : addMutableAugmentation,
  };
};

const resolver = (value, callback) => callback(value);

function getIterableParameters(self, next, iteratorSymbol, augmentativeIterate) {
  let augmentList;
  let base;
  const offset = self[offsetSymbol] || 0;
  if (!next) {
    augmentList = self[augments] || [];
    base = self[baseIterable] || self;
  } else {
    base = {
      [iteratorSymbol]: augmentativeIterate.bind(self),
    };
    augmentList = [next];
  }

  return { augmentList, base, offset };
}

module.exports = {
  getAugmentIterable,
  getSkippedAugmentIterable,
  isPromiseLike,
  itClone,
  resolver,
  resolverAsync,
  end,
  getIterableParameters,
};
