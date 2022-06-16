import * as f from './function-types';

declare module './base' {
  interface FluentIterable<T> {
    withIndex: f.WithIndexFunction<T>;
    takeWhile: f.TakeWhileFunction<T>;
    takeWhileAsync: f.AsyncTakeWhileFunction<T>;
    take: f.TakeFunction<T>;
    skipWhile: f.SkipWhileFunction<T>;
    skipWhileAsync: f.AsyncSkipWhileFunction<T>;
    skip: f.SkipFunction<T>;
    map: f.MapFunction<T>;
    mapAsync: f.AsyncMapFunction<T>;
    filter: f.FilterFunction<T>;
    filterAsync: f.AsyncFilterFunction<T>;
    partition: f.PartitionFunction<T>;
    append: f.AppendFunction<T>;
    prepend: f.PrependFunction<T>;
    concat: f.ConcatFunction<T>;
    concatAsync: f.AsyncConcatFunction<T>;
    repeat: f.RepeatFunction<T>;
    flatten: f.FlattenFunction<T>;
    flatMap: f.FlattenFunction<T>;
    flatJoin: f.FlatJoinFunction<T>;
    flatJoinAsync: f.AsyncFlatJoinFunction<T>;
    flattenAsync: f.AsyncFlattenFunction<T>;
    flatMapAsync: f.AsyncFlattenFunction<T>;
    sort: f.SortFunction<T>;
    sortBy: f.SortByFunction<T>;
    distinct: f.DistinctFunction<T>;
    distinctAsync: f.AsyncDistinctFunction<T>;
    isDistinct: f.IsDistinctFunction<T>;
    isDistinctAsync: f.AsyncIsDistinctFunction<T>;
    group: f.GroupFunction<T>;
    groupAsync: f.AsyncGroupFunction<T>;
    count: f.CountFunction<T>;
    countAsync: f.AsyncCountFunction<T>;
    first: f.FirstFunction<T>;
    firstAsync: f.AsyncFirstFunction<T>;
    last: f.LastFunction<T>;
    lastAsync: f.AsyncLastFunction<T>;
    reduceAndMap: f.ReduceAndMapFunction<T>;
    reduceAndMapAsync: f.AsyncReduceAndMapFunction<T>;
    reduce: f.ReduceFunction<T>;
    reduceAsync: f.AsyncReduceFunction<T>;
    all: f.AllFunction<T>;
    allAsync: f.AsyncAllFunction<T>;
    every: f.AllFunction<T>;
    everyAsync: f.AsyncAllFunction<T>;
    any: f.AnyFunction<T>;
    anyAsync: f.AsyncAnyFunction<T>;
    some: f.AnyFunction<T>;
    someAsync: f.AsyncAnyFunction<T>;
    contains: f.ContainsFunction<T>;
    toArray: f.ToArrayFunction<T>;
    toMap: f.ToMapFunction<T>;
    toMapAsync: f.AsyncToMapFunction<T>;
    toObject: f.ToObjectFunction<T>;
    toObjectAsync: f.AsyncToObjectFunction<T>;
    toSet: f.ToSetFunction<T>;
    toSetAsync: f.AsyncToSetFunction<T>;
    toAsync: f.ToAsyncFunction<T>;
    forEach: f.ForEachFunction<T>;
    forEachAsync: f.AsyncForEachFunction<T>;
    execute: f.ExecuteFunction<T>;
    executeAsync: f.AsyncExecuteFunction<T>;
    join: f.JoinFunction<T>;
    joinAsync: f.AsyncJoinFunction<T>;
    sum: f.SumFunction<T>;
    sumAsync: f.AsyncSumFunction<T>;
    avg: f.AvgFunction<T>;
    avgAsync: f.AsyncAvgFunction<T>;
    top: f.TopFunction<T>;
    topAsync: f.AsyncTopFunction<T>;
    min: f.MinFunction<T>;
    minAsync: f.AsyncMinFunction<T>;
    max: f.MaxFunction<T>;
    maxAsync: f.AsyncMaxFunction<T>;
    hasExactly: f.HasExactlyFunction;
    hasLessThan: f.HasLessThanFunction;
    hasLessOrExactly: f.HasLessOrExactly;
    hasMoreThan: f.HasMoreThanFunction;
    hasMoreOrExactly: f.HasMoreOrExactlyFunction;
    waitAll: f.WaitAllFunction<T>;
    combine: f.CombineFunction<T>;
    combineAsync: f.AsyncCombineFunction<T>;
    emit: f.EmitFunction<T>;
    flatMerge: f.FlatMergeFunction<T>;
    whenEmpty: f.WhenEmptyFunction;
    catch: f.CatchFunction<T>;
    catchAsync: f.AsyncCatchFunction<T>;
    next: f.NextFunction<T>;
  }
}
