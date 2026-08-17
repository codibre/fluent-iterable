import { resolver } from 'augmentative-iterable';
import { BasicIngredients } from '../recipes/ingredients';
import { filter } from './filter';
import { map } from './map';
import { forEach } from './for-each';
import { takeWhile } from './take-while';
import { iterate, iterateAll } from '../utils';
import { toArray } from './to-array';

export const basic: BasicIngredients = {
  map,
  resolver,
  filter,
  forEach,
  takeWhile,
  iterate,
  iterateAll,
  toArray,
};
