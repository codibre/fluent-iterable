import { skipRecipe } from '../recipes/skip-recipe';
import { skipWhileAsync } from './skip-while-async';

export const skipAsync = skipRecipe(skipWhileAsync);
