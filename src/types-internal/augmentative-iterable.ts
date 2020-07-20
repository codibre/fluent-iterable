import {
  getArrayOperator,
  getItOperator,
  getStateProcessor,
  AugmentativeIterable,
  Augment,
  processActionResult,
  getAugmentIterable,
} from './augments-utils';
import { augments, baseIterable, IGNORE, STOP, YIELD } from './augments-types';
import { resolver } from '../utils';

function checkState(item: Augment<any>, result: any, state: number) {
  const { type, action } = item;
  const actionResult = action(result);
  ({ state, result } = processActionResult(type, actionResult, state, result));

  return { state, result };
}

export function resolveState(a: Augment<any>[], item: any) {
  const length = a.length;
  let state = YIELD;
  let result = item;
  for (let i = 0; i < length && state === YIELD; i++) {
    ({ state, result } = checkState(a[i], result, state));
  }

  return { state, result };
}

export function augmentativeIterate(
  this: AugmentativeIterable<any>,
): Iterator<any> {
  const a = this[augments] || [];
  const base = this[baseIterable] || this;

  const operator = Array.isArray(base)
    ? getArrayOperator(base)
    : getItOperator(base[Symbol.iterator](), resolver);

  return {
    next: getStateProcessor(operator, resolveState, a),
  };
}

export function augmentativeForEach(
  this: AugmentativeIterable<any>,
  action: (t: any) => any,
) {
  const it = augmentativeIterate.call(this);
  let next: IteratorResult<any>;
  while (!(next = it.next()).done) {
    action(next.value);
  }
}

export function augmentativeToArray(this: AugmentativeIterable<any>) {
  const result: any[] = [];

  augmentativeForEach.call(this, result.push.bind(result));

  return result;
}

export const augmentIterable = getAugmentIterable(
  Symbol.iterator,
  augmentativeIterate,
);
