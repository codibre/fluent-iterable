import { unwindRecipe } from '../recipes';
import { basicAsync } from './basic-ingredients-async';
import { combineJoinAsync } from './combine-join-async';
import { flattenAsync } from './flatten-async';
import { toObjectAsync } from './to-object-async';

export const unwindAsync = unwindRecipe({
  ...basicAsync,
  flatten: flattenAsync,
  combineJoin: combineJoinAsync,
  toObject: toObjectAsync,
});
