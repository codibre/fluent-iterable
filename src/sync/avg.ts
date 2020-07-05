import { reduceAndMap } from './reduce-and-map';
import { getAvg } from '../recipes/get-avg';

export const avg = getAvg(reduceAndMap, (mapper) => (current, next) => {
  current.sum += mapper(next);
  current.count++;
  return current;
});
