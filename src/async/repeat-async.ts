import { mapAsync } from '../async-base/map-async';
import { repeatRecipe } from '../recipes';
import { emptyAsync } from '../utils';
import { concatAsync } from './concat-async';

export const repeatAsync = repeatRecipe(mapAsync, concatAsync, emptyAsync);
