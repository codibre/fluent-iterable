import { concatRecipe } from '../recipes/concat-recipe';
import { flatten } from './flatten';

export const concat = concatRecipe(flatten);
