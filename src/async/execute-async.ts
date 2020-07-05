import { executeRecipe } from '../recipes/execute-recipe';
import { mapAsync } from './map-async';

export const executeAsync = executeRecipe(mapAsync, (action) => async (t) => {
  await action(t);
  return t;
});
