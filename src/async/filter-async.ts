import { filterAsyncIterable } from 'augmentative-iterable';
import { augmentIterableRecipe } from '../recipes';

export const filterAsync = augmentIterableRecipe(filterAsyncIterable);
