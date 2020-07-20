import { YIELD, augmentIterableAsync } from '../types-internal';
import { augmentIterableRecipe } from '../recipes';

export const mapAsync = augmentIterableRecipe(augmentIterableAsync, YIELD);
