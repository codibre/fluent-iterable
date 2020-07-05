import { lesser } from '../utils';
import { getSyncComparer } from './get-sync-comparer';

export const hasLessThan = getSyncComparer(lesser);
