import { AnyMapper, FunctionAnyMapper } from './any-mapper';

export function prepare<T>(predicate: AnyMapper<T>): FunctionAnyMapper<T> {
  return typeof predicate === 'string'
    ? (t: T) => t[predicate]
    : (predicate as FunctionAnyMapper<T>);
}

export function optPrepare<T>(
  predicate?: AnyMapper<T>,
): FunctionAnyMapper<T> | undefined {
  return predicate ? prepare(predicate) : undefined;
}
