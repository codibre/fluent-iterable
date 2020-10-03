import { valueTypeWrapper } from './string-wrapper';
import { AnyMapper, FunctionAnyMapper } from './any-mapper';

export function prepare<T>(predicate: AnyMapper<T>): FunctionAnyMapper<T> {
  if (predicate.hasOwnProperty(valueTypeWrapper)) {
    return (t: any) => t[(predicate as any)[valueTypeWrapper]];
  }

  return typeof predicate === 'string'
    ? (t: T) => t[predicate]
    : (predicate as FunctionAnyMapper<T>);
}

export function optPrepare<T>(
  predicate?: AnyMapper<T>,
): FunctionAnyMapper<T> | undefined {
  return predicate ? prepare(predicate) : undefined;
}
