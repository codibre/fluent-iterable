import { combineRecipe } from '../recipes/combine-recipe';
import { flatten } from './flatten';
import { filter } from './filter';
import { basic } from './basic-ingredients';

export const combine = combineRecipe({
  ...basic,
  flatten,
  filter,
});
