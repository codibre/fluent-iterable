import { ResolverType } from '../types-internal';

export interface ResolveAndMapIngredients {
  resolver: ResolverType;
  map: Function;
}

export interface CombineFuncs extends ResolveAndMapIngredients {
  flatten: Function;
  forEach: Function;
  filter: Function;
}

export interface DistinctIngredients extends ResolveAndMapIngredients {
  partition: Function;
  filterOrAll: Function;
  hasLessOrExactly: Function;
}
