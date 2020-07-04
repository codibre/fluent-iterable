import { Mapper } from '../types';
import { reduce } from './reduce';
import { identity } from '../utils';

export function join<T>(
  iterable: Iterable<T>,
  separator: string,
  mapper: Mapper<T, string> = identity as Mapper<T, string>,
): string {
  return (
    reduce<T, string | undefined>(
      iterable,
      (current, next) => {
        const nextStr = mapper(next);
        return current ? `${current}${separator}${nextStr}` : nextStr;
      },
      undefined,
    ) || ''
  );
}
