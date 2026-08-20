import { skipRecipe } from '../recipes';
import { skipWhileAsync } from './skip-while-async';

export const skipAsync = skipRecipe(skipWhileAsync);
