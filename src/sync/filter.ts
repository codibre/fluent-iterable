import {
  filterIterable,
  resolver,
  takeWhileIterable,
} from 'augmentative-iterable';
import { filterRecipe } from '../recipes/filter-recipe';

export const filter = filterRecipe(filterIterable, takeWhileIterable, resolver);
