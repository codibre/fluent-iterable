import { AnyIterable } from 'augmentative-iterable';
import { mergeIterables } from '../async-base/merging';
import { ErrorCallback } from '../types';
import { BasicIngredients } from './ingredients';

export function flatMergeRecipe({ resolver, toArray }: BasicIngredients) {
  return function <T>(this: AnyIterable<T>, callback?: ErrorCallback) {
    return resolver(
      toArray.call(this),
      callback
        ? (x) => mergeIterables(callback, ...x)
        : (x) => mergeIterables(...x),
    );
  };
}
