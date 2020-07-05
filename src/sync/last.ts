import { reduce } from './reduce';
import { lastRecipe } from '../recipes/last-recipe';

export const last = lastRecipe(reduce, (predicate) => (current, next) =>
  predicate(next) ? next : current,
);
