import { ge } from '../utils';
import { getSyncComparer } from './get-sync-comparer';

export const hasMoreOrExactly = getSyncComparer(ge);
