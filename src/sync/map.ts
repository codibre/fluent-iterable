import { augmentIterable, YIELD } from 'augmentative-iterable';
import { augmentIterableRecipe } from '../recipes';

export const map = augmentIterableRecipe(augmentIterable, YIELD);
