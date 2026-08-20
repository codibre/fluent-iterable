import { withIndexRecipe } from '../recipes';
import { mapAsync } from './map-async';

export const withIndexAsync = withIndexRecipe(mapAsync);
