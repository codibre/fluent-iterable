import { filterIterable, resolver } from 'augmentative-iterable';
import { filterRecipe } from '../recipes/filter-recipe';
import { takeWhile } from './take-while';

export const filter = filterRecipe(filterIterable, takeWhile, resolver);
