import { FluentAsyncIterable } from '../base';

export interface BranchFunction<T> {
  /**
   * Makes an iterable have many branches of processing.
   * Those processing branches allow you to keep commons
   * operations before it and to diverge in many different
   * processing results without the need to materialize the
   * previous operation results, what offers better memory
   * consumption and performance.
   * Example:
   *   const [min, max, avg~] = await baseIterable.branch(
   *     (x) => x.min(),
   *     (x) => x.max(),
   *     (x) => x.avg()
   *   )
   *
   * With this code, a base operation may have many accumulated
   * operations, but you'll get the min, the max and avg of it
   * without the need to write it manually, or to iterate over
   * baseIterable thrice. Although the operation is async
   * our benchmarks shows that it really surpass a sync iteration
   * with pre materialization in many important scenarios.
   * @typeparam R The destination type of the mapping.
   * @param branches The callbacks to create all the branches
   * @returns A [[FluentIterable]] of the mapped elements.
   */
  <R extends readonly ((it: FluentAsyncIterable<T>) => unknown)[] | []>(
    ...branches: R
  ): Promise<{ -readonly [P in keyof R]: Awaited<ReturnType<R[P]>> }>;
}
