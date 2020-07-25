import { le } from '../utils';
import { getSyncComparer } from './get-sync-comparer';

export const hasLessOrExactly = getSyncComparer(le);
