import { maxRecipe } from '../recipes';
import { minMaxIngredientsAsync } from './min-max-ingredients-async';

export const maxAsync = maxRecipe(minMaxIngredientsAsync);
