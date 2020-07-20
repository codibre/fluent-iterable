import { STOP, augmentIterableAsync } from 'augmentative-iterable';
import { augmentIterableRecipe } from '../recipes';

export const takeWhileAsync = augmentIterableRecipe(augmentIterableAsync, STOP);
