import { reduceAndMapRecipe } from '../recipes';
import { basicAsync } from './basic-ingredients-async';

export const reduceAndMapAsync = reduceAndMapRecipe(basicAsync);
