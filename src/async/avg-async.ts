import { reduceAndMapAsync } from './reduce-and-map-async';
import { avgRecipe } from '../recipes';

export const avgAsync = avgRecipe(
  reduceAndMapAsync,
  (mapper) => async (current, next) => {
    current.sum += await mapper(next);
    current.count++;
    return current;
  },
);
