import { getTop } from '../common';
import { reduceAndMapAsync } from './reduce-and-map-async';

export const topAsync = getTop(reduceAndMapAsync);
