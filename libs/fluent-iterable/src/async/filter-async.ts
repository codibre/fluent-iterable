import {
  filterAsyncIterable,
  resolverAsync,
  takeWhileAsyncIterable,
} from 'augmentative-iterable';
import { filterRecipe } from '../recipes/filter-recipe';

export const filterAsync = filterRecipe(
  filterAsyncIterable,
  takeWhileAsyncIterable,
  resolverAsync,
);
