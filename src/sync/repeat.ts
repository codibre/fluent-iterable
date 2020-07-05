import { map } from './map';
import { repeatRecipe } from '../recipes/repeat-recipe';
import { empty } from '../utils';
import { concat } from './concat';

export const repeat = repeatRecipe(map, concat, empty);
