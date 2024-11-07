import { toMapChainReduceRecipe } from '../recipes';
import { basic } from './basic-ingredients';
import { flatten } from './flatten';
import { group } from './group';
import { reduce } from './reduce';
import { toMap } from './to-map';

export const toMapChainReduce = toMapChainReduceRecipe({
  ...basic,
  group,
  toMap,
  flatten,
  reduce,
});
