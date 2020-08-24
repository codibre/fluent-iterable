import { ResolverType } from '../types-internal';

export interface BasicIngredients {
  resolver: ResolverType;
  map: Function;
  filter: Function;
  takeWhile: Function;
  forEach: Function;
  iterate: Function;
  iterateAll: Function;
  toArray: Function;
}

export interface BasicReduceIngredients extends BasicIngredients {
  reduce: Function;
  reduceAndMap: Function;
}

export interface CombineIngredients extends BasicIngredients {
  flatten: Function;
}

export interface DistinctIngredients extends BasicIngredients {
  partition: Function;
  filterOrAll: Function;
  hasLessOrExactly: Function;
}

export interface GroupIngredients extends BasicReduceIngredients {
  partition: Function;
}

export interface MinMaxIngredients extends BasicIngredients {
  first: Function;
  last: Function;
}
