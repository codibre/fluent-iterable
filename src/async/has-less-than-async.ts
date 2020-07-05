import { lesser } from '../utils';
import { getAsyncComparer } from './get-async-comparer';

export const hasLessThanAsync = getAsyncComparer(lesser);
