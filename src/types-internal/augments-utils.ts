import { ResolverType } from './resolver-type';
import { AnyIterable } from './any-iterable';
import {
  baseIterable,
  augments,
  AugmentType,
  YIELD,
  STOP,
  IGNORE,
} from './augments-types';

const end = { done: true } as IteratorResult<any>;
const promiseEnd = Promise.resolve(end);

export interface IterableAugments<T, It extends AnyIterable<T>> {
  [baseIterable]: It;
  [augments]: Augment<T>[];
}

export interface AugmentativeIterable<T>
  extends Iterable<T>,
    IterableAugments<T, Iterable<T>> {}

export interface AugmentativeAsyncIterable<T>
  extends AsyncIterable<T>,
    IterableAugments<T, AnyIterable<T>> {}

export interface Augment<T> {
  type: AugmentType;
  action: (t: T) => any;
}

interface NextWrapper {
  next: IteratorResult<any>;
}
type StateResultResolver = (
  value: ResolveStateResult,
) => IteratorResult<any> | PromiseLike<IteratorResult<any>>;
type RecursiveProcessStep = () => PromiseLike<IteratorResult<any>>;

export function getArrayOperator(base: any[]): Operator {
  const length = base.length;
  let i = -1;
  return [() => ++i < length, () => base[i]];
}

type AnyIterator = Iterator<any, any, undefined> | AsyncIterator<any>;

function getKeepGoing(
  it: AnyIterator,
  wrapper: NextWrapper,
  resolver: ResolverType,
) {
  return () => resolver(it.next(), (x) => !(wrapper.next = x).done);
}

function getValue(wrapper: NextWrapper) {
  return () => wrapper.next.value;
}

type Operator = [KeepGoingChecker, ValueGetter];

export function getItOperator(
  it: Iterator<any> | AsyncIterator<any>,
  resolver: ResolverType,
): Operator {
  const wrapper = {} as NextWrapper;
  return [getKeepGoing(it, wrapper, resolver), getValue(wrapper)];
}

type ResolveStateResult = {
  state: number;
  result: any;
};
type ResolveState = (a: Augment<any>[], v: any) => ResolveStateResult;
type ResolveStateAsync = (
  a: Augment<any>[],
  v: any,
) => PromiseLike<ResolveStateResult>;
type KeepGoingChecker = () => boolean | PromiseLike<boolean>;
type ValueGetter = () => any;
type StateProcessor = (c: any) => any;

export function getStateProcessor(
  [keepGoing, value]: Operator,
  resolveState: ResolveState,
  a: Augment<any>[],
): StateProcessor {
  return () => {
    let state = YIELD;
    let result: any;
    while (state !== STOP && keepGoing()) {
      ({ state, result } = resolveState(a, value()));
      if (state === YIELD) {
        return { done: false, value: result };
      }
    }

    return end;
  };
}

function stateResultResolver(
  recursive: () => PromiseLike<IteratorResult<any>>,
): StateResultResolver {
  return ({ state, result }) => {
    switch (state) {
      case YIELD:
        return { done: false, value: result };
      case STOP:
        return end;
      default:
        return recursive();
    }
  };
}

function stepProcessor(
  resolveState: ResolveStateAsync,
  a: Augment<any>[],
  value: ValueGetter,
  resolver: StateResultResolver,
): (c: any) => any {
  return (x) => (x ? resolveState(a, value()).then(resolver) : promiseEnd);
}

export function getStateProcessorAsync(
  operator: Operator,
  keepGoingResolver: ResolverType,
  resolveState: ResolveStateAsync,
  a: Augment<any>[],
): StateProcessor {
  const [keepGoing, value] = operator;
  return () => {
    function recursive(): PromiseLike<IteratorResult<any>> {
      return keepGoingResolver(
        keepGoing(),
        stepProcessor(resolveState, a, value, stateResultResolver(recursive)),
      );
    }

    return recursive();
  };
}

export function processActionResult(
  type: number,
  actionResult: any,
  state: number,
  result: any,
) {
  switch (type) {
    case IGNORE:
      if (!actionResult) {
        state = IGNORE;
      }
      break;
    case STOP:
      if (!actionResult) {
        state = STOP;
      }
      break;
    default:
      result = actionResult;
  }
  return { state, result };
}

export function getAugmentIterable(
  iteratorType: symbol,
  augmentativeIterate: Function,
) {
  return function <T>(it: AnyIterable<T>, newAugment: Augment<T>): any {
    const preview = it as any;
    const previewAugments = preview[augments];

    return {
      [iteratorType]: augmentativeIterate,
      ...(previewAugments
        ? {
            [augments]: previewAugments.concat(newAugment),
            [baseIterable]: preview[baseIterable],
          }
        : {
            [augments]: [newAugment],
            [baseIterable]: it,
          }),
    };
  };
}
