import { greater } from '../helpers';
import { getAsyncComparer } from './get-async-comparer';

export const hasMoreThanAsync = getAsyncComparer(greater);
