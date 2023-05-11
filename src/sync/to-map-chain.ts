import { toMapChainRecipe } from '../recipes';
import { basic } from './basic-ingredients';
import { flatten } from './flatten';
import { group } from './group';
import { reduce } from './reduce';
import { toMap } from './to-map';

export const toMapChain = toMapChainRecipe({
  ...basic,
  group,
  toMap,
  flatten,
  reduce,
});
