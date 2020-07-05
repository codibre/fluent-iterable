import { getReduce } from '../recipes/get-reduce';
import { reduceAndMap } from './reduce-and-map';

export const reduce = getReduce(reduceAndMap);
