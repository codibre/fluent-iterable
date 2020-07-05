import { prependRecipe } from '../recipes';
import { concatAsync } from './concat-async';

export const prependAsync = prependRecipe(concatAsync);
