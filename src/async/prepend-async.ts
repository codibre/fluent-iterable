import { getPrepend } from '../recipes/get-prepend';
import { concatAsync } from './concat-async';

export const prependAsync = getPrepend(concatAsync);
