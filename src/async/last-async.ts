import { lastRecipe } from '../recipes';
import { basicReduceAsync } from './basic-reduce-ingredients-async';

export const lastAsync = lastRecipe(basicReduceAsync);
