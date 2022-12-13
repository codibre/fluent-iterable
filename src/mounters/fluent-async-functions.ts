import {
  anyAsync,
  appendAsync,
  avgAsync,
  emitAsync,
  prependAsync,
  groupAsync,
  joinAsync,
  distinctAsync,
  executeAsync,
  firstAsync,
  flattenAsync,
  skipWhileAsync,
  toObjectAsync,
  allAsync,
  reduceAndMapAsync,
  lastAsync,
  repeatAsync,
  skipAsync,
  sortAsync,
  sortByAsync,
  toArrayAsync,
  takeAsync,
  withIndexAsync,
  concatAsync,
  hasExactlyAsync,
  hasLessOrExactlyAsync,
  hasLessThanAsync,
  hasMoreOrExactlyAsync,
  hasMoreThanAsync,
  countAsync,
  reduceAsync,
  topAsync,
  minAsync,
  maxAsync,
  sumAsync,
  containsAsync,
  waitAllAsync,
  combineAsync,
  combineJoinAsync,
  partitionAsync,
  forEachAsync,
  takeWhileAsync,
  filterAsync,
  mapAsync,
  isDistinctAsync,
  flatMergeAsync,
  nextAsync,
  toMapAsync,
  toSetAsync,
  flatJoinAsync,
  toObjectChainAsync,
  unwindAsync,
} from '../async';
import {
  combineEmitter,
  concatEmitter,
  mergeEmitter,
  mergeEmitterCatching,
} from '../emitter';
import {
  catchAsync,
  merge,
  mergeCatching,
  whenEmptyAsync,
} from '../async-base';
import * as common from '../common';

export const asyncIterableFuncs = {
  ...common,
  withIndex: withIndexAsync,
  takeWhile: takeWhileAsync,
  takeWhileAsync,
  take: takeAsync,
  skipWhile: skipWhileAsync,
  skipWhileAsync,
  skip: skipAsync,
  map: mapAsync,
  mapAsync,
  filter: filterAsync,
  filterAsync,
  append: appendAsync,
  prepend: prependAsync,
  concat: concatAsync,
  repeat: repeatAsync,
  flatJoin: flatJoinAsync,
  flatten: flattenAsync,
  flatMap: flattenAsync,
  flatMerge: flatMergeAsync,
  sort: sortAsync,
  sortBy: sortByAsync,
  distinct: distinctAsync,
  distinctAsync,
  execute: executeAsync,
  merge,
  mergeCatching,
  combine: combineAsync,
  combineJoin: combineJoinAsync,
  combineEmitter,
  concatEmitter,
  mergeEmitter,
  mergeEmitterCatching,
  whenEmpty: whenEmptyAsync,
  catch: catchAsync,
  unwind: unwindAsync,
};

export const asyncSpecial = {
  partition: partitionAsync,
  group: groupAsync,
  next: nextAsync,
};

export const asyncResolvingFuncs = {
  count: countAsync,
  first: firstAsync,
  last: lastAsync,
  reduceAndMap: reduceAndMapAsync,
  reduce: reduceAsync,
  all: allAsync,
  every: allAsync,
  any: anyAsync,
  some: anyAsync,
  contains: containsAsync,
  emit: emitAsync,
  toArray: toArrayAsync,
  toObject: toObjectAsync,
  toObjectChain: toObjectChainAsync,
  forEach: forEachAsync,
  join: joinAsync,
  sum: sumAsync,
  avg: avgAsync,
  top: topAsync,
  min: minAsync,
  max: maxAsync,
  hasExactly: hasExactlyAsync,
  hasLessOrExactly: hasLessOrExactlyAsync,
  hasLessThan: hasLessThanAsync,
  hasMoreOrExactly: hasMoreOrExactlyAsync,
  hasMoreThan: hasMoreThanAsync,
  waitAll: waitAllAsync,
  isDistinct: isDistinctAsync,
  toMap: toMapAsync,
  toSet: toSetAsync,
};
