import { resolver } from 'augmentative-iterable';
import { distinctRecipe } from '../recipes';
import { filter } from './filter';

export const distinct = distinctRecipe(filter, resolver);
