/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-magic-numbers */
export declare type AnyIterable<T> = Iterable<T> | AsyncIterable<T>;
/**
 * Represents a predicate on type `T`.<br>
 *   Example: `const evenNumber: Predicate<number> = n => (n % 2) === 0;`
 * @typeparam T The type the predicate is defined on.
 */
export declare interface Predicate<T> {
  /**
   * Evaluates an item of type `T`.
   * @param item The item evaluated.
   * @returns `true` if the predicate passed on `item`; otherwise `false`.
   */
  (item: T): any;
}
/**
 * Represents an asynchronous predicate on type `T`.<br>
 *   Example: `const userExists: AsyncPredicate<User> = async user => !!(await getUser(user.id))`
 * @typeparam T The type the predicate is defined on.
 */
interface AsyncPredicate<T> {
  /**
   * Asynchronously evaluates an item of type `T`.
   * @param item The item evaluated.
   * @returns A promise of `true` if the predicate passed on `item`; otherwise a promise of `false`.
   */
  (item: T): Promise<any> | any;
}

/**
 * Represents a mapping operation from type `T` to type `R`.<br>
 *   Example: ``const userToPrintable: Mapper<User, string> = user => `${user.name} (id: ${user.id})` ``
 * @typeparam T The source type.
 * @typeparam R The destination type.
 */
interface Mapper<T, R> {
  /**
   * Maps an item of type `T` into an instance of type `R`.
   * @param item The item to map.
   * @returns The map of `item`.
   */
  (item: T): R;
}
/**
 * Represents a asynchronous mapping operation from type `T` to type `R`.<br>
 *   Example: `const idToUser: AsyncMapper<number, User> = async id => await getUser(id)`<br>
 *   Note: in the example above, `getUser` function is already an [[AsyncMapper]].
 * @typeparam T The source type.
 * @typeparam R The destination type.
 */
interface AsyncMapper<T, R> {
  /**
   * Asynchronously maps an item of type `T` into an instance of type `R`.
   * @param item The item to map.
   * @returns A promise of the map of `item`.
   */
  (item: T): Promise<R> | R;
}
/**
 * Performs a forEach operation over the informed iterable applying the augmentative arguments. To use this function,
 * you need to bind it to your iterable or call it with call, like .call(originalIterable, mapper)
 * @param this: The original iterable you need to bind
 * @param action the predicate function
 */
export declare function augmentativeForEach<T>(
  this: Iterable<T>,
  action: Predicate<T>,
): void;
/**
 * Performs a forEach operation over the informed async iterable applying the augmentative arguments. To use this function,
 * you need to bind it to your async iterable or call it with call, like .call(originalIterable, mapper)
 * @param this: The original iterable or async iterable you need to bind
 * @param action the predicate function
 */
export declare function augmentativeForEachAsync<T>(
  this: AnyIterable<T>,
  action: AsyncPredicate<T>,
): Promise<void>;
/**
 * Performs an toArray operation over the informed iterable. To use this function,
 * you need to bind it to your iterable or call it with call, like .call(originalIterable, mapper)
 * @param this: The original iterable you need to bind
 */
export declare function augmentativeToArray<T>(this: Iterable<T>): T[];
/**
 * Performs an toArray operation over the informed async iterable. To use this function,
 * you need to bind it to your iterable or use the call method, like this: .call(originalIterable, mapper)
 * @param this: The original async iterable you need to bind
 */
export declare function augmentativeToArrayAsync<T>(
  this: AnyIterable<T>,
): Promise<T[]>;
/**
 * Returns an iterable that returns only the values of the original iterable that passes the informed predicate
 * @param it the original iterable
 * @param mapper the predicate function
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function filterIterable<T>(
  it: Iterable<T>,
  predicate: Predicate<T>,
  isImmutable?: boolean,
): Iterable<T>;
/**
 * Returns an async iterable that returns only the values of the original async iterable that passes the informed predicate
 * @param it the original async iterable or iterable
 * @param mapper the predicate function
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function filterAsyncIterable<T>(
  it: AnyIterable<T>,
  predicate: AsyncPredicate<T>,
  isImmutable?: boolean,
): AsyncIterable<T>;
/**
 * Returns an iterable that maps each value of the iterable using the function provided
 * @param it the original iterable
 * @param mapper the mapping function
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function mapIterable<T, R>(
  it: Iterable<T>,
  mapper: Mapper<T, R>,
  isImmutable?: boolean,
): Iterable<R>;

/**
 * Returns an async iterable that maps each value of the async iterable using the function provided
 * @param it the original async iterable or iterable
 * @param mapper the mapping function
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function mapAsyncIterable<T, R>(
  it: AnyIterable<T>,
  mapper: AsyncMapper<T, R>,
  isImmutable?: boolean,
): AsyncIterable<R>;

/**
 * Add a flatMap augment for the iterable. It will returns a new iterable with tne new mapped item type.
 * @param it the original iterable
 * @param mapper the mapping function
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function flatMapIterable<
  T,
  R = T extends AnyIterable<infer Sub> ? Sub : never
>(
  it: Iterable<T>,
  mapper?: AsyncMapper<T, AnyIterable<R>>,
  isImmutable?: boolean,
): Iterable<R>;

/**
 * Add a flatMap augment for the iterable. It will returns a new iterable with tne new mapped item type.
 * @param it the original iterable
 * @param mapper the mapping function
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function flatMapAsyncIterable<
  T,
  R = T extends AnyIterable<infer Sub> ? Sub : never
>(
  it: AnyIterable<T>,
  mapper?: AsyncMapper<T, AnyIterable<R>>,
  isImmutable?: boolean,
): AsyncIterable<R>;
/**
 * Skips the first offset elements and then yields the next ones
 * @param it the original iterable
 * @param offset the number of offset elements
 */
export declare function skipIterable<T>(
  it: Iterable<T>,
  offset: number,
  isImmutable?: boolean,
): Iterable<T>;

/**
 * Skips the first offset elements and then yields the next ones
 * @param it the original async iterable
 * @param offset the number of offset elements
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function skipAsyncIterable<T>(
  it: AnyIterable<T>,
  offset: number,
  isImmutable?: boolean,
): AsyncIterable<T>;
/**
 * Returns an iterable that stop to iterate over the values of the original iterable when the informed condition resolves to true.
 * @param it the original iterable
 * @param predicate the stop condition
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function takeWhileIterable<T>(
  it: Iterable<T>,
  predicate: Predicate<T>,
  isImmutable?: boolean,
): Iterable<T>;
/**
 * Returns an async iterable that stop to iterate over the values of the original async iterable when the informed condition resolves to true.
 * @param it the original iterable or async iterable
 * @param predicate the stop condition
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function takeWhileAsyncIterable<T>(
  it: AnyIterable<T>,
  predicate: AsyncPredicate<T>,
  isImmutable?: boolean,
): AsyncIterable<T>;

/**
 * Add a filter augment for the iterable. It will returns a new iterable if the informed is not already augmentative.
 * @param it the original iterable
 * @param mapper the predicate function
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function addFilter<T>(
  it: Iterable<T>,
  predicate: Predicate<T>,
  isImmutable?: boolean,
): Iterable<T>;
/**
 * Add a filter augment for the async iterable. It will returns a new iterable if the informed is not already augmentative.
 * @param it the original async iterable or iterable
 * @param mapper the predicate function
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function addFilterAsync<T>(
  it: AnyIterable<T>,
  predicate: AsyncPredicate<T>,
  isImmutable?: boolean,
): AsyncIterable<T>;
/**
 * Add a map augment for the iterable. It will returns a new iterable if the informed is not already augmentative.
 * @param it the original iterable
 * @param mapper the mapping function
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function addMap<T, R>(
  it: Iterable<T>,
  mapper: Mapper<T, R>,
  isImmutable?: boolean,
): Iterable<R>;

/**
 * Add a map augment for the async iterable. It will returns a new iterable if the informed is not already augmentative.
 * @param it the original async iterable or iterable
 * @param mapper the mapping function
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function addMapAsync<T, R>(
  it: AnyIterable<T>,
  mapper: AsyncMapper<T, R>,
  isImmutable?: boolean,
): AsyncIterable<R>;
/**
 * Add a takeWhile augment for the iterable. It will returns a new iterable if the informed is not already augmentative.
 * @param it the original iterable
 * @param predicate the stop condition
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function addTakeWhile<T>(
  it: Iterable<T>,
  predicate: Predicate<T>,
  isImmutable?: boolean,
): Iterable<T>;
/**
 * Add a takeWhile augment for the async iterable. It will returns a new iterable if the informed is not already augmentative.
 * @param it the original iterable or async iterable
 * @param predicate the stop condition
 * @param isImmutable defines if the next augmentations will emit a new iterable or change the current in place. Only takes effect at the first one of the augmentation chain
 */
export declare function addTakeWhileAsync<T>(
  it: AnyIterable<T>,
  predicate: AsyncPredicate<T>,
  isImmutable?: boolean,
): AsyncIterable<T>;

/**
 * Pass the informed value to the callback and returns it's result
 * @typeparam T input type of the callback
 * @typeparam R the result type of the callback
 * @param value The value to be passed on
 * @param callback The callback
 */
export declare function resolver<T, R>(value: T, callback: (c: T) => R): R;

/**
 * Resolves a promise like value and pass the result to a callback and returns it's result
 * @typeparam T input type of the callback
 * @typeparam R the result type of the callback
 * @param promise The promise like value
 * @param callback The callback
 */
export declare function resolverAsync<T, R>(
  promise: PromiseLike<T> | T,
  callback: (c: T) => R,
): Promise<R> | R;

export declare function itClone<T extends AnyIterable<any>>(it: T): T;
