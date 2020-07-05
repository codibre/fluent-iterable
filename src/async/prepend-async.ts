import { getPrepend } from '../common/get-prepend';
import { concatAsync } from './concat-async';

export const prependAsync = getPrepend(concatAsync);
