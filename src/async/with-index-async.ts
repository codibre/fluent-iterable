import { withIndexRecipe } from '../recipes/with-index-recipe';
import { mapAsync } from './map-async';

export const withIndexAsync = withIndexRecipe(mapAsync);
