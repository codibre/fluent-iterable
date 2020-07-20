import { YIELD, augmentIterableAsync } from 'augmentative-iterable';
import { augmentIterableRecipe } from '../recipes';

export const mapAsync = augmentIterableRecipe(augmentIterableAsync, YIELD);
