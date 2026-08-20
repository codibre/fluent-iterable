import { flatJoinRecipe } from '../recipes';
import { basic } from './basic-ingredients';
import { flatten } from './flatten';

export const flatJoin = flatJoinRecipe({
  ...basic,
  flatten,
});
