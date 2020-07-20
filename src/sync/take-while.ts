import { augmentIterable, STOP } from '../types-internal';
import { augmentIterableRecipe } from '../recipes';

export const takeWhile = augmentIterableRecipe(augmentIterable, STOP);
