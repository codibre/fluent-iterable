import { forEach } from './for-each';
import { reduceAndMapRecipe } from '../recipes';
import { resolver } from '../utils';

export const reduceAndMap = reduceAndMapRecipe(forEach, resolver);
