import { AnyIterable } from 'augmentative-iterable';
import { AsyncMapper } from '../types';
import { AsyncReducer, Comparer, Equality } from '../types-base';
import { AnyMapper, CompareProvider, ResolverType } from '../types-internal';

export type IngredientOpt = (predicate?: AnyMapper<any>) => AnyIterable<any>;
export type Ingredient = (predicate: AnyMapper<any>) => AnyIterable<any>;
export type ComparerIngredient = (comparer: Comparer<any>) => AnyIterable<any>;
export type ResolverIngredient = (predicate?: AnyMapper<any>) => any;
export type ReduceIngredient = (
  reducer: AsyncReducer<any, any>,
  initial: any,
) => any;
export type ReduceAndMapIngredient = (
  reducer: AsyncReducer<any, any>,
  initial: any,
  result: AsyncMapper<any, any>,
) => any;
export type PartitionIngredient = (
  size: number | Equality<any>,
) => AnyIterable<AnyIterable<any>>;
export type PartitionBaseIngredient = (
  it: any,
  size: number | Equality<any>,
) => AnyIterable<AnyIterable<any>>;
export type ThresholdIngredient = (
  threshold: number,
) => AnyIterable<AnyIterable<any>>;
export type IterateIngredient = (t: any) => any;
export type ConcatIngredient = (
  this: AnyIterable<any>,
  ...iterables: Array<AnyIterable<any>>
) => AnyIterable<any>;
export type EmptyIngredient = () => AnyIterable<any>;

export interface BasicIngredients {
  resolver: ResolverType;
  map: Ingredient;
  filter: Ingredient;
  takeWhile: Ingredient;
  forEach: ResolverIngredient;
  iterate: IterateIngredient;
  iterateAll: IterateIngredient;
  toArray: ResolverIngredient;
}

export interface BasicReduceIngredients extends BasicIngredients {
  reduce: ReduceIngredient;
  reduceAndMap: ReduceAndMapIngredient;
}

export interface CombineIngredients extends BasicIngredients {
  flatten: IngredientOpt;
}

export interface GroupIngredients extends BasicReduceIngredients {
  partition: PartitionIngredient;
}

export interface DistinctIngredients extends BasicIngredients {
  partition: PartitionIngredient;
  filterOrAll: Ingredient | ResolverIngredient;
  hasLessOrExactly: ThresholdIngredient;
}

export interface MinMaxIngredients extends BasicIngredients {
  first: ResolverIngredient;
  last: ResolverIngredient;
}

export interface ComparisonIngredients extends BasicIngredients {
  count: IngredientOpt;
  take: ThresholdIngredient;
  comparer: CompareProvider;
}
