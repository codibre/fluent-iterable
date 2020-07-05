import { prependRecipe } from '../recipes/prepend-recipe';
import { concatAsync } from './concat-async';

export const prependAsync = prependRecipe(concatAsync);
