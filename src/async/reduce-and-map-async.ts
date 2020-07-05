import { forEachAsync } from './for-each-async';
import { getReduceAndMap } from '../recipes/get-reduce-and-map';
import { asyncResolver } from '../utils';

export const reduceAndMapAsync = getReduceAndMap(forEachAsync, asyncResolver);
