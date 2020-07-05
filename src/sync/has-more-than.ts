import { greater } from '../utils';
import { getSyncComparer } from './get-sync-comparer';

export const hasMoreThan = getSyncComparer(greater);
