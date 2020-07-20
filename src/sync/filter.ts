import { augmentIterable, IGNORE } from '../types-internal';
import { augmentIterableRecipe } from '../recipes';

export const filter = augmentIterableRecipe(augmentIterable, IGNORE);
