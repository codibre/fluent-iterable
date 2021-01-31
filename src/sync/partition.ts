import { resolver } from 'augmentative-iterable';
import { partitionRecipe } from '../recipes/partition-recipe';

export const partition = partitionRecipe(Symbol.iterator, resolver);
