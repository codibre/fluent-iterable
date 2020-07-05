import { getExecute } from '../recipes/get-execute';
import { map } from './map';

export const execute = getExecute(map, (action) => (t) => {
  action(t);
  return t;
});
