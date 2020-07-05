import { skipRecipe } from '../recipes/skip-recipe';
import { skipWhile } from './skip-while';

export const skip = skipRecipe(skipWhile);
