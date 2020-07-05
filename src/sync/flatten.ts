import { Mapper } from '../types';
import { map } from './map';
import { iterateAll } from '../utils';
import { getFlatten } from '../recipes/get-flatten';

export const flatten = getFlatten(iterateAll, map);
