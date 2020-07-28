import { combineRecipe } from '../recipes/combine-recipe';
import { map } from './map';
import { flatten } from './flatten';
import { resolver } from 'augmentative-iterable';
import { forEach } from './for-each';
import { filter } from './filter';

export const combine = combineRecipe(map, flatten, resolver, forEach, filter);
