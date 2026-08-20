import { skipRecipe } from '../recipes';
import { skipWhile } from './skip-while';

export const skip = skipRecipe(skipWhile);
