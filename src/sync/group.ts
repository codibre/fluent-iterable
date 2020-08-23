import { reduceAndMap } from './reduce-and-map';
import { groupRecipe, orderedGroupRecipe } from '../recipes';
import { iterate } from '../utils';
import { resolver } from 'augmentative-iterable';
import { partition } from './partition';
import { basicReduce } from './basic-reduce-ingredients';

export const group = groupRecipe({ ...basicReduce, partition });
