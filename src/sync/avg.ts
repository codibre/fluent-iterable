import { reduceAndMap } from './reduce-and-map';
import { avgRecipe } from '../recipes/avg-recipe';

export const avg = avgRecipe(reduceAndMap, (mapper) => (current, next) => {
  current.sum += mapper(next);
  current.count++;
  return current;
});
