import { avgRecipe } from '../recipes';
import { resolver } from 'augmentative-iterable';
import { forEach } from './for-each';

export const avg = avgRecipe(forEach, resolver);
