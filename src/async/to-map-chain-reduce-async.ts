import { toMapChainReduceRecipe } from '../recipes';
import { basicAsync } from './basic-ingredients-async';
import { groupAsync } from './group-async';
import { flattenAsync } from './flatten-async';
import { reduceAsync } from './reduce-async';
import { toMapAsync } from './to-map-async';

export const toMapChainReduceAsync = toMapChainReduceRecipe({
  ...basicAsync,
  group: groupAsync,
  toMap: toMapAsync,
  flatten: flattenAsync,
  reduce: reduceAsync,
});
