import { valueTypeWrapper } from './string-wrapper';
import { AnyMapper, FunctionAnyMapper } from '../types/any-mapper';

const fieldTypes = new Set(['string', 'number', 'symbol']);

export function prepare<T>(predicate: AnyMapper<T>): FunctionAnyMapper<T> {
  if (predicate.hasOwnProperty(valueTypeWrapper)) {
    return (t: any) => t[(predicate as any)[valueTypeWrapper]];
  }

  return fieldTypes.has(typeof predicate)
    ? (t: T) => t[predicate as keyof T]
    : (predicate as FunctionAnyMapper<T>);
}
