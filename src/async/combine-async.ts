import { combineRecipe } from '../recipes/combine-recipe';
import { mapAsync } from '../async-base';
import { flattenAsync } from './flatten-async';

export const combineAsync = combineRecipe(mapAsync, flattenAsync);
