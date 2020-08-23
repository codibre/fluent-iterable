import { groupRecipe } from '../recipes';
import { partition } from './partition';
import { basicReduce } from './basic-reduce-ingredients';

export const group = groupRecipe({ ...basicReduce, partition });
