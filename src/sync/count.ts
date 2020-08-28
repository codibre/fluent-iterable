import { countRecipe } from '../recipes';
import { basicReduce } from './basic-reduce-ingredients';

export const count = countRecipe(basicReduce);
