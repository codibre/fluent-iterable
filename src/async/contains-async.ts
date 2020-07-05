import { getContains } from '../common/get-contains';
import { anyAsync } from './any-async';

export const containsAsync = getContains(anyAsync);
