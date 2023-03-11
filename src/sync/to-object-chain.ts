import { toObjectChainRecipe } from '../recipes';
import { basic } from './basic-ingredients';
import { group } from './group';
import { reduce } from './reduce';
import { toObject } from './to-object';
import { unwind } from './unwind';

export const toObjectChain = toObjectChainRecipe({
  ...basic,
  group,
  toObject,
  unwind,
  reduce,
});
