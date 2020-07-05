import { concatAsync } from './concat-async';
import { appendRecipe } from '../recipes';

export const appendAsync = appendRecipe(concatAsync);
