import { getAsyncComparer } from './get-async-comparer';
import { equals } from '../helpers';

export const hasExactlyAsync = getAsyncComparer(equals);
