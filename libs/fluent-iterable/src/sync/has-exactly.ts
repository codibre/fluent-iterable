import { eq } from '../utils';
import { getSyncComparer } from './get-sync-comparer';

export const hasExactly = getSyncComparer(eq);
