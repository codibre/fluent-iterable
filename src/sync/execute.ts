import { getExecute } from '../common/get-execute';
import { map } from './map';

export const execute = getExecute(map, (action) => (t) => {
  action(t);
  return t;
});
