import { toObjectChainReduceRecipe } from '../recipes';
import { basic } from './basic-ingredients';
import { group } from './group';
import { reduce } from './reduce';
import { toObject } from './to-object';
import { unwind } from './unwind';

export const toObjectChainReduce = toObjectChainReduceRecipe({
  ...basic,
  group,
  toObject,
  unwind,
  reduce,
});
