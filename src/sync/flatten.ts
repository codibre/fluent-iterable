import { Mapper } from '../types';
import { map } from './map';
import { iterateAll } from '../utils';
import { getFlatten } from '../common/get-flatten';

export const flatten = getFlatten(iterateAll, map);
