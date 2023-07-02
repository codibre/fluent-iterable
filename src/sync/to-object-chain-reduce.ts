import { toObjectChainReduceRecipe } from '../recipes';
import { basic } from './basic-ingredients';
import { flatten } from './flatten';
import { group } from './group';
import { reduce } from './reduce';
import { toObject } from './to-object';

export const toObjectChainReduce = toObjectChainReduceRecipe({
  ...basic,
  group,
  toObject,
  flatten,
  reduce,
});
