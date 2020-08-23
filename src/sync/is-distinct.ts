import { resolver } from 'augmentative-iterable';
import { distinctRecipe, orderedDistinctRecipe } from '../recipes';
import { all } from './all';
import { hasLessOrExactly } from './has-less-or-exactly';
import { map } from './map';
import { partition } from './partition';

export const isDistinct = distinctRecipe(
  all,
  resolver,
  orderedDistinctRecipe({
    map,
    resolver,
    partition,
    filterOrAll: all,
    hasLessOrExactly,
  }),
);
