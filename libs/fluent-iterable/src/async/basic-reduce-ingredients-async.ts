import { BasicReduceIngredients } from '../recipes/ingredients';
import { basicAsync } from './basic-ingredients-async';
import { reduceAndMapAsync } from './reduce-and-map-async';
import { reduceAsync } from './reduce-async';

export const basicReduceAsync: BasicReduceIngredients = {
  ...basicAsync,
  reduce: reduceAsync,
  reduceAndMap: reduceAndMapAsync,
};
