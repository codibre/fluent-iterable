import { countRecipe } from '../recipes';
import { basicReduceAsync } from './basic-reduce-ingredients-async';

export const countAsync = countRecipe(basicReduceAsync);
