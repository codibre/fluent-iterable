import { getConcat } from '../common/get-concat';
import { flattenAsync } from './flatten-async';

export const concatAsync = getConcat(flattenAsync);
