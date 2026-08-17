import { emitRecipe } from '../recipes';
import { forEachAsync } from './for-each-async';

export const emitAsync = emitRecipe(forEachAsync);
