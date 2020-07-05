import { containsRecipe } from '../recipes/contains-recipe';
import { anyAsync } from './any-async';

export const containsAsync = containsRecipe(anyAsync);
