import { countRecipe } from '../recipes';
import { reduceAsync } from './reduce-async';
import { filterAsync } from '../async-base/filter-async';

export const countAsync = countRecipe(reduceAsync, filterAsync);
