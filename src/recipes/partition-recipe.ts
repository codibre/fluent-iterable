import { AnyIterable } from 'augmentative-iterable';
import { Equality } from '../types/base';
import { ResolverType } from '../types-internal';
import { getPartitionComparer } from './get-partition-comparer';

export interface PartitionWrapper<T> {
  next?: IteratorResult<T>;
  iterator: any;
  comparer: Equality<T>;
}

export function othersFactory(resolver: ResolverType) {
  return <T>(wrapper: PartitionWrapper<T>) => {
    const { iterator, comparer } = wrapper;

    return () => {
      return resolver(iterator.next(), (next: IteratorResult<T>) => {
        const previous = wrapper.next!.value;
        wrapper.next = next;
        return wrapper.next.done || !comparer(previous, wrapper.next.value)
          ? { done: true }
          : wrapper.next;
      });
    };
  };
}

export function partIterateFactory(
  symbol: symbol,
  getOthers: <T>(wrapper: PartitionWrapper<T>) => () => any,
) {
  return <T>(wrapper: PartitionWrapper<T>) => {
    let call: () => any;

    const others = getOthers(wrapper);

    function first() {
      call = others;
      return wrapper.next;
    }
    call = first;

    return {
      [symbol]: () => ({
        next: () => call(),
      }),
    };
  };
}

function getValueFactory<T>(
  wrapper: PartitionWrapper<T>,
  partIterate: Function,
) {
  return () => {
    return wrapper.next!.done
      ? { done: true }
      : {
          value: partIterate(wrapper),
        };
  };
}

function firstValueFactory<T>(
  wrapper: PartitionWrapper<T>,
  callback: () => any,
) {
  return (v: IteratorResult<T>) => {
    wrapper.next = v;
    return callback();
  };
}

function nextFactory<T>(
  resolver: ResolverType,
  wrapper: PartitionWrapper<T>,
  getValue: () => any,
) {
  let first = true;
  const { iterator } = wrapper;

  return () => {
    if (first) {
      first = false;
      return resolver(iterator.next(), firstValueFactory(wrapper, getValue));
    }

    return getValue();
  };
}

function partitionIterateRecipe<T>(symbol: symbol, resolver: ResolverType) {
  return (arr: AnyIterable<T>, criteria: number | Equality<unknown>): any => {
    const iterator = (arr as any)[symbol]();
    const wrapper: PartitionWrapper<T> = {
      iterator,
      comparer: getPartitionComparer(criteria),
    };
    const partIterate = partIterateFactory(symbol, othersFactory(resolver));
    const getValue = getValueFactory(wrapper, partIterate);

    return {
      [symbol]() {
        return {
          next: nextFactory(resolver, wrapper, getValue),
          return: iterator.return ? iterator.return.bind(iterator) : undefined,
          throw: iterator.throw ? iterator.throw.bind(iterator) : undefined,
        };
      },
    } as any;
  };
}

export function partitionRecipe(symbol: symbol, resolver: ResolverType) {
  const partitioning = partitionIterateRecipe(symbol, resolver);
  return function <T>(
    this: Iterable<T>,
    criteria: number | Equality<unknown>,
  ): AnyIterable<AnyIterable<T>> {
    if (typeof criteria !== 'function' && criteria < 1) {
      throw new Error(
        `Validation failed, size (${criteria}) expected to be bigger than 0`,
      );
    }

    return partitioning(this, criteria);
  };
}
