import { basic } from './basic-ingredients';
import { distinctByRecipe } from '../recipes';
import { filter } from './filter';
import { hasLessOrExactly } from './has-less-or-exactly';
import { partition } from './partition';
import { reduce } from './reduce';
import { Ingredient, ResolverIngredient } from '../recipes/ingredients';

function distinctSyncRecipe(filterOrAll: Ingredient | ResolverIngredient) {
  return distinctByRecipe({
    ...basic,
    partition,
    filterOrAll,
    hasLessOrExactly,
    reduce,
  });
}

export const distinctBy = distinctSyncRecipe(filter);
