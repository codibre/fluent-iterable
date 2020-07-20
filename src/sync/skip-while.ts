import { skipWhileRecipe } from '../recipes';
import { filter } from './filter';
import { resolver } from 'augmentative-iterable';

export const skipWhile = skipWhileRecipe(filter, resolver);
