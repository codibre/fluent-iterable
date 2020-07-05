import { lesser } from '../helpers';
import { getAsyncComparer } from './get-async-comparer';

export const hasLessThanAsync = getAsyncComparer(lesser);
