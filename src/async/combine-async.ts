import { combineRecipe } from '../recipes/combine-recipe';
import { mapAsync } from './map-async';
import { flattenAsync } from './flatten-async';

export const combineAsync = combineRecipe(mapAsync, flattenAsync);
