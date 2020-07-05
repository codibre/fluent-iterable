import { concatAsync } from './concat-async';
import { getAppend } from '../common/get-append';

export const appendAsync = getAppend(concatAsync);
