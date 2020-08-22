import { resolver } from 'augmentative-iterable';
import { distinctRecipe } from '../recipes';
import { all } from './all';

export const isDistinct = distinctRecipe(all, resolver);
