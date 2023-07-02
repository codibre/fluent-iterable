import { toObjectChainRecipe } from '../recipes';
import { basic } from './basic-ingredients';
import { flatten } from './flatten';
import { group } from './group';
import { reduce } from './reduce';
import { toObject } from './to-object';

export const toObjectChain = toObjectChainRecipe({
  ...basic,
  group,
  toObject,
  flatten,
  reduce,
});
