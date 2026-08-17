import { fluentGroup } from '../utils';
import { AnyIterable } from 'augmentative-iterable';

export type SpecialType = {
  [key in 'group' | 'groupAsync' | 'partition' | 'next']: Function;
};

export function mountSpecial(
  { group, groupAsync, partition, next }: Partial<SpecialType>,
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

  if (next) {
    result.next = function <T>(this: AnyIterable<T>, ...args: any[]) {
      return next.call(wrapper(this), ...args);
    };
  }
  return result;
}
