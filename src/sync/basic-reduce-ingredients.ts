import { BasicReduceIngredients } from '../recipes/ingredients';
import { basic } from './basic-ingredients';
import { reduceAndMap } from './reduce-and-map';
import { reduce } from './reduce';

export const basicReduce: BasicReduceIngredients = {
  ...basic,
  reduce,
  reduceAndMap,
};
