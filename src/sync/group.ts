import { reduceAndMap } from './reduce-and-map';
import { getGroup } from '../recipes/get-group';
import { resolver, iterate } from '../utils';
import { map } from './map';

export const group = getGroup(reduceAndMap, resolver, map, iterate);
