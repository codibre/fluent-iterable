import { IGNORE, augmentIterableAsync } from 'augmentative-iterable';
import { augmentIterableRecipe } from '../recipes';

export const filterAsync = augmentIterableRecipe(augmentIterableAsync, IGNORE);
