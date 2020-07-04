import { Action } from '../types';
import { getExecute } from '../common/get-execute';
import { map } from './map';

export const execute: <T>(
  iterable: Iterable<T>,
  action: Action<T>,
) => Iterable<T> = getExecute(map, (action) => (t) => {
  action(t);
  return t;
});
