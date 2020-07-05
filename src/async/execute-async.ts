import { executeRecipe } from '../recipes';
import { mapAsync } from '../async-base/map-async';

export const executeAsync = executeRecipe(mapAsync, (action) => async (t) => {
  await action(t);
  return t;
});
