import { flatJoinRecipe } from '../recipes';
import { basicAsync } from './basic-ingredients-async';
import { flattenAsync } from './flatten-async';

export const flatJoinAsync = flatJoinRecipe({
  ...basicAsync,
  flatten: flattenAsync,
});
