import { lt } from '../utils';
import { getSyncComparer } from './get-sync-comparer';

export const hasLessThan = getSyncComparer(lt);
