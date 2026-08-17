import { MinMaxIngredients } from '../recipes/ingredients';
import { basic } from './basic-ingredients';
import { first } from './first';
import { last } from './last';

export const minMaxIngredients: MinMaxIngredients = {
  ...basic,
  first,
  last,
};
