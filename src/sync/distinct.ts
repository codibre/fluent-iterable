import { resolver } from 'augmentative-iterable';
import { distinctRecipe } from '../recipes';
import { all } from './all';
import { filter } from './filter';
import { hasLessOrExactly } from './has-less-or-exactly';
import { map } from './map';
import { partition } from './partition';

function distinctSyncRecipe(filterOrAll: Function) {
  return distinctRecipe({
    map,
    resolver,
    partition,
    filterOrAll,
    hasLessOrExactly,
  });
}

export const distinct = distinctSyncRecipe(filter);
export const isDistinct = distinctSyncRecipe(all);
