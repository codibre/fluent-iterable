import { Reducer, Mapper } from '../types';
import { forEach } from './for-each';
import { getReduceAndMap } from '../recipes/get-reduce-and-map';
import { resolver } from '../utils';

export const reduceAndMap = getReduceAndMap(forEach, resolver);
