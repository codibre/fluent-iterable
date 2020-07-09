import { fluentGroup } from '../utils';

export type SpecialType = {
  [key in 'group' | 'groupAsync' | 'partition']: Function;
};

export function mountSpecial<T>(
  iterable: Iterable<T> | AsyncIterable<T>,
  { group, groupAsync, partition }: Partial<SpecialType>,
  wrapper: (...args: any[]) => any,
  asyncWrapper: (...args: any[]) => any,
) {
  const result = {} as any;
  if (group) {
    result.group = (...args: any[]) =>
      wrapper(group(iterable, ...args)).map(fluentGroup);
  }
  if (groupAsync) {
    result.groupAsync = (...args: any[]) =>
      asyncWrapper(groupAsync(iterable, ...args)).map(fluentGroup as any);
  }
  if (partition) {
    result.partition = (...args: any[]) =>
      wrapper(partition(iterable, ...args)).map((part: any) => wrapper(part));
  }
  return result;
}
