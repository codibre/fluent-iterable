import { joinRecipe } from '../recipes';
import { basicReduceAsync } from './basic-reduce-ingredients-async';

export const joinAsync = joinRecipe(basicReduceAsync);
