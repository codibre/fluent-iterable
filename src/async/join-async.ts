import { AnyIterable } from '../common/any-iterable';
import { AsyncMapper } from '../types';
import { identity } from '../utils';
import { reduceAsync } from './reduce-async';

export async function joinAsync<T>(
  iterable: AnyIterable<T>,
  separator: string,
  mapper: AsyncMapper<T, string> = identity as AsyncMapper<T, string>,
): Promise<string> {
  return (
    (await reduceAsync<T, string | undefined>(
      iterable,
      (current, next) => {
        const nextStr = mapper(next);
        return current ? `${current}${separator}${nextStr}` : nextStr;
      },
      undefined,
    )) || ''
  );
}
