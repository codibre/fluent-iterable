import { mapAsync } from './map-async';
import { repeatRecipe } from '../recipes/repeat-recipe';
import { asyncEmpty } from '../utils';
import { concatAsync } from './concat-async';

export const repeatAsync = repeatRecipe(mapAsync, concatAsync, asyncEmpty);
