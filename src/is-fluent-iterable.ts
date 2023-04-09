import { FluentClass } from './fluent-class';
import { isClassFactory } from './utils/internal-utils';

/**
 * Return true when the informed value is an fluent iterable, and false otherwise
 * @param value the value to be analyzed
 * @returns The return is also a type guard, ie, inside an if with that function, the value will be considered an fluent iterable
 */
export const isFluentIterable = isClassFactory(FluentClass);
