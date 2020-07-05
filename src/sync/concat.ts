import { getConcat } from '../recipes/get-concat';
import { flatten } from './flatten';

export const concat = getConcat(flatten);
