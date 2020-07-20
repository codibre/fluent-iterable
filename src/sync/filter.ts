import { augmentIterable, IGNORE } from 'augmentative-iterable';
import { augmentIterableRecipe } from '../recipes';

export const filter = augmentIterableRecipe(augmentIterable, IGNORE);
