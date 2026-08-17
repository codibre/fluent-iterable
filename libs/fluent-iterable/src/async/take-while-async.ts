import { takeWhileAsyncIterable } from 'augmentative-iterable';
import { takeWhileRecipe } from '../recipes';

export const takeWhileAsync = takeWhileRecipe(takeWhileAsyncIterable);
