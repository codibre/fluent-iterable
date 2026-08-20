import { flatMergeRecipe } from '../recipes';
import { basicAsync } from './basic-ingredients-async';

export const flatMergeAsync = flatMergeRecipe(basicAsync);
