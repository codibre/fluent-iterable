import { withIndexRecipe } from '../recipes';
import { mapAsync } from '../async-base/map-async';

export const withIndexAsync = withIndexRecipe(mapAsync);
