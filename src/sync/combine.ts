import { combineRecipe } from '../recipes/combine-recipe';
import { map } from './map';
import { flatten } from './flatten';

export const combine = combineRecipe(map, flatten);
