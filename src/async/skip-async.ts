import { getSkip } from '../recipes/get-skip';
import { skipWhileAsync } from './skip-while-async';

export const skipAsync = getSkip(skipWhileAsync);
