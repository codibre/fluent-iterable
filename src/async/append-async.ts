import { concatAsync } from './concat-async';
import { appendRecipe } from '../recipes/append-recipe';

export const appendAsync = appendRecipe(concatAsync);
