import { lesser } from '../helpers';
import { getSyncComparer } from './get-sync-comparer';

export const hasLessThan = getSyncComparer(lesser);
