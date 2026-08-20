import { augmentativeForEachAsync } from 'augmentative-iterable';
import { forEachRecipe } from '../recipes';

export const forEachAsync = forEachRecipe(augmentativeForEachAsync);
