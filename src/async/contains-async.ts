import { containsRecipe } from '../recipes';
import { anyAsync } from './any-async';

export const containsAsync = containsRecipe(anyAsync);
