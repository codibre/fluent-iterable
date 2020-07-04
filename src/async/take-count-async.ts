import { getTakeCount } from '../common';
import { countAsync } from './count-async';
import { takeAsync } from './take-async';

export const takeCountAsync = getTakeCount(countAsync, takeAsync);
