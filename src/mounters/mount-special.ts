import { fluentGroup } from '../helpers/utils';

export type SpecialType = {
  [key in 'group' | 'groupAsync' | 'partition']: Function;
};

export function mountSpecial<T>(
  iterable: Iterable<T> | AsyncIterable<T>,
  { group, groupAsync, partition }: SpecialType,
  wrapper: (...args: any[]) => any,
  asyncWrapper: (...args: any[]) => any,
) {
  return {
    group: (...args: any[]) =>
      wrapper(group(iterable, ...args)).map(fluentGroup),
    groupAsync: (...args: any[]) =>
      asyncWrapper(groupAsync(iterable, ...args)).map(fluentGroup as any),
    partition: (...args: any[]) =>
      wrapper(partition(iterable, ...args)).map((part: any) => wrapper(part)),
  };
}
