import { equals } from '../helpers';
import { getSyncComparer } from './get-sync-comparer';

export const hasExactly = getSyncComparer(equals);
