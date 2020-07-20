import { toArray } from './to-array';
import { sortRecipe } from '../recipes';
import { iterate } from '../utils';
import { resolver } from 'augmentative-iterable';

export const sort = sortRecipe(toArray, resolver, iterate);
