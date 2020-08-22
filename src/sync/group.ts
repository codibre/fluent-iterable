import { reduceAndMap } from './reduce-and-map';
import { groupRecipe, orderedGroupRecipe } from '../recipes';
import { iterate } from '../utils';
import { resolver } from 'augmentative-iterable';
import { partition } from './partition';
import { map } from './map';
import { forEach } from './for-each';

export const group = groupRecipe(
  reduceAndMap,
  resolver,
  iterate,
  orderedGroupRecipe(map, resolver, partition, forEach),
);
