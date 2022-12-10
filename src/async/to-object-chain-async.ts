import { toObjectChainRecipe } from '../recipes';
import { basicAsync } from './basic-ingredients-async';
import { flatJoinAsync } from './flat-join-async';
import { groupAsync } from './group-async';
import { toObjectAsync } from './to-object-async';

export const toObjectChainAsync = toObjectChainRecipe({
  ...basicAsync,
  flatJoin: flatJoinAsync,
  group: groupAsync,
  toObject: toObjectAsync,
});
