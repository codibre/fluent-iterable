import { resolver } from 'augmentative-iterable';
import { resolveAndMapIngredients } from '../async/ingredients-async';
import { distinctRecipe } from '../recipes';
import { all } from './all';
import { filter } from './filter';
import { hasLessOrExactly } from './has-less-or-exactly';
import { partition } from './partition';

function distinctSyncRecipe(filterOrAll: Function) {
  return distinctRecipe({
    ...resolveAndMapIngredients,
    partition,
    filterOrAll,
    hasLessOrExactly,
  });
}

export const distinct = distinctSyncRecipe(filter);
export const isDistinct = distinctSyncRecipe(all);
