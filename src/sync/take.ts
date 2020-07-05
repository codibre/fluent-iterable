import { getTake } from '../recipes/get-take';
import { takeWhile } from './take-while';

export const take = getTake(takeWhile);
