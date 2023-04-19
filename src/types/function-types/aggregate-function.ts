export interface Aggregations {
  sum(value: number, id?: string | number): number;
  multiply(value: number, id?: string | number): number;
  max<T extends string | number>(value: T, id?: string | number): T;
  avg(value: number, id?: string | number): number;
  min<T>(value: T, id?: string | number): T;
  first<T>(value: T, id?: string | number): T;
  last<T>(value: T, id?: string | number): T;
  modSum(value: number, mod: number, id?: string | number): number;
  modMultiply(value: number, mod: number, id?: string | number): number;
}

export interface AggregateFunction<T> {
  /**
   * Execute aggregations, returning the last result. This is a resolving operation
   * The aggregations available are: sum, multiply, max, avg, min, first, last, modSum, modMultiply
   * @param callback The callback to execute the aggregations. It receives a second param: an object containing all the available aggregations
   * @returns the last method result
   */
  <R, I extends R | undefined = R | undefined>(
    callback: (item: T, agg: Aggregations, acc: I) => R,
    initialize?: I,
  ): R;
}
export interface AsyncAggregateFunction<T> {
  /**
   * Execute aggregations, returning the last result. This is a resolving operation
   * The aggregations available are: sum, multiply, max, avg, min, first, last, modSum, modMultiply
   * @param callback The callback to execute the aggregations. It receives a second param: an object containing all the available aggregations
   * @returns the last method result
   */
  <R, I extends R | undefined = R | undefined>(
    callback: (item: T, agg: Aggregations, acc: R | undefined) => R,
    initialize?: I,
  ): Promise<R>;
}
