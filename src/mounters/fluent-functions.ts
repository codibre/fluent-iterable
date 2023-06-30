import { distinctByAsync } from './../async/distinct-by-async';
import {
  any,
  contains,
  count,
  emit,
  first,
  hasExactly,
  hasLessOrExactly,
  hasLessThan,
  hasMoreOrExactly,
  hasMoreThan,
  toObject,
  toAsync,
  join,
  max,
  min,
  reduce,
  repeat,
  sum,
  take,
  top,
  withIndex,
  skipWhile,
  skip,
  append,
  prepend,
  concat,
  flatMerge,
  flatten,
  flatJoin,
  sort,
  sortBy,
  distinct,
  distinctBy,
  group,
  last,
  all,
  toArray,
  toMap,
  execute,
  avg,
  reduceAndMap,
  waitAll,
  combine,
  combineJoin,
  partition,
  forEach,
  map,
  filter,
  takeWhile,
  isDistinct,
  whenEmpty,
  catchSync,
  next,
  toSet,
  toObjectChain,
  unwind,
  finallySync,
  toObjectChainReduce,
} from '../sync';
import {
  allAsync,
  avgAsync,
  anyAsync,
  concatAsync,
  countAsync,
  firstAsync,
  groupAsync,
  joinAsync,
  lastAsync,
  reduceAsync,
  distinctAsync,
  executeAsync,
  flattenAsync,
  reduceAndMapAsync,
  skipWhileAsync,
  toObjectAsync,
  topAsync,
  minAsync,
  maxAsync,
  sumAsync,
  combineAsync,
  combineJoinAsync,
  forEachAsync,
  mapAsync,
  filterAsync,
  takeWhileAsync,
  isDistinctAsync,
  toMapAsync,
  toSetAsync,
  flatJoinAsync,
  toObjectChainAsync,
  unwindAsync,
  finallyAsync,
  toObjectChainReduceAsync,
} from '../async';
import { combineEmitter, concatEmitter } from '../emitter';
import * as common from '../common';
import { catchAsync } from '../async-base';

export const iterableFuncs = {
  ...common,
  withIndex,
  takeWhile,
  take,
  skipWhile,
  skip,
  map,
  filter,
  append,
  prepend,
  concat,
  repeat,
  flatten,
  flatMap: flatten,
  flatJoin,
  sort,
  sortBy,
  distinct,
  distinctBy,
  execute,
  combine,
  combineJoin,
  whenEmpty,
  catch: catchSync,
  unwind,
  finally: finallySync,
};

export const iterableAsyncFuncs = {
  concatAsync,
  takeWhileAsync,
  skipWhileAsync,
  mapAsync,
  filterAsync,
  flatJoinAsync,
  flattenAsync,
  flatMerge,
  flatMapAsync: flattenAsync,
  distinctAsync,
  distinctByAsync,
  executeAsync,
  toAsync,
  combineAsync,
  combineJoinAsync,
  combineEmitter,
  concatEmitter,
  catchAsync,
  unwindAsync,
  finallyAsync,
};

export const special = {
  partition,
  group,
};

export const specialAsync = {
  groupAsync,
};

export const resolvingFuncs = {
  count,
  countAsync,
  emit,
  first,
  firstAsync,
  last,
  lastAsync,
  reduceAndMap,
  reduceAndMapAsync,
  reduce,
  reduceAsync,
  all,
  allAsync,
  every: all,
  everyAsync: allAsync,
  any,
  anyAsync,
  some: any,
  someAsync: anyAsync,
  contains,
  toArray,
  toJSON: toArray,
  toObject,
  toObjectAsync,
  toObjectChain,
  toObjectChainReduce,
  toObjectChainAsync,
  toObjectChainReduceAsync,
  forEach,
  forEachAsync,
  join,
  joinAsync,
  sum,
  sumAsync,
  avg,
  avgAsync,
  top,
  topAsync,
  min,
  minAsync,
  max,
  maxAsync,
  hasExactly,
  hasLessOrExactly,
  hasLessThan,
  hasMoreOrExactly,
  hasMoreThan,
  waitAll,
  isDistinct,
  isDistinctAsync,
  next,
  toMap,
  toMapAsync,
  toSet,
  toSetAsync,
};
