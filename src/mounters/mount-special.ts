import { fluentGroup } from '../utils';

export type SpecialType = {
  [key in 'group' | 'groupAsync' | 'partition']: Function;
};

export function mountSpecial<T>(
  { group, groupAsync, partition }: Partial<SpecialType>,
  wrapper: (...args: any[]) => any,
  asyncWrapper: (...args: any[]) => any,
) {
  const result = {} as any;
  if (group) {
    result.group = (...args: any[]) => wrapper(group(...args)).map(fluentGroup);
  }
  if (groupAsync) {
    result.groupAsync = (...args: any[]) =>
      asyncWrapper(groupAsync(...args)).map(fluentGroup as any);
  }
  if (partition) {
    result.partition = (...args: any[]) => {
      return wrapper(partition(...args)).map((part: any) => {
        return wrapper(part);
      });
    };
  }
  return result;
}
