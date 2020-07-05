import { getAsyncComparer } from './get-async-comparer';
import { equals } from '../utils';

export const hasExactlyAsync = getAsyncComparer(equals);
