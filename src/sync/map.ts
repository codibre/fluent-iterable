import { augmentIterable, YIELD } from '../types-internal';
import { augmentIterableRecipe } from '../recipes';

export const map = augmentIterableRecipe(augmentIterable, YIELD);
