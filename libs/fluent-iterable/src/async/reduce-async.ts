import { resolverAsync } from 'augmentative-iterable';
import { reduceRecipe } from '../recipes';
import { reduceAndMapAsync } from './reduce-and-map-async';

export const reduceAsync = reduceRecipe(reduceAndMapAsync, resolverAsync);
