import { getTop } from '../recipes';
import { reduceAndMapAsync } from './reduce-and-map-async';

export const topAsync = getTop(reduceAndMapAsync);
