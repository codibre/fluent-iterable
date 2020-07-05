import { getSkip } from '../common/get-skip';
import { skipWhileAsync } from './skip-while-async';

export const skipAsync = getSkip(skipWhileAsync);
