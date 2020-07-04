import { Action } from '../types';
import { getExecute } from '../common/get-execute';
import { mapAsync } from './map-async';

export const executeAsync: <T>(
  iterable: Iterable<T>,
  action: Action<T>,
) => Iterable<T> = getExecute(mapAsync, (action) => async (t) => {
  await action(t);
  return t;
});
