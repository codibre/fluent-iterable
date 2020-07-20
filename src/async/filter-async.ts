import { IGNORE, augmentIterableAsync } from '../types-internal';
import { augmentIterableRecipe } from '../recipes';

export const filterAsync = augmentIterableRecipe(augmentIterableAsync, IGNORE);
