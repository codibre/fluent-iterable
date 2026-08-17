import { topRecipe } from '../recipes';
import { basicReduceAsync } from './basic-reduce-ingredients-async';

export const topAsync = topRecipe(basicReduceAsync);
