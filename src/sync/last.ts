import { reduce } from './reduce';
import { lastRecipe } from '../recipes';

export const last = lastRecipe(reduce, (predicate) => (current, next) =>
  predicate(next) ? next : current,
);
