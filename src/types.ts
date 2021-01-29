import {
  AnyIterable,
  AsyncPredicate,
  Mapper,
  AsyncMapper,
} from 'augmentative-iterable';
import { EventEmitter } from 'events';
import { OrderAssurable } from './assure-order-types';
import { FluentIterableEmitter } from './types-emitter';
import {
  FluentEmitOptions,
  Indexed,
  Predicate,
  Comparer,
  Reducer,
  AsyncReducer,
  Action,
  AsyncAction,
  ErrorCallback,
  Group,
  FluentEmitter,
  Equality,
  KVGroupTransform,
} from './types-base';

/**
 * Represents an iterable extended with common processing and mutating capabilities.<br>
 *   The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.
 * @typeparam T The type of the items in the iterable.
 */
interface FluentIterable<T>
  extends Iterable<T>,
    OrderAssurable<FluentAsyncIterable<T>>,
    FluentIterableEmitter<T> {
  /**
   * Maps all elements of the iterable to an instance of [[Indexed]], an index-value pair constructed of the original element in the iterable and it's index (starting from 0 for the first element in the iterable).<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).withIndex()` yields `{ idx: 0, value: 'anchor' }`, `{ idx: 1, value: 'almond' }` and so on.
   * @returns A [[FluentIterable]] of [[Indexed]].
   */
  withIndex(): FluentIterable<Indexed<T>>;

  /**
   * Returns elements from the iterable as long as a specified condition is met.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).takeWhile(word => word[0] === 'a')` yields *anchor* and *almond*.
   * @param condition A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentIterable]] of the elements until the condition is met.
   */
  takeWhile(condition: Predicate<T>): FluentIterable<T>;

  /**
   * Returns elements from the iterable as long as a specified asynchronous condition is met.
   * @param condition An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentAsyncIterable]] of the elements until the condition is met.
   */
  takeWhileAsync(condition: AsyncPredicate<T>): FluentAsyncIterable<T>;

  /**
   * Returns a specified number of contiguous elements from the start of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).take(2)` yields *anchor* and *almond*.
   * @param n The number of elements to take.
   * @returns A [[FluentIterable]] of the first `n` elements.
   */
  take(n: number): FluentIterable<T>;

  /**
   * Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skipWhile(word => word[0] === 'a')` yields *bound* and *alpine*.
   * @param condition A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentIterable]] of the elements after the condition is not met.
   */
  skipWhile(condition: Predicate<T>): FluentIterable<T>;

  /**
   * Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.
   * @param condition An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentAsyncIterable]] of the elements after the condition is not met.
   */
  skipWhileAsync(condition: AsyncPredicate<T>): FluentAsyncIterable<T>;

  /**
   * Bypasses a specified number of elements in the iterable and then returns the remaining elements.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skip(2)` yields *bound* and *alpine*.
   * @param n The number of elements to skip.
   * @returns A [[FluentIterable]] of all the elements after the first `n` elements.
   */
  skip(n: number): FluentIterable<T>;

  /**
   * Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).map(word => word.toUpperCase())` yields *ANCHOR*, *ALMOND*, *BOUND* and *ALPINE*.
   * @typeparam R The destination type of the mapping.
   * @param mapper The operation which maps an instance of `T` into an instance of `R`.
   * @returns A [[FluentIterable]] of the mapped elements.
   */
  map<R>(mapper: Mapper<T, R>): FluentIterable<R>;

  /**
   * Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.
   * @typeparam R The destination type of the mapping.
   * @param mapper The asynchronous operation which maps an instance of `T` into an instance of `R`.
   * @returns A [[FluentAsyncIterable]] of the mapped elements.
   */
  mapAsync<R>(mapper: AsyncMapper<T, R>): FluentAsyncIterable<R>;

  /**
   * Filters the iterable of `T` based on a predicate.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.
   * @param predicate A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentIterable]] of the elements against which the predicate evaluates to `true`.
   */
  filter(predicate: Predicate<T>): FluentIterable<T>;

  /**
   * Filters the iterable of `T` based on an asynchronous predicate.
   * @param predicate An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.
   */
  filterAsync(predicate: AsyncPredicate<T>): FluentAsyncIterable<T>;

  /*
   * Groups the elements of the iterable into partitions of a specified size.<br>
   *   Note: the last partition size can be smaller than the specified size.
   * @param criteria The expected size of the partitions or a equality to determine of two consecutive items must be in the same partition.
   * @returns The [[FluentIterable]] of partitions.
   */
  partition(size: number | Equality<T>): FluentIterable<FluentIterable<T>>;

  /**
   * Appends a value to the end of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).append('book')` yields *anchor*, *almond*, *bound*, *alpine* and *book*.
   * @param item The item to be appended to the iterable.
   * @returns The [[FluentIterable]] appended with the element.
   */
  append(item: T): FluentIterable<T>;

  /**
   * Adds a value to the beginning of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).append('book')` yields *book*, *anchor*, *almond*, *bound* and *alpine*.
   * @param item The item to be prepended to the iterable.
   * @returns The [[FluentIterable]] prepended with the element.
   */
  prepend(item: T): FluentIterable<T>;

  /**
   * Concatenates specified iterables to the iterable.<br>
   *   Example: `fluent(['anchor', 'almond']).concat(['bound', 'alpine'], ['book'])` yields *anchor*, *almond*, *bound*, *alpine* and *book*.
   * @param iterables The iterables to concatenate.
   * @returns The [[FluentIterable]] of the concatenated iterables.
   */
  concat(...iterables: Array<Iterable<T>>): FluentIterable<T>;

  /**
   * Concatenates specified async iterables to the iterable.<br>
   *   Example: `fluent(['anchor', 'almond']).concat(['bound', 'alpine'], someStream)` yields *anchor*, *almond*, *bound*, *alpine* and the elements of the stream.
   * @param iterables The async iterables to concatenate.
   * @returns The [[FluentAsyncIterable]] of the concatenated async iterables.
   */
  concatAsync(...iterables: Array<Iterable<T>>): FluentAsyncIterable<T>;

  /**
   * Repeats the elements of the iterable a specified amount of times.<br>
   *   Example: `fluent(['anchor', 'almond']).repeat(3)` yields *anchor*, *almond*, *anchor*, *almond*, *anchor* and *almond*.
   * @param n The amount of times the iterable is to be repeated.
   * @returns The [[FluentIterable]] of the repeated iterable.
   */
  repeat(n: number): FluentIterable<T>;

  /**
   * Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
   * Examples:<br>
   *   * `fluent([['anchor', 'almond'], ['bound', 'alpine']]).flatten()` yields *anchor*, *almond*, *bound* and *alpine*.<br>
   *   * `fluent([ { values: ['anchor', 'almond'] }, { values: ['bound', 'alpine'] }]).flatten(obj => obj.values)` yields *anchor*, *almond*, *bound* and *alpine*.
   * @typeparam R The type of the elements in the inner iterable.
   * @param mapper Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted.
   * @returns The [[FluentIterable]] of the flattened iterable.
   */
  flatten<R>(mapper?: Mapper<T, Iterable<R>>): FluentIterable<R>;

  /**
   * Asynchronously projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.
   * @typeparam R The type of the elements in the inner iterable.
   * @param mapper Specifies the asynchronous projection from the elements of `T` to iterables of `R`.
   * @returns The flattened [[FluentAsyncIterable]].
   */
  flattenAsync<R>(mapper?: AsyncMapper<T, Iterable<R>>): FluentAsyncIterable<R>;

  /**
   * Sorts the elements of the iterable based on a specified comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * Alphabetical, ascending: `fluent(['anchor', 'almond', 'bound', 'alpine']).sort()` yields *almond*, *alpine*, *anchor* and *bound*.<br>
   *     * Alphabetical, descending: `fluent(['anchor', 'almond', 'bound', 'alpine']).sort((x, y) => x > y ? -1 : x < y ? 1 : 0)` yields *bound*, *anchor*, *alpine* and *almond*.<br>
   *     * Numerical, ascending: `fluent([5, 3, 4, 1, 2]).sort()` yields *1*, *2*, *3*, *4* and *5*.<br>
   *     * Numerical, descending: `fluent([5, 3, 4, 1, 2]).sort((x, y) => y - x)` yields *5*, *4*, *3*, *2* and *1*.
   * @param comparer The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]]
   * @returns The sorted [[FluentIterable]].
   */
  sort(comparer?: Comparer<T>): FluentIterable<T>;

  /**
   * Sorts the elements of the iterable based on a specified fields. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * Alphabetical, ascending: `fluent([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy((x) => x.a)` yields *almond*, *alpine*, *anchor* and *bound*.<br>
   *     * Alphabetical, descending: `fluent([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy(desc((x) => x.a))` yields *bound*, *anchor*, *alpine* and *almond*.<br>
   * @param comparer The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]]
   * @returns The sorted [[FluentIterable]].
   */
  sortBy(...mappers: (Mapper<T, any> | keyof T)[]): FluentIterable<T>;

  /**
   * Returns distinct elements from the iterable from a certain projections perspective.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The projection to use to determine element equality. Identity mapping is used if omitted.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  distinct<R>(mapper?: Mapper<T, R>, maxOcurrences?: number): FluentIterable<T>;

  /**
   * Returns distinct elements from the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*
   * @typeparam R The type of the data the element equality is based on.
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  distinct(maxOcurrences?: number): FluentIterable<T>;

  /**
   * Returns distinct elements from the iterable from a certain asynchronous projections perspective.
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   * @returns The [[FluentAsyncIterable]] of the distinct elements.
   */
  distinctAsync<R>(
    mapper: AsyncMapper<T, R>,
    maxOcurrences?: number,
  ): FluentAsyncIterable<T>;

  /**
   * Checks if the given projection have only distinct elements. This is a partial resolving operation,
   * and will return the result after as soon as an item got more occurrences than the specified
   *
   *   Examples:
   *
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The projection to use to determine element equality. Identity mapping is used if omitted.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   */
  isDistinct<R>(mapper?: Mapper<T, R>, maxOcurrences?: number): boolean;

  /**
   * Checks if the given iterable have only distinct elements. This is a partial resolving operation,
   * and will return the result after as soon as an item got more occurrences than the specified
   *
   *   Examples:
   *
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   */
  isDistinct(maxOcurrences?: number): boolean;

  /**
   * Checks if the given projection have only distinct elements. This is a partial resolving operation,
   * and will return the result after as soon as an item got more occurrences than the specified
   *
   *   Examples:
   *
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinctAsync()` returns true
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0])` returns false
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0], 2)` returns true
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   */
  isDistinctAsync<R>(
    mapper: AsyncMapper<T, R>,
    maxOcurrences?: number,
  ): Promise<boolean>;

  /**
   * Groups the elements of the iterable keyed by equality of data at the specified projection.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).group(word => word[0])` yields { key: 'a', values: ['anchor', 'almond', 'alpine'] } and { key: 'b', values: ['bound'] }.
   * @typeparam R The type of the groups' key.
   * @param mapper Projects the elements of the iterable into the group key they belong to.
   * @param transformValue Optional. Allows a transformation before adding the value to the group. The return must be an iterable
   * @returns The [[FluentIterable]] of the distinct groups.
   */
  group<R, V = T>(
    mapper: Mapper<T, R>,
    transformValue?: KVGroupTransform<R, T, V>,
  ): FluentIterable<FluentGroup<T, R>>;

  /**
   * Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.
   * @typeparam R The type of the groups key.
   * @param mapper Asynchronously projects the elements of the iterable into the group key they belong to.
   * @param transformValue Optional. Allows a transformation before adding the value to the group. The return must be an iterable
   * @returns The [[FluentAsyncIterable]] of the distinct groups.
   */
  groupAsync<R, V = T>(
    mapper: AsyncMapper<T, R>,
    transformValue?: KVGroupTransform<R, T, V>,
  ): FluentAsyncIterable<FluentGroup<T, R>>;

  /**
   * Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).count()` returns **4**<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).count(word => word[0] === 'a')` returns **3**
   * @param predicate The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted.
   * @returns The number of elements matching the specified predicate.
   */
  count(predicate?: Predicate<T>): number;

  /**
   * Returns the number of elements that matches an asynchronous predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param predicate The count will consider elements which match this asynchronous predicate.
   * @returns A promise of the number of elements matching the specified predicate.
   */
  countAsync(predicate?: AsyncPredicate<T>): Promise<number>;

  /**
   * Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).first()` returns *anchor*<br>
   *     * `fluent([]).first()` returns `undefined`<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'b')` returns *bound*<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'c')` returns `undefined`
   * @param predicate The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted.
   * @returns The first element matching the specified predicate, or `undefined` if no such element found.
   */
  first(predicate?: Predicate<T>): T | undefined;

  /**
   * Returns the first element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param predicate The first element is to be returned which matches this asynchronous predicate.
   * @returns A promise of the first element matching the specified predicate, or `undefined` if no such element found.
   */
  firstAsync(predicate?: AsyncPredicate<T>): Promise<T | undefined>;

  /**
   * Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).last()` returns *alpine*<br>
   *     * `fluent([]).last()` returns `undefined`<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'b')` returns *bound*<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'c')` returns `undefined`
   * @param predicate The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted.
   * @returns The last element matching the specified predicate, or `undefined` if no such element found.
   */
  last(predicate?: Predicate<T>): T | undefined;

  /**
   * Returns the last element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param predicate The last element is to be returned which matches this asynchronous predicate.
   * @returns A promise of the last element matching the specified predicate, or `undefined` if no such element found.
   */
  lastAsync(predicate?: AsyncPredicate<T>): Promise<T | undefined>;

  /**
   * Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example:<br>
   *     ```
   *     fluent(['anchor', 'almond', 'bound', 'alpine']).reduceAndMap(
   *       (current, next) => (next.length < current.minValue ? { min: next, minValue: next.length } : current),
   *       {
   *         min: undefined as (string | undefined),
   *         minValue: Number.MAX_VALUE
   *       },
   *       acc => acc.min
   *     )
   *     ``` returns *bound*, the shortest word in the iterable.
   * @typeparam A The type of the accumulator value.
   * @typeparam R The type of the aggregation result.
   * @param reducer The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.
   * @param initial The initial (aka *seed*) value of the accumulator.
   * @param result The mapping function, projects the accumulator value of type `A` to the result value of type `R`.
   * @returns The aggregated value.
   */
  reduceAndMap<A, R>(
    reducer: Reducer<T, A>,
    initial: A,
    result: Mapper<A, R>,
  ): R;

  /**
   * Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified asynchronous map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam A The type of the accumulator value.
   * @typeparam R The type of the aggregation result.
   * @param reducer The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.
   * @param initial The initial (aka *seed*) value of the accumulator.
   * @param result The asynchronous mapping function, projects the accumulator value of type `A` to the result value of type `R`.
   * @returns A promise of the aggregated value.
   */
  reduceAndMapAsync<A, R>(
    reducer: AsyncReducer<T, A>,
    initial: A,
    result: AsyncMapper<A, R>,
  ): Promise<R>;

  /**
   * Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example:<br>
   *     ```
   *     fluent(['anchor', 'almond', 'bound', 'alpine']).reduce(
   *       (current, next) => (next[0] === 'a' ? current + 1 : current),
   *       0
   *     )
   *     ``` returns *3*, the number of words start with 'a' in the iterable.
   * @typeparam R The type of the accumulator value.
   * @param reducer The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.
   * @param initial The initial (aka *seed*) value of the accumulator.
   * @returns The aggregated value.
   */
  reduce<R>(reducer: Reducer<T, R>, initial: R): R;

  /**
   * Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The type of the accumulator value.
   * @param reducer The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.
   * @param initial The initial (aka *seed*) value of the accumulator.
   * @returns A promise of the aggregated value.
   */
  reduceAsync<R>(reducer: AsyncReducer<T, R>, initial: R): Promise<R>;

  /**
   * Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word.length > 3)` yields `true` since all words are longer than 3 characters
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word[0] === 'a')` yields `false` since *bound* does not start with the character *a*
   *     * `fluent([]).all(word => false)` yields `true` as a convention, empty iterables always return `true`
   * @param predicate The condition checked for all elements in the iterable.
   * @returns `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.
   */
  all(predicate: Predicate<T>): boolean;

  /**
   * Determines whether all elements of the iterable satisfy an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Note: This operation stops reading elements from the iterable as soon as the result can be determined.
   * @param predicate The asynchronous condition checked for all elements in the iterable.
   * @returns A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.
   */
  allAsync(predicate: AsyncPredicate<T>): Promise<boolean>;

  /**
   * Determines whether any element of the iterable exists or satisfies a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).any()` yields `true` since the iterable is not empty
   *     * `fluent([]).any()` yields `false` since the iterable is empty
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).any(word => word[0] === 'b')` yields `true` since *bound* starts with the character *b*
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).any(word => word.length < 5)` yields `false` since none of the words are shorter than 5 characters
   *     * `fluent([]).any(word => false)` yields `false` as a convention, empty iterables always return `false`
   * @param predicate The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty.
   * @returns `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.
   */
  any(predicate?: Predicate<T>): boolean;

  /**
   * Determines whether any element of the iterable exists or satisfies an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Note: This operation stops reading elements from the iterable as soon as the result can be determined.
   * @param predicate The asynchronous condition checked for the elements in the iterable.
   * @returns A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.
   */
  anyAsync(predicate?: AsyncPredicate<T>): Promise<boolean>;

  /**
   * Determines whether the iterable contains a specified element. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).contains('bound')` returns `true`
   * @param item The element to check.
   * @returns `true` if the specified element exists in the iterable, `false` otherwise.
   */
  contains(item: T): boolean;

  /**
   * Translates the iterable into an array. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).toArray()` returns `['anchor', 'almond', 'bound', 'alpine']`
   * @returns The array equivalent of the iterable.
   */
  toArray(): T[];

  /**
   * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
   *     * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`
   * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
   * @param keySelector Projects an element of the iterable into the key of the corresponding field.
   * @param valueSelector Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.
   * @returns The object composed of the elements of the iterable as fields.
   */
  toObject<R = any>(
    keySelector: Mapper<T, keyof R>,
    valueSelector?: Mapper<T, R[keyof R]>,
  ): R;

  /**
   * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
   * @param keySelector Asynchronously projects an element of the iterable into the key of the corresponding field.
   * @param valueSelector Asynchronously projects an element of the iterable into the value of the corresponding field.
   * @returns A promise of the object composed of the elements of the iterable as fields.
   */
  toObjectAsync<R = any>(
    keySelector: AsyncMapper<T, keyof R>,
    valueSelector?: AsyncMapper<T, R[keyof R]>,
  ): Promise<R>;

  /**
   * Translates the iterable into a [[FluentAsyncIterable]].
   * @returns The [[FluentAsyncIterable]] instance.
   */
  toAsync(): FluentAsyncIterable<T>;

  /**
   * Iterates through the iterable and executes an action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).forEach(console.log)` prints *anchor*, *almond*, *bound* and *alpine*
   * @param action The action to execute against each element.
   */
  forEach(action: Action<T>): void;

  /**
   * Iterates through the iterable and executes an asynchronous action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param action The asynchronous action to execute against each element.
   * @returns A promise of the executions.
   */
  forEachAsync<R>(mapper: AsyncMapper<T, R>): Promise<void>;

  /**
   * Translate an iterable into one which executes an action against each element before yield them.<br>
   *   Examples:<br>
   *     * `for (const element of fluent(['anchor', 'almond', 'bound', 'alpine']).execute(console.log)) { }` prints *anchor*, *almond*, *bound* and *alpine*
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).execute(console.log).first()` prints *anchor* and returns the string *anchor*
   * @param action The action to execute against each element.
   * @returns The [[FluentIterable]] with the action injected to it.
   */
  execute(action: Action<T>): FluentIterable<T>;

  /**
   * Translate an iterable into one which executes an asynchronous action against each element before yield them.
   * @param action The asynchronous action to execute against each element.
   * @returns The [[FluentAsyncIterable]] with the action injected to it.
   */
  executeAsync(action: AsyncAction<T>): FluentAsyncIterable<T>;

  /**
   * Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).join(', ')` returns *anchor, almond, bound, alpine*
   * @param separator The separator to use in between the elements of the iterable.
   * @param mapper The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.
   * @returns The concatenated string of the elements in the iterable.
   */
  join(separator: string, mapper?: Mapper<T, string>): string;

  /**
   * Asynchronously projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param separator The separator to use in between the elements of the iterable.
   * @param mapper The function which asynchronously projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.
   * @returns A promise of the concatenated string of the elements in the iterable.
   */
  joinAsync(separator: string, mapper: AsyncMapper<T, string>): Promise<string>;

  /**
   * Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent([5, -2, 9]).sum()` returns *12*
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).sum(word => word.length)` returns *23*, the sum of length of all the words in the iterable
   * @param mapper The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
   * @returns The sum of the projected elements of the iterable.
   */
  sum(mapper?: Mapper<T, number>): number;

  /**
   * Calculates the sum of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
   * @returns A promise of the sum of the projected elements of the iterable.
   */
  sumAsync(mapper?: AsyncMapper<T, number>): Promise<number>;

  /**
   * Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent([5, -2, 9]).avg()` returns *4*
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).avg(word => word.length)` returns *5.75*, the average of the length of all the words in the iterable
   * @param mapper The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
   * @returns The average of the projected elements of the iterable.
   */
  avg(mapper?: Mapper<T, number>): number;

  /**
   * Calculates the average of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
   * @returns A promise of the average of the projected elements of the iterable.
   */
  avgAsync(mapper?: AsyncMapper<T, number>): Promise<number>;

  /**
   * Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.length, (a, b) => b - a)` returns *bound*, the shortest word in the iterable
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.charCodeAt(0), (a, b) => a - b)` returns *bound*, latest word in the lexicographical order considering the first character only
   * @typeparam R The type of the projected elements used for comparison.
   * @param mapper The function which projects the elements of the iterable into comparable.
   * @param comparer The comparison function.
   * @returns The top of the iterable's projected elements.
   */
  top<R>(mapper: Mapper<T, R>, comparer: Comparer<R>): T | undefined;

  /**
   * Calculates the top element of the iterable using an asynchronous projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The type of the projected elements used for comparison.
   * @param mapper The asynchronous function which projects the elements of the iterable into comparable.
   * @param comparer The comparison function.
   * @returns A promise of the top of the iterable's projected elements.
   */
  topAsync<R>(
    mapper: AsyncMapper<T, R>,
    comparer: Comparer<R>,
  ): Promise<T | undefined>;

  /**
   * Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).min(word => word.length)` returns *bound*, the shortest word in the iterable
   * @param mapper The function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.
   * @returns The minimum of the iterable's projected elements.
   */
  min<R = T>(mapper?: Mapper<T, R>): T | undefined;

  /**
   * Finds the numeric minimum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The asynchronous function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.
   * @returns A promise of the minimum of the iterable's projected elements.
   */
  minAsync<R = T>(mapper?: AsyncMapper<T, R>): Promise<T | undefined>;

  /**
   * Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).max(word => word.charCodeAt(0))` returns *bound*, since it begins with the character 'b' which has a highest character code than character 'a' with which all the other words begins with
   * @param mapper The function which projects the elements of the iterable into comparable values. Falls back to the identity function if omitted.
   * @returns The maximum of the iterable's projected elements.
   */
  max<R = T>(mapper?: Mapper<T, R>): T | undefined;

  /**
   * Finds the numeric maximum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The function which asynchronously projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted.
   * @returns A promise of the maximum of the iterable's projected elements.
   */
  maxAsync<R = T>(mapper?: AsyncMapper<T, R>): Promise<T | undefined>;

  /**
   * Checks if the number of elements of the iterable is equal to the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns True if the number of elements of the iterable is equal to threshold and false if its not;
   */
  hasExactly(expectedNumber: number): boolean;

  /**
   * Checks if the number of elements of the iterable is less than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns True if the number of elements of the iterable is lesser than the threshold and false if it is not.
   */
  hasLessThan(threshold: number): boolean;

  /**
   * Checks if the number of elements of the iterable is less or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns True if the number of elements of the iterable is lesser or equal the threshold and false if it is not.
   */
  hasLessOrExactly(threshold: number): boolean;

  /**
   * Checks if the number of elements of the iterable is more than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns True if the number of elements of the iterable is greater than the threshold and false if it is not.
   */
  hasMoreThan(threshold: number): boolean;

  /**
   * Checks if the number of elements of the iterable is more or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns True if the number of elements of the iterable is greater or equal the threshold and false if it is not.
   */
  hasMoreOrExactly(threshold: number): boolean;

  /**
   * Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.
   * @param mapper The asynchronous function which projects the elements of the iterable into promises.
   * @returns a promises that resolves into an array with the result of all mappings.
   */
  waitAll<R>(mapper: AsyncMapper<T, R>): PromiseLike<R[]>;

  /**
   * Join the iterable with another one, returning a new iterable with a NxN combination
   * @param iterable The iterable to be combined
   */
  combine<U>(iterable: Iterable<U>): FluentIterable<[T, U]>;

  /**
   * Join the iterable with another one, returning a new iterable with the inner matching combinations
   * @param iterable The right iterable to be combined
   * @param keyA A mapper that returns the key map value from the left iterable
   * @param keyB A mapper that returns the key map value from the right iterable
   */
  combine<U, K>(
    iterable: Iterable<U>,
    keyA: Mapper<T, K>,
    keyB: Mapper<U, K>,
  ): FluentIterable<[T, U]>;

  /**
   * Join the iterable with an async one, returning a new async iterable with a NxN combination
   * @param iterable The iterable to be combined
   */
  combineAsync<U>(iterable: AsyncIterable<U>): FluentAsyncIterable<[T, U]>;

  /**
   * Join the iterable with another one, returning a new async iterable with the inner matching combinations
   * @param iterable The right iterable to be combined
   * @param keyA A mapper that returns the key map value from the left iterable
   * @param keyB A mapper that returns the key map value from the right iterable
   */
  combineAsync<U, K>(
    iterable: AsyncIterable<U>,
    keyA: Mapper<T, K>,
    keyB: Mapper<U, K>,
  ): FluentAsyncIterable<[T, U]>;

  /**
   * Converts the iterable into an EventEmitter. This is a resolving operation.
   *
   * This EventEmitter may emit three different events:
   *
   *
   * * data: for each item of the iterable;
   * * error: in case an error occurs. Notice that, if this method is not listened, the error will be thrown as unhandled;
   * * end: when the iterable ends. Notice that, if the iterable is infinite, this event will never be emitted.
   */
  emit(): FluentEmitter<T>;
}

/**
 * Represents an asynchronous iterable extended with common processing and mutating capabilities.<br>
 *   The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.
 * @typeparam T The type of the items in the asynchronous iterable.
 */
interface FluentAsyncIterable<T>
  extends AsyncIterable<T>,
    OrderAssurable<FluentAsyncIterable<T>>,
    FluentIterableEmitter<T> {
  /**
   * Maps all elements of the iterable to an instance of [[Indexed]], an index-value pair constructed of the original element in the iterable and it's index (starting from 0 for the first element in the iterable).
   * @returns A [[FluentAsyncIterable]] of [[Indexed]].
   */
  withIndex(): FluentAsyncIterable<Indexed<T>>;

  /**
   * Returns elements from the iterable as long as a specified condition is met.
   * @param condition A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentAsyncIterable]] of the elements until the condition is met.
   */
  takeWhile(condition: AsyncPredicate<T>): FluentAsyncIterable<T>;

  /**
   * Returns a specified number of contiguous elements from the start of the iterable.
   * @param n The number of elements to take.
   * @returns A [[FluentAsyncIterable]] of the first `n` elements.
   */
  take(n: number): FluentAsyncIterable<T>;

  /**
   * Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.
   * @param condition A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentAsyncIterable]] of the elements after the condition is not met.
   */
  skipWhile(condition: AsyncPredicate<T>): FluentAsyncIterable<T>;

  /**
   * Bypasses a specified number of elements in the iterable and then returns the remaining elements.
   * @param n The number of elements to skip.
   * @returns A [[FluentAsyncIterable]] of all the elements after the first `n` elements.
   */
  skip(n: number): FluentAsyncIterable<T>;

  /**
   * Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.
   * @typeparam R The destination type of the mapping.
   * @param mapper The operation which maps an instance of `T` into an instance of `R`.
   * @returns A [[FluentAsyncIterable]] of the mapped elements.
   */
  map<R>(mapper: AsyncMapper<T, R>): FluentAsyncIterable<R>;

  /**
   * Filters the iterable of `T` based on a predicate.
   * @param predicate A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.
   */
  filter(predicate: AsyncPredicate<T>): FluentAsyncIterable<T>;

  /**
   * Groups the elements of the iterable into partitions of a specified size.<br>
   *   Note: the last partition size can be smaller than the specified size.
   * @param criteria The expected size of the partitions or a equality to determine of two consecutive items must be in the same partition.
   * @returns The [[FluentAsyncIterable]] of partitions.
   */
  partition(
    criteria: number | Equality<T>,
  ): FluentAsyncIterable<FluentAsyncIterable<T>>;

  /**
   * Appends a value to the end of the iterable.
   * @param item The item to be appended to the iterable.
   * @returns The [[FluentAsyncIterable]] appended with the element.
   */
  append(item: T): FluentAsyncIterable<T>;

  /**
   * Adds a value to the beginning of the iterable.
   * @param item The item to be prepended to the iterable.
   * @returns The [[FluentAsyncIterable]] prepended with the element.
   */
  prepend(item: T): FluentAsyncIterable<T>;

  /**
   * Concatenates specified iterables to the iterable.
   * @param iterables The iterables to concatenate.
   * @returns The [[FluentAsyncIterable]] of the concatenated iterables.
   */
  concat(...iterables: Array<AnyIterable<T>>): FluentAsyncIterable<T>;

  /**
   * Repeats the elements of the iterable a specified amount of times.
   * @param n The amount of times the iterable is to be repeated.
   * @returns The [[FluentAsyncIterable]] of the repeated iterable.
   */
  repeat(n: number): FluentAsyncIterable<T>;

  /**
   * Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.
   * @typeparam R The type of the elements in the inner iterable.
   * @param mapper Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted.
   * @returns The [[FluentAsyncIterable]] of the flattened iterable.
   */
  flatten<R>(mapper?: AsyncMapper<T, Iterable<R>>): FluentAsyncIterable<R>;

  /**
   * Sorts the elements of the iterable based on a specified comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param comparer The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]]
   * @returns The sorted [[FluentAsyncIterable]].
   */
  sort(comparer?: Comparer<T>): FluentAsyncIterable<T>;

  /**
   * Sorts the elements of the iterable based on a specified fields. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * Alphabetical, ascending: `fluentAsync([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy((x) => x.a)` yields *almond*, *alpine*, *anchor* and *bound*.<br>
   *     * Alphabetical, descending: `fluentAsync([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy(desc((x) => x.a))` yields *bound*, *anchor*, *alpine* and *almond*.<br>
   * @param comparer The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]]
   * @returns The sorted [[FluentIterable]].
   */
  sortBy(...mappers: (Mapper<T, any> | keyof T)[]): FluentAsyncIterable<T>;

  /**
   * Returns distinct elements from the iterable from a certain projections perspective.
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The projection to use to determine element equality. Identity mapping is used if omitted.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   * @returns The [[FluentAsyncIterable]] of the distinct elements.
   */
  distinct<R>(
    mapper?: AsyncMapper<T, R>,
    maxOcurrences?: number,
  ): FluentAsyncIterable<T>;

  /**
   * Returns distinct elements from the iterable.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   * @returns The [[FluentAsyncIterable]] of the distinct elements.
   */
  distinct(maxOcurrences?: number): FluentAsyncIterable<T>;

  /**
   * Checks if the given projection have only distinct elements. This is a partial resolving operation,
   * and will return the result after as soon as an item got more occurrences than the specified
   *
   *   Examples:
   *
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinctAsync()` returns true
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0])` returns false
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0], 2)` returns true
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   */
  isDistinct<R>(
    mapper: AsyncMapper<T, R>,
    maxOcurrences?: number,
  ): Promise<boolean>;

  /**
   * Checks if the given async iterable have only distinct elements. This is a partial resolving operation,
   * and will return the result after as soon as an item got more occurrences than the specified
   *
   *   Examples:
   *
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   */
  isDistinct(maxOcurrences?: number): Promise<boolean>;

  /**
   * Groups the elements of the iterable keyed by equality of data at the specified projection.
   * @typeparam R The type of the groups' key.
   * @param mapper Projects the elements of the iterable into the group key they belong to.
   * @param transform Optional. Defines a unicity key, considered by grouped list. If not informed, no unicity is applied
   * @returns The [[FluentAsyncIterable]] of the distinct groups.
   */
  group<R, V = T>(
    mapper: AsyncMapper<T, R>,
    transform?: KVGroupTransform<R, T, V>,
  ): FluentAsyncIterable<FluentGroup<T, R>>;

  /**
   * Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param predicate The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted.
   * @returns A promise of the number of elements matching the specified predicate.
   */
  count(predicate?: AsyncPredicate<T>): Promise<number>;

  /**
   * Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param predicate The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted.
   * @returns A promise of the first element matching the specified predicate, or `undefined` if no such element found.
   */
  first(predicate?: AsyncPredicate<T>): Promise<T | undefined>;

  /**
   * Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param predicate The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted.
   * @returns A promise of the last element matching the specified predicate, or `undefined` if no such element found.
   */
  last(predicate?: AsyncPredicate<T>): Promise<T | undefined>;

  /**
   * Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam A The type of the accumulator value.
   * @typeparam R The type of the aggregation result.
   * @param reducer The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.
   * @param initial The initial (aka *seed*) value of the accumulator.
   * @param result The mapping function, projects the accumulator value of type `A` to the result value of type `R`.
   * @returns A promise of the aggregated value.
   */
  reduceAndMap<A, R>(
    reducer: AsyncReducer<T, A>,
    initial: A,
    result: AsyncMapper<A, R>,
  ): Promise<R>;

  /**
   * Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The type of the accumulator value.
   * @param reducer The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.
   * @param initial The initial (aka *seed*) value of the accumulator.
   * @returns A promise of the aggregated value.
   */
  reduce<R>(reducer: AsyncReducer<T, R>, initial: R): Promise<R>;

  /**
   * Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param predicate The condition checked for all elements in the iterable.
   * @returns A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.
   */
  all(predicate: AsyncPredicate<T>): Promise<boolean>;

  /**
   * Determines whether any element of the iterable exists or satisfies a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param predicate The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty.
   * @returns A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.
   */
  any(predicate?: AsyncPredicate<T>): Promise<boolean>;

  /**
   * Determines whether the iterable contains a specified element. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param item The element to check.
   * @returns A promise of `true` if the specified element exists in the iterable, `false` otherwise.
   */
  contains(item: T): Promise<boolean>;

  /**
   * Translates the iterable into an array. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @returns A promise of the array equivalent of the iterable.
   */
  toArray(): Promise<T[]>;

  /**
   * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
   * @param keySelector Projects an element of the iterable into the key of the corresponding field.
   * @param valueSelector Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.
   * @returns A promise of the object composed of the elements of the iterable as fields.
   */
  toObject<R = T>(
    keySelector: AsyncMapper<T, keyof R>,
    valueSelector?: AsyncMapper<T, R[keyof R]>,
  ): Promise<R>;

  /**
   * Iterates through the iterable and executes an action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param action A promise of the action to execute against each element.
   */
  forEach<R>(mapper: AsyncMapper<T, R>): Promise<void>;

  /**
   * Translate an iterable into one which executes an action against each element before yield them.
   * @param action The action to execute against each element.
   * @returns The [[FluentAsyncIterable]] with the action injected to it.
   */
  execute(action: AsyncAction<T>): FluentAsyncIterable<T>;

  /**
   * Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param separator The separator to use in between the elements of the iterable.
   * @param mapper The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.
   * @returns A promise of the concatenated string of the elements in the iterable.
   */
  join(separator: string, mapper: AsyncMapper<T, string>): Promise<string>;

  /**
   * Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
   * @returns A promise of the sum of the projected elements of the iterable.
   */
  sum(mapper?: AsyncMapper<T, number>): Promise<number>;

  /**
   * Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
   * @returns A promise of the average of the projected elements of the iterable.
   */
  avg(mapper?: AsyncMapper<T, number>): Promise<number>;

  /**
   * Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The type of the projected elements used for comparison.
   * @param mapper The function which projects the elements of the iterable into comparable.
   * @param comparer The comparison function.
   * @returns A promise of the top of the iterable's projected elements.
   */
  top<R>(
    mapper: AsyncMapper<T, R>,
    comparer: Comparer<R>,
  ): Promise<T | undefined>;

  /**
   * Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The function which projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted.
   * @returns A promise of the minimum of the iterable's projected elements.
   */
  min<R = T>(mapper?: AsyncMapper<T, R>): Promise<T | undefined>;

  /**
   * Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The function which projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted.
   * @returns A promise of the maximum of the iterable's projected elements.
   */
  max<R = T>(mapper?: AsyncMapper<T, R>): Promise<T | undefined>;

  /**
   * Checks if the number of elements of the iterable is equal to the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns A promise that resolves to true if the number of elements of the iterable is equal to threshold and false if its not;
   */
  hasExactly(expectedNumber: number): Promise<boolean>;

  /**
   * Checks if the number of elements of the iterable is less than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns A promise that resolves to true if the number of elements of the iterable is lesser than the threshold and false if it is not.
   */
  hasLessThan(threshold: number): Promise<boolean>;

  /**
   * Checks if the number of elements of the iterable is less or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns True if the number of elements of the iterable is lesser or equal the threshold and false if it is not.
   */
  hasLessOrExactly(threshold: number): Promise<boolean>;

  /**
   * Checks if the number of elements of the iterable is more than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns A promise that resolves to true if the number of elements of the iterable is greater than the threshold and false if it is not.
   */
  hasMoreThan(threshold: number): Promise<boolean>;

  /**
   * Checks if the number of elements of the iterable is more or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns True if the number of elements of the iterable is greater or equal the threshold and false if it is not.
   */
  hasMoreOrExactly(threshold: number): Promise<boolean>;

  /**
   * Merge the iterable with the informed ones.
   * @param iterables The iterables to be merged
   * @returns A new iterable that returns the elements of all others in the order of which resolves first
   */
  merge<R>(...iterables: AsyncIterable<R>[]): FluentAsyncIterable<T | R>;

  /**
   * Merge the iterable with the informed ones, catching the errors of any of the iterables that fails, so the process can continue until all the successful iterables ends.
   * @param errorCallback A callback to be called if any of the iterables fail
   * @param iterables The iterables to be merged
   * @returns A new iterable that returns the elements of all others in the order of which resolves first
   */
  mergeCatching<R>(
    errorCallback: ErrorCallback,
    ...iterables: AsyncIterable<R>[]
  ): FluentAsyncIterable<T | R>;

  /**
   * Merge the iterable with the informed EventEmitter.
   *
   * **IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
   * emission generates a new yielded result. The default key event is **'data'**.
   *
   * Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
   * The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
   * to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.
   *
   * If you need to change the key event or other characteristics, you can do it through the **options** parameter
   * @param emitter The EventEmitter
   * @param options The EventEmitter options. Optional
   * @returns A new iterable that returns the elements of all others in the order of which resolves first
   */
  mergeEmitter<R>(
    emitter: EventEmitter,
    options?: FluentEmitOptions,
  ): FluentAsyncIterable<T | R>;

  /**
   * Merge the iterable with the informed EventEmitter, catching the errors of any of the iterables that fails, so the process can continue until all the successful iterables ends.
   *
   * **IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
   * emission generates a new yielded result. The default key event is **'data'**.
   *
   * Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
   * The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
   * to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.
   *
   * If you need to change the key event or other characteristics, you can do it through the **options** parameter
   * @param emitter The EventEmitter
   * @param errorCallback A callback to be called if any of the iterables fail
   * @param options The EventEmitter options. Optional
   * @returns A new iterable that returns the elements of all others in the order of which resolves first
   */
  mergeEmitterCatching<R>(
    errorCallback: ErrorCallback,
    emitter: EventEmitter,
    options?: FluentEmitOptions,
  ): FluentAsyncIterable<T | R>;

  /**
   * Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.
   * @param mapper The asynchronous function which projects the elements of the iterable into promises.
   * @returns a promises that resolves into an array with the result of all mappings.
   */
  waitAll<R>(mapper: AsyncMapper<T, R>): PromiseLike<R[]>;

  /**
   * Join the async iterable with another one, returning a new async iterable with a NxN combination
   * @param iterable The iterable to be combined
   */
  combine<U>(
    iterable: Iterable<U> | AsyncIterable<U>,
  ): FluentAsyncIterable<[T, U]>;

  /**
   * Join the async iterable with another one, returning a new async iterable with the inner matching combinations
   * @param iterable The right iterable to be combined
   * @param keyA A mapper that returns the key map value from the left iterable
   * @param keyB A mapper that returns the key map value from the right iterable
   */
  combine<U, K>(
    iterable: Iterable<U> | AsyncIterable<U>,
    keyA: Mapper<T, K>,
    keyB: Mapper<U, K>,
  ): FluentAsyncIterable<[T, U]>;

  /**
   * Converts the iterable into an EventEmitter. This is a resolving operation.
   *
   * This EventEmitter may emit three different events:
   *
   *
   * * data: for each item of the iterable;
   * * error: in case an error occurs. Notice that, if this method is not listened, the error will be thrown as unhandled;
   * * end: when the iterable ends. Notice that, if the iterable is infinite, this event will never be emitted.
   */
  emit(): FluentEmitter<T>;
}

/**
 * Represents a page of a paginated resource.
 * @typeparam T The type of the elements of the page.
 * @typeparam TToken The type of the next page token associated to the page.
 */
interface Page<T, TToken> {
  /**
   * The elements of the page.
   */
  results: T[];
  /**
   * The next page token associated to the page.
   */
  nextPageToken?: TToken;
}

/**
 * Represents a pager - responsible to retrieve pages from a paginated resource.
 * @typeparam T The type of the elements of the page.
 * @typeparam TToken The type of the next page token associated to the page.
 */
interface Pager<T, TToken> {
  /**
   * Retrieves a page from a paginated resource.
   * @param nextPageToken The token represents the page to retrieve or the first page if undefined.
   * @returns A promise of the page requested.
   */
  (nextPageToken?: TToken): Promise<Page<T, TToken> | undefined>;
}

/**
 * Represents a group of [[fluent]] items of type `T` with a key of type `R`.
 * @typeparam T The type of the items in the [[FluentGroup]].
 * @typeparam R The type of the key of the [[FluentGroup]].
 */
interface FluentGroup<T, R> extends Group<T, R> {
  /**
   * The [[fluent]] items in the [[FluentGroup]].
   */
  values: FluentIterable<T>;
}

export {
  Predicate,
  AsyncPredicate,
  Mapper,
  AsyncMapper,
  Reducer,
  AsyncReducer,
  Comparer,
  Action,
  AsyncAction,
  FluentGroup,
  Indexed,
  FluentIterable,
  FluentAsyncIterable,
  Page,
  Pager,
};
