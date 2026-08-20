import { MinMaxIngredients } from '../recipes/ingredients';
import { basicAsync } from './basic-ingredients-async';
import { firstAsync } from './first-async';
import { lastAsync } from './last-async';

export const minMaxIngredientsAsync: MinMaxIngredients = {
  ...basicAsync,
  first: firstAsync,
  last: lastAsync,
};
