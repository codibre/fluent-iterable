import { getContains } from '../recipes/get-contains';
import { anyAsync } from './any-async';

export const containsAsync = getContains(anyAsync);
