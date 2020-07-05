import { mapAsync } from './map-async';
import { repeatRecipe } from '../recipes';
import { emptyAsync } from '../helpers';
import { concatAsync } from './concat-async';

export const repeatAsync = repeatRecipe(mapAsync, concatAsync, emptyAsync);
