export interface Aggregations<T> {
  /**
   * Returns the sum of all iterated informed values
   * @param value the value to be accumulated
   * @param id An optional id to identify the accumulation
   */
  sum(value: number, id?: string | number): number;
  /**
   * Returns the product of all iterated informed values
   * @param value the value to be multiplied
   * @param id An optional id to identify the accumulation
   */
  multiply(value: number, id?: string | number): number;
  /**
   * Returns the maximum iterable item associated with the informed value
   * Notice that the return is not the value itself, but the iterable item which this
   * aggregation are contained in, similar to the max fluent operation
   * @param value the value to be evaluated
   * @param id An optional id to identify the accumulation
   */
  max(value: unknown, id?: string | number): T;
  /**
   * Returns the mean of all iterated informed values
   * @param value the value to be evaluated at each iteration
   * @param id An optional id to identify the accumulation
   */
  avg(value: number, id?: string | number): number;
  /**
   * Returns the minimum iterable item associated with the informed value
   * Notice that the return is not the value itself, but the iterable item which this
   * aggregation are contained in, similar to the min fluent operation
   * @param value the value to be evaluated
   * @param id An optional id to identify the accumulation
   */
  min(value: unknown, id?: string | number): T;
  /**
   * Returns the first iterable item associated where the informed value is truthy
   * Notice that the return is not the value itself, but the iterable item which this
   * aggregation are contained in, similar to the first fluent operation
   * @param value the value to be evaluated
   * @param id An optional id to identify the accumulation
   */
  first(value: unknown, id?: string | number): T;
  /**
   * Returns the last iterable item associated where the informed value is truthy
   * Notice that the return is not the value itself, but the iterable item which this
   * aggregation are contained in, similar to the last fluent operation
   * @param value the value to be evaluated
   * @param id An optional id to identify the accumulation
   */
  last(value: unknown, id?: string | number): T;
  /**
   * Returns the modular sum of all iterated informed values
   * @param value the value to be accumulated
   * @param mod the modulus
   * @param id An optional id to identify the accumulation
   */
  modSum(value: number, mod: number, id?: string | number): number;
  /**
   * Returns the modular product of all iterated informed values
   * @param value the value to be multiplied
   * @param mod the modulus
   * @param id An optional id to identify the accumulation
   */
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
    callback: (item: T, agg: Aggregations<T>, acc: I) => R,
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
    callback: (item: T, agg: Aggregations<T>, acc: R | undefined) => R,
    initialize?: I,
  ): Promise<R>;
}
