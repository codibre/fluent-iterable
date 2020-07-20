import { augmentIterable, STOP } from 'augmentative-iterable';
import { augmentIterableRecipe } from '../recipes';

export const takeWhile = augmentIterableRecipe(augmentIterable, STOP);
