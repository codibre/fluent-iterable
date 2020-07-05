import { Reducer, Mapper } from '../types';
import { ResolverType } from '../utils';

export function getReduceAndMap(forEach: Function, resolver: ResolverType) {
  return <T, A, R>(
    iterable: Iterable<T>,
    reducer: Reducer<T, A>,
    initial: A,
    result: Mapper<A, R>,
  ): R => {
    let accumulator: A = initial;
    return resolver(
      forEach(iterable, (t: any) =>
        resolver(reducer(accumulator, t), (r) => (accumulator = r)),
      ),
      () => result(accumulator),
    );
  };
}
