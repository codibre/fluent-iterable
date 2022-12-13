import { unwindRecipe } from '../recipes';
import { basic } from './basic-ingredients';
import { combineJoin } from './combine-join';
import { flatten } from './flatten';
import { toObject } from './to-object';

export const unwind = unwindRecipe({
  ...basic,
  flatten,
  combineJoin,
  toObject,
});
