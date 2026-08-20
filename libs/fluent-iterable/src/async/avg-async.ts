import { avgRecipe } from '../recipes';
import { basicAsync } from './basic-ingredients-async';

export const avgAsync = avgRecipe(basicAsync);
