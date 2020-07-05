import { getDistinct } from '../recipes/get-distinct';
import { filter } from './filter';

export const distinct = getDistinct(filter, (v, mapper, check) =>
  check(mapper(v)),
);
