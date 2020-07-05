import { Reducer, Mapper } from '../types';
import { forEach } from './for-each';
import { getReduceAndMap } from '../common/get-reduce-and-map';
import { resolver } from '../utils';

export const reduceAndMap = getReduceAndMap(forEach, resolver);
