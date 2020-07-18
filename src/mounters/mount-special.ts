import { fluentGroup } from '../utils';
import { AnyIterable } from '../types-internal';

export type SpecialType = {
  [key in 'group' | 'groupAsync' | 'partition']: Function;
};

export function mountSpecial<T>(
  { group, groupAsync, partition }: Partial<SpecialType>,
  wrapper: (...args: any[]) => any,
  asyncWrapper: (...args: any[]) => any,
) {
  const result = {} as any;
  const groups: [Function | undefined, string, Function][] = [
    [group, 'group', wrapper],
    [groupAsync, 'groupAsync', asyncWrapper],
  ];
  groups.forEach(([g, name, w]) => {
    if (g) {
      result[name] = function <T>(this: AnyIterable<T>, ...args: any[]) {
        return w(g.call(this, ...args)).map(fluentGroup);
      };
    }
  });

  if (partition) {
    result.partition = function <T>(this: AnyIterable<T>, ...args: any[]) {
      return wrapper(partition.call(this, ...args)).map((part: any) => {
        return wrapper(part);
      });
    };
  }
  return result;
}
