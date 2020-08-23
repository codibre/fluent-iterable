import { resolver } from 'augmentative-iterable';
import { distinctRecipe, orderedDistinctRecipe } from '../recipes';
import { filter } from './filter';
import { hasLessOrExactly } from './has-less-or-exactly';
import { map } from './map';
import { partition } from './partition';

export const distinct = distinctRecipe(
  filter,
  resolver,
  orderedDistinctRecipe({
    map,
    resolver,
    partition,
    filterOrAll: filter,
    hasLessOrExactly,
  }),
);
