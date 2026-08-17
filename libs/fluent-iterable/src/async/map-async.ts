import { mapAsyncIterable } from 'augmentative-iterable';
import { augmentIterableRecipe } from '../recipes';

export const mapAsync = augmentIterableRecipe(mapAsyncIterable);
