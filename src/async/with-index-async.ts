import { getWithIndex } from '../recipes/get-with-index';
import { mapAsync } from './map-async';

export const withIndexAsync = getWithIndex(mapAsync);
