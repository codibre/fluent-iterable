import { toObjectRecipe } from '../recipes';
import { basicReduceAsync } from './basic-reduce-ingredients-async';

export const toObjectAsync = toObjectRecipe(basicReduceAsync);
