import { getSum } from '../recipes/get-sum';
import { reduceAsync } from './reduce-async';

export const sumAsync = getSum(reduceAsync);
