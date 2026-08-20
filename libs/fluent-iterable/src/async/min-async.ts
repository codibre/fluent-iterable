import { minRecipe } from '../recipes';
import { minMaxIngredientsAsync } from './min-max-ingredients-async';

export const minAsync = minRecipe(minMaxIngredientsAsync);
