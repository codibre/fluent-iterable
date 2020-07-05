import { reduceAndMapAsync } from './reduce-and-map-async';
import { avgRecipe } from '../recipes/avg-recipe';

export const avgAsync = avgRecipe(
  reduceAndMapAsync,
  (mapper) => async (current, next) => {
    current.sum += await mapper(next);
    current.count++;
    return current;
  },
);
