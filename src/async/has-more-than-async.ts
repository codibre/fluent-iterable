import { greater } from '../utils';
import { getAsyncComparer } from './get-async-comparer';

export const hasMoreThanAsync = getAsyncComparer(greater);
