import { waitAllRecipe } from '../recipes/wait-all-recipe';
import { basicAsync } from './basic-ingredients-async';

export const waitAllAsync = waitAllRecipe(basicAsync);
