import { toSetRecipe } from '../recipes';
import { basicAsync } from './basic-ingredients-async';

export const toSetAsync = toSetRecipe(basicAsync);
