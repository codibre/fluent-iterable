import { sortRecipe } from '../recipes';
import { basicAsync } from './basic-ingredients-async';

export const sortAsync = sortRecipe(basicAsync);
