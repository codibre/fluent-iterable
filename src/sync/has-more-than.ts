import { greater } from '../helpers';
import { getSyncComparer } from './get-sync-comparer';

export const hasMoreThan = getSyncComparer(greater);
