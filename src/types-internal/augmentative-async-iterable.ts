/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-magic-numbers */
import {
  Augment,
  getArrayOperator,
  getItOperator,
  getStateProcessorAsync,
  AugmentativeAsyncIterable,
  processActionResult,
  getAugmentIterable,
} from './augments-utils';
import { baseIterable, augments, YIELD, AugmentType } from './augments-types';
import { resolverAsync, resolver } from '../utils';
import { AsyncAction } from '../types';
import { any } from '../sync';

function isPromiseLike(p: any) {
  return p && typeof p.then === 'function';
}

interface ResolveStepContext {
  next: number;
  type: AugmentType;
  state: number;
  result: any;
}

function stepResolveState(
  context: ResolveStepContext,
  chain: any,
  augmentList: Augment<any>[],
) {
  if (context.next > 0) {
    const actionResult = processActionResult(
      context.type,
      chain,
      context.state,
      context.result,
    );
    context.state = actionResult.state;
    context.result = actionResult.result;
  }
  if (context.next < augmentList.length) {
    const item = augmentList[context.next];
    context.type = item.type;
    chain = item.action(context.result);
  }
  return chain;
}

function getRecursive(
  context: ResolveStepContext,
  augmentList: Augment<any>[],
) {
  return function recursive(chain?: any) {
    while (context.next++ < augmentList.length) {
      chain = stepResolveState(context, chain, augmentList);
      if (isPromiseLike(chain)) {
        return chain.then(recursive);
      }
    }

    return { state: context.state, result: context.result };
  };
}

async function resolveState(augmentList: Augment<any>[], result: any) {
  const context: ResolveStepContext = {
    next: -1,
    type: YIELD as AugmentType,
    state: YIELD,
    result,
  };

  return getRecursive(context, augmentList)();
}

export function augmentativeIterateAsync(
  this: AugmentativeAsyncIterable<any>,
): AsyncIterator<any> {
  const a = this[augments] || [];
  const base: any = this[baseIterable] || this;
  const [itResolver, it, kpResolver] = base[Symbol.asyncIterator]
    ? [resolverAsync, base[Symbol.asyncIterator](), resolverAsync]
    : [resolver, base[Symbol.iterator](), resolver];

  const operator = Array.isArray(base)
    ? getArrayOperator(base)
    : getItOperator(it, itResolver);

  return {
    next: getStateProcessorAsync(operator, kpResolver, resolveState, a),
  };
}

function runNext(
  next: () => PromiseLike<IteratorResult<any>>,
  action: (t: any) => any,
): PromiseLike<any> {
  return next().then(({ done, value }) => {
    if (!done) {
      const p = action(value);
      return isPromiseLike(p)
        ? p.then(() => runNext(next, action))
        : runNext(next, action);
    }
  });
}

export function augmentativeForEachAsync<T>(
  this: AugmentativeAsyncIterable<any>,
  action: AsyncAction<T>,
) {
  const it = augmentativeIterateAsync.call(this);
  const next = it.next.bind(it);

  return runNext(next, action);
}

export function augmentativeToArrayAsync(this: AugmentativeAsyncIterable<any>) {
  const result: any[] = [];

  return augmentativeForEachAsync
    .call(this, result.push.bind(result))
    .then(() => result);
}

export const augmentIterableAsync = getAugmentIterable(
  Symbol.asyncIterator,
  augmentativeIterateAsync,
);
