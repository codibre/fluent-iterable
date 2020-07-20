import { takeWhileAsyncIterable } from 'augmentative-iterable';
import { augmentIterableRecipe } from '../recipes';

export const takeWhileAsync = augmentIterableRecipe(takeWhileAsyncIterable);
