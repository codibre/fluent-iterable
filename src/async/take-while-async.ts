import { STOP, augmentIterableAsync } from '../types-internal';
import { augmentIterableRecipe } from '../recipes';

export const takeWhileAsync = augmentIterableRecipe(augmentIterableAsync, STOP);
