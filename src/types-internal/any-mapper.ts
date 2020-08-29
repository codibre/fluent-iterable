export type FunctionAnyMapper<T> = (value: T) => any;
export type AnyMapper<T> = FunctionAnyMapper<T> | keyof T;
