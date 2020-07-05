import { getTake } from '../recipes/get-take';
import { takeWhileAsync } from './take-while-async';

export const takeAsync = getTake(takeWhileAsync);
