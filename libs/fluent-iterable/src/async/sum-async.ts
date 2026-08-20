import { sumRecipe } from '../recipes';
import { basicReduceAsync } from './basic-reduce-ingredients-async';

export const sumAsync = sumRecipe(basicReduceAsync);
