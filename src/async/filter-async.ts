import { filterAsyncIterable, resolverAsync } from 'augmentative-iterable';
import { filterRecipe } from '../recipes/filter-recipe';
import { takeWhileAsync } from './take-while-async';

export const filterAsync = filterRecipe(
  filterAsyncIterable,
  takeWhileAsync,
  resolverAsync,
);
