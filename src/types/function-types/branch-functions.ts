import { FluentAsyncIterable } from '../base';

export interface BranchFunction<T> {
  /**
   * Makes an iterable have many branches of processing
   * @typeparam R The destination type of the mapping.
   * @param branches The callbacks to create all the branches
   * @returns A [[FluentIterable]] of the mapped elements.
   */
  <R extends readonly ((it: FluentAsyncIterable<T>) => unknown)[] | []>(
    ...branches: R
  ): Promise<{ -readonly [P in keyof R]: Awaited<ReturnType<R[P]>> }>;
}
