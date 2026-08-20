export interface HasLessThanFunction {
  /**
   * Checks if the number of elements of the iterable is less than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns True if the number of elements of the iterable is lesser than the threshold and false if it is not.
   */
  (threshold: number): boolean;
}

export interface AsyncHasLessThanFunction {
  /**
   * Checks if the number of elements of the iterable is less than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns True if the number of elements of the iterable is lesser than the threshold and false if it is not.
   */
  (threshold: number): boolean;
}
