import { forEach } from './for-each';
import { reduceAndMapRecipe } from '../recipes';
import { resolver } from 'augmentative-iterable';

export const reduceAndMap = reduceAndMapRecipe(forEach, resolver);
