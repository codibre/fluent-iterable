import { getSum } from '../common/get-sum';
import { reduceAsync } from './reduce-async';

export const sumAsync = getSum(reduceAsync);
