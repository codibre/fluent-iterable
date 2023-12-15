import { basicAsync } from './basic-ingredients-async';
import { aggregateRecipe } from '../recipes';

export const aggregateAsync = aggregateRecipe(basicAsync);
