import { gt } from '../utils';
import { getSyncComparer } from './get-sync-comparer';

export const hasMoreThan = getSyncComparer(gt);
