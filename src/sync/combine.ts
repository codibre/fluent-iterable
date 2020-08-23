import { combineRecipe } from '../recipes/combine-recipe';
import { flatten } from './flatten';
import { forEach } from './for-each';
import { filter } from './filter';
import { resolveAndMapIngredients } from './ingredients';

export const combine = combineRecipe({
  ...resolveAndMapIngredients,
  flatten,
  forEach,
  filter,
});
