import { getDistinct } from '../common/get-distinct';
import { filter } from './filter';

export const distinct = getDistinct(filter, (v, mapper, check) =>
  check(mapper(v)),
);
