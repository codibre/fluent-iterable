import { avgRecipe } from '../recipes';
import { resolverAsync } from 'augmentative-iterable';
import { forEachAsync } from './for-each-async';

export const avgAsync = avgRecipe(forEachAsync, resolverAsync);
