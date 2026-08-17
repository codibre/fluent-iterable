import { concatRecipe } from '../recipes';
import { iterateAllAsync } from '../utils';

export const concatAsync = concatRecipe(iterateAllAsync);
