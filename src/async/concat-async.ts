import { getConcat } from '../recipes/get-concat';
import { flattenAsync } from './flatten-async';

export const concatAsync = getConcat(flattenAsync);
