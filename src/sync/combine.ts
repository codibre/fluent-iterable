import { combineRecipe } from '../recipes/combine-recipe';
import { map } from '../sync-base';
import { flatten } from './flatten';

export const combine = combineRecipe(map, flatten);
