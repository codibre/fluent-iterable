import { resolverAsync } from 'augmentative-iterable';
import { ResolveAndMapIngredients } from '../recipes/ingredients';
import { mapAsync } from './map-async';

export const resolveAndMapIngredientsAsync: ResolveAndMapIngredients = {
  map: mapAsync,
  resolver: resolverAsync,
};
