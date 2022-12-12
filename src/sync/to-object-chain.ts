import { toObjectChainRecipe } from '../recipes';
import { basic } from './basic-ingredients';
import { flatJoin } from './flat-join';
import { group } from './group';
import { toObject } from './to-object';

export const toObjectChain = toObjectChainRecipe({
  ...basic,
  flatJoin,
  group,
  toObject,
});
