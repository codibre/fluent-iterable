import * as f from './function-types';

declare module './base' {
  interface FluentAsyncIterable<T> {
    withIndex: f.AsyncWithIndexFunction<T>;
    takeWhile: f.AsyncTakeWhileFunction<T>;
    take: f.AsyncTakeFunction<T>;
    skipWhile: f.AsyncSkipWhileFunction<T>;
    skip: f.AsyncSkipFunction<T>;
    map: f.AsyncMapFunction<T>;
    filter: f.AsyncFilterFunction<T>;
    partition: f.AsyncPartitionFunction<T>;
    append: f.AsyncAppendFunction<T>;
    prepend: f.AsyncPrependFunction<T>;
    concat: f.AsyncConcatFunction<T>;
    repeat: f.AsyncRepeatFunction<T>;
    flatJoin: f.AsyncFlatJoinFunction<T>;
    flatten: f.AsyncFlattenFunction<T>;
    flatMap: f.AsyncFlattenFunction<T>;
    sort: f.AsyncSortFunction<T>;
    sortBy: f.AsyncSortByFunction<T>;
    distinct: f.AsyncDistinctFunction<T>;
    isDistinct: f.AsyncIsDistinctFunction<T>;
    group: f.AsyncGroupFunction<T>;
    count: f.AsyncCountFunction<T>;
    first: f.AsyncFirstFunction<T>;
    last: f.AsyncLastFunction<T>;
    reduceAndMap: f.AsyncReduceAndMapFunction<T>;
    reduce: f.AsyncReduceFunction<T>;
    all: f.AsyncAllFunction<T>;
    every: f.AsyncAllFunction<T>;
    any: f.AsyncAnyFunction<T>;
    some: f.AsyncAnyFunction<T>;
    contains: f.AsyncContainsFunction<T>;
    toArray: f.AsyncToArrayFunction<T>;
    toMap: f.AsyncToMapFunction<T>;
    toObject: f.AsyncToObjectFunction<T>;
    toObjectChain: f.AsyncToObjectChainFunction<T>;
    toSet: f.AsyncToSetFunction<T>;
    forEach: f.AsyncForEachFunction<T>;
    execute: f.AsyncExecuteFunction<T>;
    join: f.AsyncJoinFunction<T>;
    sum: f.AsyncSumFunction<T>;
    avg: f.AsyncAvgFunction<T>;
    top: f.AsyncTopFunction<T>;
    min: f.AsyncMinFunction<T>;
    max: f.AsyncMaxFunction<T>;
    hasExactly: f.AsyncHasExactlyFunction;
    hasLessThan: f.AsyncHasLessThanFunction;
    hasLessOrExactly: f.AsyncHasLessOrExactly;
    hasMoreThan: f.AsyncHasMoreThanFunction;
    hasMoreOrExactly: f.AsyncHasMoreOrExactlyFunction;
    merge: f.AsyncMergeFunction<T>;
    mergeCatching: f.AsyncMergeCatchingFunction<T>;
    mergeEmitter: f.AsyncMergeEmitterFunction<T>;
    mergeEmitterCatching: f.AsyncMergeEmitterCatchingFunction<T>;
    waitAll: f.AsyncWaitAllFunction<T>;
    combine: f.AsyncCombineFunction<T>;
    combineJoin: f.AsyncCombineJoinFunction<T>;
    emit: f.AsyncEmitFunction<T>;
    flatMerge: f.FlatMergeFunction<T>;
    whenEmpty: f.AsyncWhenEmptyFunction;
    catch: f.AsyncCatchFunction<T>;
    next: f.AsyncNextFunction<T>;
    unwind: f.UnwindFunction<T, 'async'>;
  }
}
