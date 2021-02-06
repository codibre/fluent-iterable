import { AsyncPredicate, Mapper, AsyncMapper } from 'augmentative-iterable';
import {
  Predicate,
  Comparer,
  Reducer,
  AsyncReducer,
  Action,
  AsyncAction,
  FluentEmitter,
  KVGroupTransform,
} from './base';
import {
  AsyncFlattenFunction,
  FlattenFunction,
} from './function-types/flatten-function';
import { SortFunction } from './function-types/sort-function';
import { SortByFunction } from './function-types/sort-by-function';
import {
  AsyncConcatFunction,
  AsyncDistinctFunction,
  AsyncFilterFunction,
  AsyncIsDistinctFunction,
  AsyncMapFunction,
  AsyncSkipWhileFunction,
  AsyncTakeWhileFunction,
  ConcatFunction,
  DistinctFunction,
  FilterFunction,
  IsDistinctFunction,
  MapFunction,
  PartitionFunction,
  SkipFunction,
  SkipWhileFunction,
  TakeFunction,
  TakeWhileFunction,
  WithIndexFunction,
} from './function-types';
import { AppendFunction } from './function-types/append-function';
import { PrependFunction } from './function-types/prepend-function';
import { RepeatFunction } from './function-types/repeat-function';
import {
  AsyncGroupFunction,
  GroupFunction,
} from './function-types/group-function';
import {
  AsyncCountFunction,
  CountFunction,
} from './function-types/count-function';
import {
  AsyncFirstFunction,
  FirstFunction,
} from './function-types/first-function';
import {
  AsyncLastFunction,
  LastFunction,
} from './function-types/last-function';
import {
  AsyncReduceAndMapFunction,
  ReduceAndMapFunction,
} from './function-types/reduce-and-map-function';
import {
  AsyncReduceFunction,
  ReduceFunction,
} from './function-types/reduce-function';
import { AllFunction, AsyncAllFunction } from './function-types/all-function';
import { AnyFunction, AsyncAnyFunction } from './function-types/any-function';
import { ContainsFunction } from './function-types/contains-function';
import { ToArrayFunction } from './function-types/to-array-function';
import {
  AsyncToObjectFunction,
  ToObjectFunction,
} from './function-types/to-object-function';
import { ToAsyncFunction } from './function-types/to-async-function';
import {
  AsyncForEachFunction,
  ForEachFunction,
} from './function-types/for-each-function';
import {
  AsyncExecuteFunction,
  ExecuteFunction,
} from './function-types/execute-function';
import {
  AsyncJoinFunction,
  JoinFunction,
} from './function-types/join-function';
import { AsyncSumFunction, SumFunction } from './function-types/sum-function';
import { AsyncAvgFunction, AvgFunction } from './function-types/avg-function';
import { AsyncTopFunction, TopFunction } from './function-types/top-function';
import { AsyncMinFunction, MinFunction } from './function-types/min-function';
import { AsyncMaxFunction, MaxFunction } from './function-types/max-function';
import { HasExactlyFunction } from './function-types/has-exactly-fuction';
import { HasLessThanFunction } from './function-types/has-less-than-function';
import { HasLessOrExactly } from './function-types/has-less-or-exactly';
import { HasMoreThanFunction } from './function-types/has-more-than-function';
import { HasMoreOrExactlyFunction } from './function-types/has-more-or-exactly-function';
import { WaitAllFunction } from './function-types/wait-all-function';
import {
  AsyncCombineFunction,
  CombineFunction,
} from './function-types/combine-function';
import { EmitFunction } from './function-types/emit-function';

declare module './base' {
  interface FluentIterable<T> {
    withIndex: WithIndexFunction<T>;
    takeWhile: TakeWhileFunction<T>;
    takeWhileAsync: AsyncTakeWhileFunction<T>;
    take: TakeFunction<T>;
    skipWhile: SkipWhileFunction<T>;
    skipWhileAsync: AsyncSkipWhileFunction<T>;
    skip: SkipFunction<T>;
    map: MapFunction<T>;
    mapAsync: AsyncMapFunction<T>;
    filter: FilterFunction<T>;
    filterAsync: AsyncFilterFunction<T>;
    partition: PartitionFunction<T>;
    append: AppendFunction<T>;
    prepend: PrependFunction<T>;
    concat: ConcatFunction<T>;
    concatAsync: AsyncConcatFunction<T>;
    repeat: RepeatFunction<T>;
    flatten: FlattenFunction<T>;
    flatMap: FlattenFunction<T>;
    flattenAsync: AsyncFlattenFunction<T>;
    sort: SortFunction<T>;
    sortBy: SortByFunction<T>;
    distinct: DistinctFunction<T>;
    distinctAsync: AsyncDistinctFunction<T>;
    isDistinct: IsDistinctFunction<T>;
    isDistinctAsync: AsyncIsDistinctFunction<T>;
    group: GroupFunction<T>;
    groupAsync: AsyncGroupFunction<T>;
    count: CountFunction<T>;
    countAsync: AsyncCountFunction<T>;
    first: FirstFunction<T>;
    firstAsync: AsyncFirstFunction<T>;
    last: LastFunction<T>;
    lastAsync: AsyncLastFunction<T>;
    reduceAndMap: ReduceAndMapFunction<T>;
    reduceAndMapAsync: AsyncReduceAndMapFunction<T>;
    reduce: ReduceFunction<T>;
    reduceAsync: AsyncReduceFunction<T>;
    all: AllFunction<T>;
    allAsync: AsyncAllFunction<T>;
    any: AnyFunction<T>;
    anyAsync: AsyncAnyFunction<T>;
    contains: ContainsFunction<T>;
    toArray: ToArrayFunction<T>;
    toObject: ToObjectFunction<T>;
    toObjectAsync: AsyncToObjectFunction<T>;
    toAsync: ToAsyncFunction<T>;
    forEach: ForEachFunction<T>;
    forEachAsync: AsyncForEachFunction<T>;
    execute: ExecuteFunction<T>;
    executeAsync: AsyncExecuteFunction<T>;
    join: JoinFunction<T>;
    joinAsync: AsyncJoinFunction<T>;
    sum: SumFunction<T>;
    sumAsync: AsyncSumFunction<T>;
    avg: AvgFunction<T>;
    avgAsync: AsyncAvgFunction<T>;
    top: TopFunction<T>;
    topAsync: AsyncTopFunction<T>;
    min: MinFunction<T>;
    minAsync: AsyncMinFunction<T>;
    max: MaxFunction<T>;
    maxAsync: AsyncMaxFunction<T>;
    hasExactly: HasExactlyFunction;
    hasLessThan: HasLessThanFunction;
    hasLessOrExactly: HasLessOrExactly;
    hasMoreThan: HasMoreThanFunction;
    hasMoreOrExactly: HasMoreOrExactlyFunction;
    waitAll: WaitAllFunction<T>;
    combine: CombineFunction<T>;
    combineAsync: AsyncCombineFunction<T>;
    emit: EmitFunction<T>;
  }
}
