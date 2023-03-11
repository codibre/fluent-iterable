import { toObjectChainRecipe } from '../recipes';
import { basicAsync } from './basic-ingredients-async';
import { groupAsync } from './group-async';
import { reduceAsync } from './reduce-async';
import { toObjectAsync } from './to-object-async';
import { unwindAsync } from './unwind-async';

export const toObjectChainAsync = toObjectChainRecipe({
  ...basicAsync,
  group: groupAsync,
  toObject: toObjectAsync,
  unwind: unwindAsync,
  reduce: reduceAsync,
});
