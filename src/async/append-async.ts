import { concatAsync } from './concat-async';
import { getAppend } from '../recipes/get-append';

export const appendAsync = getAppend(concatAsync);
