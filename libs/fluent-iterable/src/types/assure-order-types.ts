export interface OrderAssurable<T> {
  /**
   * Assures the order of the object. For the next operations to be used,
   * it will be assumed that the order, no matter the predicate used, will
   * be ascending, and this will affect the way some operations works.
   *
   * Be sure to use this method only if you know the order will be right
   */
  assureOrder(): T;
  /**
   * Alias for assureOrder
   *
   * Assures the order of the object. For the next operations to be used,
   * it will be assumed that the order, no matter the predicate used, will
   * be ascending, and this will affect the way some operations works.
   *
   * Be sure to use this method only if you know the order will be right
   */
  o(): T;
  /**
   * Assures the descending order of the object. For the next operations to be used,
   * it will be assumed that the order, no matter the predicate used, will
   * be descending, and this will affect the way some operations works.
   *
   * Be sure to use this method only if you know the order will be right
   */
  assureOrderDescending(): T;
  /**
   * alias for assureOrderDescending
   *
   * Assures the descending order of the object. For the next operations to be used,
   * it will be assumed that the order, no matter the predicate used, will
   * be descending, and this will affect the way some operations works.
   *
   * Be sure to use this method only if you know the order will be right
   */
  od(): T;
}
