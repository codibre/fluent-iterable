import { concatRecipe } from '../recipes';
import { flatten } from './flatten';

export const concat = concatRecipe(flatten);
