import { groupRecipe } from '../recipes';
import { partitionAsync } from './partition-async';
import { basicReduceAsync } from './basic-reduce-ingredients-async';

export const groupAsync = groupRecipe({
  ...basicReduceAsync,
  partition: partitionAsync,
});
