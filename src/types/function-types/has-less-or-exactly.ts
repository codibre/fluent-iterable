export interface HasLessOrExactly {
  /**
   * Checks if the number of elements of the iterable is less or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns True if the number of elements of the iterable is lesser or equal the threshold and false if it is not.
   */
  (threshold: number): boolean;
}

export interface AsyncHasLessOrExactly {
  /**
   * Checks if the number of elements of the iterable is less or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns True if the number of elements of the iterable is lesser or equal the threshold and false if it is not.
   */
  (threshold: number): Promise<boolean>;
}
