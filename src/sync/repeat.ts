import { map } from './map';
import { repeatRecipe } from '../recipes';
import { empty } from '../utils';
import { concat } from './concat';

export const repeat = repeatRecipe(map, concat, empty);
