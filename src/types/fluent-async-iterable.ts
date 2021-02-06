import { AsyncMapper, AsyncPredicate, Mapper } from 'augmentative-iterable';
import EventEmitter = require('events');
import {
  AsyncAction,
  AsyncReducer,
  Comparer,
  ErrorCallback,
  FluentEmitOptions,
  FluentEmitter,
} from './base';
import { AsyncFlattenFunction } from './function-types/flatten-function';
import {
  AsyncSortByFunction,
  FluentAsyncConcatFunction,
  FluentAsyncDistinctFunction,
  FluentAsyncFilterFunction,
  FluentAsyncIsDistinctFunction,
  FluentAsyncMapFunction,
  FluentAsyncPartitionFunction,
  FluentAsyncSkipFunction,
  FluentAsyncSkipWhileFunction,
  FluentAsyncSortFunction,
  FluentAsyncTakeWhileFunction,
  FluentAsyncWithIndexFunction,
} from './function-types';
import { TakeFunction } from './function-types/take-functions';
import { FluentAsyncAppendFunction } from './function-types/append-function';
import { FluentAsyncPrependFunction } from './function-types/prepend-function';
import { FluentAsyncRepeatFunction } from './function-types/repeat-function';
import { FluentAsyncGroupFunction } from './function-types/group-function';
import { FluentAsyncCountFunction } from './function-types/count-function';
import { FluentAsyncFirstFunction } from './function-types/first-function';
import { FluentAsyncLastFunction } from './function-types/last-function';
import { FluentAsyncReduceAndMapFunction } from './function-types/reduce-and-map-function';
import { FluentAsyncReduceFunction } from './function-types/reduce-function';
import { FluentAsyncAllFunction } from './function-types/all-function';
import { FluentAsyncAnyFunction } from './function-types/any-function';
import { FluentAsyncContainsFunction } from './function-types/contains-function';
import { FluentAsyncToArrayFunction } from './function-types/to-array-function';
import { FluentAsyncToObjectFunction } from './function-types/to-object-function';
import { FluentAsyncForEachFunction } from './function-types/for-each-function';
import { FluentAsyncExecuteFunction } from './function-types/execute-function';
import { FluentAsyncJoinFunction } from './function-types/join-function';
import { FluentAsyncSumFunction } from './function-types/sum-function';
import { FluentAsyncAvgFunction } from './function-types/avg-function';
import { FluentAsyncTopFunction } from './function-types/top-function';
import { FluentAsyncMinFunction } from './function-types/min-function';
import { FluentAsyncMaxFunction } from './function-types/max-function';
import { FluentAsyncHasExactlyFunction } from './function-types/has-exactly-fuction';
import { FluentAsyncHasLessThanFunction } from './function-types/has-less-than-function';
import { FluentAsyncHasLessOrExactly } from './function-types/has-less-or-exactly';
import { FluentAsyncHasMoreThanFunction } from './function-types/has-more-than-function';
import { FluentAsyncHasMoreOrExactlyFunction } from './function-types/has-more-or-exactly-function';
import { FluentAsyncMergeFunction } from './function-types/merge-function';
import { FluentAsyncMergeCatchingFunction } from './function-types/merge-catching-function';
import { FluentAsyncMergeEmitterFunction } from './function-types/merge-emitter-function';
import { FluentAsyncMergeEmitterCatchingFunction } from './function-types/merge-emitter-catching-function';
import { FluentAsyncWaitAllFunction } from './function-types/wait-all-function';
import { FluentAsyncCombineFunction } from './function-types/combine-function';
import { FluentAsyncEmitFunction } from './function-types/emit-function';

declare module './base' {
  interface FluentAsyncIterable<T> {
    withIndex: FluentAsyncWithIndexFunction<T>;
    takeWhile: FluentAsyncTakeWhileFunction<T>;
    take: TakeFunction<T>;
    skipWhile: FluentAsyncSkipWhileFunction<T>;
    skip: FluentAsyncSkipFunction<T>;
    map: FluentAsyncMapFunction<T>;
    filter: FluentAsyncFilterFunction<T>;
    partition: FluentAsyncPartitionFunction<T>;
    append: FluentAsyncAppendFunction<T>;
    prepend: FluentAsyncPrependFunction<T>;
    concat: FluentAsyncConcatFunction<T>;
    repeat: FluentAsyncRepeatFunction<T>;
    flatten: AsyncFlattenFunction<T>;
    sort: FluentAsyncSortFunction<T>;
    sortBy: AsyncSortByFunction<T>;
    distinct: FluentAsyncDistinctFunction<T>;
    isDistinct: FluentAsyncIsDistinctFunction<T>;
    group: FluentAsyncGroupFunction<T>;
    count: FluentAsyncCountFunction<T>;
    first: FluentAsyncFirstFunction<T>;
    last: FluentAsyncLastFunction<T>;
    reduceAndMap: FluentAsyncReduceAndMapFunction<T>;
    reduce: FluentAsyncReduceFunction<T>;
    all: FluentAsyncAllFunction<T>;
    any: FluentAsyncAnyFunction<T>;
    contains: FluentAsyncContainsFunction<T>;
    toArray: FluentAsyncToArrayFunction<T>;
    toObject: FluentAsyncToObjectFunction<T>;
    forEach: FluentAsyncForEachFunction<T>;
    execute: FluentAsyncExecuteFunction<T>;
    join: FluentAsyncJoinFunction<T>;
    sum: FluentAsyncSumFunction<T>;
    avg: FluentAsyncAvgFunction<T>;
    top: FluentAsyncTopFunction<T>;
    min: FluentAsyncMinFunction<T>;
    max: FluentAsyncMaxFunction<T>;
    hasExactly: FluentAsyncHasExactlyFunction;
    hasLessThan: FluentAsyncHasLessThanFunction;
    hasLessOrExactly: FluentAsyncHasLessOrExactly;
    hasMoreThan: FluentAsyncHasMoreThanFunction;
    hasMoreOrExactly: FluentAsyncHasMoreOrExactlyFunction;
    merge: FluentAsyncMergeFunction<T>;
    mergeCatching: FluentAsyncMergeCatchingFunction<T>;
    mergeEmitter: FluentAsyncMergeEmitterFunction<T>;
    mergeEmitterCatching: FluentAsyncMergeEmitterCatchingFunction<T>;
    waitAll: FluentAsyncWaitAllFunction<T>;
    combine: FluentAsyncCombineFunction<T>;
    emit: FluentAsyncEmitFunction<T>;
  }
}

export interface Test {}
