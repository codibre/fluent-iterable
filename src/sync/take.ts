import { getTake } from '../common/get-take';
import { takeWhile } from './take-while';

export const take = getTake(takeWhile);
