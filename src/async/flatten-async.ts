import { flattenRecipe } from '../recipes';
import { basicAsync } from './basic-ingredients-async';

export const flattenAsync = flattenRecipe(basicAsync);
