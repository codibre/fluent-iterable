import { reduceAndMapAsync } from './reduce-and-map-async';
import { avgRecipe } from '../recipes';
import { resolverAsync } from 'augmentative-iterable';

export const avgAsync = avgRecipe(reduceAndMapAsync, resolverAsync);
