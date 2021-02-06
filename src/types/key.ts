import { AsyncMapper, Mapper, AnyIterable } from 'augmentative-iterable';
import { FluentGroup } from './fluent-iterable';
import { Comparer, Reducer, AsyncReducer, KVGroupTransform } from './base';
import { FluentAsyncIterable } from './fluent-async-iterable';

/**
 * Represents the type of the item of an iterable
 */
export type ItemType<T> = T extends Iterable<infer R> ? R : never;

/**
 * Represents the type of the item of an iterable or an async iterable
 */
export type AsyncItemType<T> = T extends AnyIterable<infer R> ? R : never;

export type ToObjectKeyType<T, R1 extends keyof T> = T[R1] extends
  | string
  | number
  | symbol
  ? T[R1]
  : any;

declare module './fluent-iterable' {
  /**
   * Represents an iterable extended with common processing and mutating capabilities.<br>
   *   The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.
   * @typeparam T The type of the items in the iterable.
   */
  interface FluentIterable<T> {
    /**
     * Returns elements from the iterable as long as a specified condition is met.<br>
     *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).takeWhile(word => word[0] === 'a')` yields *anchor* and *almond*.
     * @param condition A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.
     * @returns A [[FluentIterable]] of the elements until the condition is met.
     */
    takeWhile(condition: keyof T): FluentIterable<T>;

    /**
     * Returns elements from the iterable as long as a specified asynchronous condition is met.
     * @param condition An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.
     * @returns A [[FluentAsyncIterable]] of the elements until the condition is met.
     */
    takeWhileAsync(condition: keyof T): FluentAsyncIterable<T>;

    /**
     * Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.<br>
     *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skipWhile(word => word[0] === 'a')` yields *bound* and *alpine*.
     * @param condition A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.
     * @returns A [[FluentIterable]] of the elements after the condition is not met.
     */
    skipWhile(condition: keyof T): FluentIterable<T>;

    /**
     * Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.
     * @param condition An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.
     * @returns A [[FluentAsyncIterable]] of the elements after the condition is not met.
     */
    skipWhileAsync(condition: keyof T): FluentAsyncIterable<T>;

    /**
     * Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.<br>
     *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).map(word => word.toUpperCase())` yields *ANCHOR*, *ALMOND*, *BOUND* and *ALPINE*.
     * @typeparam R The destination type of the mapping.
     * @param mapper The operation which maps an instance of `T` into an instance of `R`.
     * @returns A [[FluentIterable]] of the mapped elements.
     */
    map<R extends keyof T>(mapper: R): FluentIterable<T[R]>;

    /**
     * Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.
     * @typeparam R The destination type of the mapping.
     * @param mapper The asynchronous operation which maps an instance of `T` into an instance of `R`.
     * @returns A [[FluentAsyncIterable]] of the mapped elements.
     */
    mapAsync<R extends keyof T>(mapper: R): FluentAsyncIterable<T[R]>;

    /**
     * Filters the iterable of `T` based on a predicate.<br>
     *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.
     * @param predicate A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
     * @returns A [[FluentIterable]] of the elements against which the predicate evaluates to `true`.
     */
    filter(predicate: keyof T): FluentIterable<T>;

    /**
     * Filters the iterable of `T` based on an asynchronous predicate.
     * @param predicate An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
     * @returns A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.
     */
    filterAsync(predicate: keyof T): FluentAsyncIterable<T>;

    /**
     * Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
     * Examples:<br>
     *   * `fluent([['anchor', 'almond'], ['bound', 'alpine']]).flatten()` yields *anchor*, *almond*, *bound* and *alpine*.<br>
     * @typeparam R The type of the elements in the inner iterable.
     * @returns The [[FluentIterable]] of the flattened iterable.
     */
    flatten<R extends ItemType<T>>(): FluentIterable<R>;

    /**
     * Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
     * Examples:<br>
     *   * `fluent([ { values: ['anchor', 'almond'] }, { values: ['bound', 'alpine'] }]).flatten(obj => obj.values)` yields *anchor*, *almond*, *bound* and *alpine*.
     * @typeparam R The type of the elements in the inner iterable.
     * @param mapper Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted.
     * @returns The [[FluentIterable]] of the flattened iterable.
     */
    flatten<K extends keyof T, R extends ItemType<T[K]>>(
      mapper: K,
    ): FluentIterable<R>;

    /**
     * Asynchronously projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.
     * @typeparam R The type of the elements in the inner iterable.
     * @param mapper Specifies the asynchronous projection from the elements of `T` to iterables of `R`.
     * @returns The flattened [[FluentAsyncIterable]].
     */
    flattenAsync<K extends keyof T, R extends AsyncItemType<T[K]>>(
      mapper?: K,
    ): FluentAsyncIterable<R>;

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
    distinct<R extends keyof T>(
      mapper?: R,
      maxOcurrences?: number,
    ): FluentIterable<T>;

    /**
     * Returns distinct elements from the iterable from a certain asynchronous projections perspective.
     * @typeparam R The type of the data the element equality is based on.
     * @param mapper The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.
     * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
     * @returns The [[FluentAsyncIterable]] of the distinct elements.
     */
    distinctAsync<R extends keyof T>(
      mapper: R,
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
    isDistinct<R extends keyof T>(mapper?: R, maxOcurrences?: number): boolean;

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
    isDistinctAsync<R extends keyof T>(
      mapper: R,
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
    group<R extends keyof T, V = T>(
      mapper: R,
      transformValue?: KVGroupTransform<R, T, V>,
    ): FluentIterable<FluentGroup<V, T[R]>>;

    /**
     * Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.
     * @typeparam R The type of the groups key.
     * @param mapper Asynchronously projects the elements of the iterable into the group key they belong to.
     * @param transformValue Optional. Allows a transformation before adding the value to the group. The return must be an iterable
     * @returns The [[FluentAsyncIterable]] of the distinct groups.
     */
    groupAsync<R extends keyof T, V = T>(
      mapper: R,
      transformValue?: KVGroupTransform<R, T, V>,
    ): FluentAsyncIterable<FluentGroup<V, T[R]>>;

    /**
     * Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
     *   Examples:<br>
     *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).count()` returns **4**<br>
     *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).count(word => word[0] === 'a')` returns **3**
     * @param predicate The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted.
     * @returns The number of elements matching the specified predicate.
     */
    count(predicate: keyof T): number;

    /**
     * Returns the number of elements that matches an asynchronous predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param predicate The count will consider elements which match this asynchronous predicate.
     * @returns A promise of the number of elements matching the specified predicate.
     */
    countAsync(predicate: keyof T): Promise<number>;

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
    first(predicate: keyof T): T | undefined;

    /**
     * Returns the first element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
     * @param predicate The first element is to be returned which matches this asynchronous predicate.
     * @returns A promise of the first element matching the specified predicate, or `undefined` if no such element found.
     */
    firstAsync(predicate: keyof T): Promise<T | undefined>;

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
    last(predicate: keyof T): T | undefined;

    /**
     * Returns the last element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param predicate The last element is to be returned which matches this asynchronous predicate.
     * @returns A promise of the last element matching the specified predicate, or `undefined` if no such element found.
     */
    lastAsync(predicate: keyof T): Promise<T | undefined>;

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
    reduceAndMap<A, R extends keyof A>(
      reducer: Reducer<T, A>,
      initial: A,
      result: R,
    ): A[R];

    /**
     * Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified asynchronous map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @typeparam A The type of the accumulator value.
     * @typeparam R The type of the aggregation result.
     * @param reducer The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.
     * @param initial The initial (aka *seed*) value of the accumulator.
     * @param result The asynchronous mapping function, projects the accumulator value of type `A` to the result value of type `R`.
     * @returns A promise of the aggregated value.
     */
    reduceAndMapAsync<A, R extends keyof A>(
      reducer: AsyncReducer<T, A>,
      initial: A,
      result: R,
    ): Promise<A[R]>;

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
    all(predicate: keyof T): boolean;

    /**
     * Determines whether all elements of the iterable satisfy an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
     *   Note: This operation stops reading elements from the iterable as soon as the result can be determined.
     * @param predicate The asynchronous condition checked for all elements in the iterable.
     * @returns A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.
     */
    allAsync(predicate: keyof T): Promise<boolean>;

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
    any(predicate: keyof T): boolean;

    /**
     * Determines whether any element of the iterable exists or satisfies an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
     *   Note: This operation stops reading elements from the iterable as soon as the result can be determined.
     * @param predicate The asynchronous condition checked for the elements in the iterable.
     * @returns A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.
     */
    anyAsync(predicate: keyof T): Promise<boolean>;

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
    toObject<R1 extends keyof T, R = T[R1]>(
      keySelector: R1,
      valueSelector?: Mapper<T, R>,
    ): { [key in ToObjectKeyType<T, R1>]: R };

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
    toObject<K extends string | symbol | number, R2 extends keyof T>(
      keySelector: Mapper<T, K>,
      valueSelector: R2,
    ): { [key in K]: T[R2] };

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
    toObject<R1 extends keyof T, R2 extends keyof T>(
      keySelector: R1,
      valueSelector: R2,
    ): { [key in ToObjectKeyType<T, R1>]: T[R2] };

    /**
     * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
     * @param keySelector Asynchronously projects an element of the iterable into the key of the corresponding field.
     * @param valueSelector Asynchronously projects an element of the iterable into the value of the corresponding field.
     * @returns A promise of the object composed of the elements of the iterable as fields.
     */
    toObjectAsync<R1 extends keyof T, R = T[R1]>(
      keySelector: R1,
      valueSelector?: AsyncMapper<T, R>,
    ): Promise<{ [key in ToObjectKeyType<T, R1>]: R }>;
    /**
     * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
     * @param keySelector Asynchronously projects an element of the iterable into the key of the corresponding field.
     * @param valueSelector Asynchronously projects an element of the iterable into the value of the corresponding field.
     * @returns A promise of the object composed of the elements of the iterable as fields.
     */
    toObjectAsync<K extends string | symbol | number, R2 extends keyof T>(
      keySelector: AsyncMapper<T, K>,
      valueSelector: R2,
    ): Promise<{ [key in K]: T[R2] }>;

    /**
     * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
     * @param keySelector Asynchronously projects an element of the iterable into the key of the corresponding field.
     * @param valueSelector Asynchronously projects an element of the iterable into the value of the corresponding field.
     * @returns A promise of the object composed of the elements of the iterable as fields.
     */
    toObjectAsync<R1 extends keyof T, R2 extends keyof T>(
      keySelector: R1,
      valueSelector: R2,
    ): Promise<{ [key in ToObjectKeyType<T, R1>]: T[R2] }>;

    /**
     * Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
     *   Examples:<br>
     *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).join(', ')` returns *anchor, almond, bound, alpine*
     * @param separator The separator to use in between the elements of the iterable.
     * @param mapper The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.
     * @returns The concatenated string of the elements in the iterable.
     */
    join(separator: string, mapper?: keyof T): string;

    /**
     * Asynchronously projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param separator The separator to use in between the elements of the iterable.
     * @param mapper The function which asynchronously projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.
     * @returns A promise of the concatenated string of the elements in the iterable.
     */
    joinAsync(separator: string, mapper: keyof T): Promise<string>;

    /**
     * Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
     *   Examples:<br>
     *     * `fluent([5, -2, 9]).sum()` returns *12*
     *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).sum(word => word.length)` returns *23*, the sum of length of all the words in the iterable
     * @param mapper The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
     * @returns The sum of the projected elements of the iterable.
     */
    sum(mapper: keyof T): number;

    /**
     * Calculates the sum of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param mapper The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
     * @returns A promise of the sum of the projected elements of the iterable.
     */
    sumAsync(mapper: keyof T): Promise<number>;

    /**
     * Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
     *   Examples:<br>
     *     * `fluent([5, -2, 9]).avg()` returns *4*
     *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).avg(word => word.length)` returns *5.75*, the average of the length of all the words in the iterable
     * @param mapper The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
     * @returns The average of the projected elements of the iterable.
     */
    avg(mapper: keyof T): number;

    /**
     * Calculates the average of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param mapper The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
     * @returns A promise of the average of the projected elements of the iterable.
     */
    avgAsync(mapper: keyof T): Promise<number>;

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
    top<R extends keyof T>(mapper: R, comparer: Comparer<T[R]>): T | undefined;

    /**
     * Calculates the top element of the iterable using an asynchronous projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @typeparam R The type of the projected elements used for comparison.
     * @param mapper The asynchronous function which projects the elements of the iterable into comparable.
     * @param comparer The comparison function.
     * @returns A promise of the top of the iterable's projected elements.
     */
    topAsync<R extends keyof T>(
      mapper: T,
      comparer: Comparer<T[R]>,
    ): Promise<T | undefined>;

    /**
     * Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
     *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).min(word => word.length)` returns *bound*, the shortest word in the iterable
     * @param mapper The function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.
     * @returns The minimum of the iterable's projected elements.
     */
    min<R extends keyof T>(mapper: R): T | undefined;

    /**
     * Finds the numeric minimum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param mapper The asynchronous function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.
     * @returns A promise of the minimum of the iterable's projected elements.
     */
    minAsync<R extends keyof T>(mapper: R): Promise<T | undefined>;

    /**
     * Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
     *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).max(word => word.charCodeAt(0))` returns *bound*, since it begins with the character 'b' which has a highest character code than character 'a' with which all the other words begins with
     * @param mapper The function which projects the elements of the iterable into comparable values. Falls back to the identity function if omitted.
     * @returns The maximum of the iterable's projected elements.
     */
    max<R extends keyof T>(mapper?: R): T | undefined;

    /**
     * Finds the numeric maximum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param mapper The function which asynchronously projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted.
     * @returns A promise of the maximum of the iterable's projected elements.
     */
    maxAsync<R extends keyof T>(mapper?: R): Promise<T | undefined>;

    /**
     * Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.
     * @param mapper The asynchronous function which projects the elements of the iterable into promises.
     * @returns a promises that resolves into an array with the result of all mappings.
     */
    waitAll<R extends keyof T>(mapper: R): PromiseLike<T[R][]>;

    /**
     * Join the iterable with another one, returning a new iterable with the inner matching combinations
     * @param iterable The right iterable to be combined
     * @param keyA A mapper that returns the key map value from the left iterable
     * @param keyB A mapper that returns the key map value from the right iterable
     */
    combine<U, K>(
      iterable: Iterable<U>,
      keyA: keyof T,
      keyB: Mapper<U, K>,
    ): FluentIterable<[T, U]>;

    /**
     * Join the iterable with another one, returning a new iterable with the inner matching combinations
     * @param iterable The right iterable to be combined
     * @param keyA A mapper that returns the key map value from the left iterable
     * @param keyB A mapper that returns the key map value from the right iterable
     */
    combine<U, K>(
      iterable: Iterable<U>,
      keyA: Mapper<T, K>,
      keyB: keyof U,
    ): FluentIterable<[T, U]>;

    /**
     * Join the iterable with another one, returning a new iterable with the inner matching combinations
     * @param iterable The right iterable to be combined
     * @param keyA A mapper that returns the key map value from the left iterable
     * @param keyB A mapper that returns the key map value from the right iterable
     */
    combine<U>(
      iterable: Iterable<U>,
      keyA: keyof T,
      keyB: keyof U,
    ): FluentIterable<[T, U]>;

    /**
     * Join the iterable with another one, returning a new async iterable with the inner matching combinations
     * @param iterable The right iterable to be combined
     * @param keyA A mapper that returns the key map value from the left iterable
     * @param keyB A mapper that returns the key map value from the right iterable
     */
    combineAsync<U, K>(
      iterable: AsyncIterable<U>,
      keyA: keyof T,
      keyB: Mapper<U, K>,
    ): FluentAsyncIterable<[T, U]>;

    /**
     * Join the iterable with another one, returning a new async iterable with the inner matching combinations
     * @param iterable The right iterable to be combined
     * @param keyA A mapper that returns the key map value from the left iterable
     * @param keyB A mapper that returns the key map value from the right iterable
     */
    combineAsync<U, K>(
      iterable: AsyncIterable<U>,
      keyA: Mapper<T, K>,
      keyB: keyof U,
    ): FluentAsyncIterable<[T, U]>;

    /**
     * Join the iterable with another one, returning a new async iterable with the inner matching combinations
     * @param iterable The right iterable to be combined
     * @param keyA A mapper that returns the key map value from the left iterable
     * @param keyB A mapper that returns the key map value from the right iterable
     */
    combineAsync<U>(
      iterable: AsyncIterable<U>,
      keyA: keyof T,
      keyB: keyof U,
    ): FluentAsyncIterable<[T, U]>;
  }
}

declare module './fluent-async-iterable' {
  /**
   * Represents an asynchronous iterable extended with common processing and mutating capabilities.<br>
   *   The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.
   * @typeparam T The type of the items in the asynchronous iterable.
   */
  interface FluentAsyncIterable<T> {
    /**
     * Returns elements from the iterable as long as a specified condition is met.
     * @param condition A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.
     * @returns A [[FluentAsyncIterable]] of the elements until the condition is met.
     */
    takeWhile(condition: keyof T): FluentAsyncIterable<T>;

    /**
     * Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.
     * @param condition A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.
     * @returns A [[FluentAsyncIterable]] of the elements after the condition is not met.
     */
    skipWhile(condition: keyof T): FluentAsyncIterable<T>;

    /**
     * Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.
     * @typeparam R The destination type of the mapping.
     * @param mapper The operation which maps an instance of `T` into an instance of `R`.
     * @returns A [[FluentAsyncIterable]] of the mapped elements.
     */
    map<R extends keyof T>(mapper: R): FluentAsyncIterable<T[R]>;

    /**
     * Filters the iterable of `T` based on a predicate.
     * @param predicate A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
     * @returns A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.
     */
    filter(predicate: keyof T): FluentAsyncIterable<T>;

    /**
     * Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
     * Examples:<br>
     *   * `fluent([['anchor', 'almond'], ['bound', 'alpine']]).flatten()` yields *anchor*, *almond*, *bound* and *alpine*.<br>
     * @typeparam R The type of the elements in the inner iterable.
     * @returns The [[FluentAsyncIterable]] of the flattened iterable.
     */
    flatten<R extends AsyncItemType<T>>(): FluentAsyncIterable<R>;

    /**
     * Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.
     * @typeparam R The type of the elements in the inner iterable.
     * @param mapper Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted.
     * @returns The [[FluentAsyncIterable]] of the flattened iterable.
     */
    flatten<K extends keyof T, R extends AsyncItemType<T[K]>>(
      mapper?: K,
    ): FluentAsyncIterable<R>;

    /**
     * Returns distinct elements from the iterable from a certain projections perspective.
     * @typeparam R The type of the data the element equality is based on.
     * @param mapper The projection to use to determine element equality. Identity mapping is used if omitted.
     * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
     * @returns The [[FluentAsyncIterable]] of the distinct elements.
     */
    distinct(mapper: keyof T, maxOcurrences?: number): FluentAsyncIterable<T>;

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
    isDistinct(mapper: keyof T, maxOcurrences?: number): Promise<boolean>;

    /**
     * Groups the elements of the iterable keyed by equality of data at the specified projection.
     * @typeparam R The type of the groups' key.
     * @param mapper Projects the elements of the iterable into the group key they belong to.
     * @param distinct Optional. Defines a unicity key, considered by grouped list. If not informed, no unicity is applied
     * @returns The [[FluentAsyncIterable]] of the distinct groups.
     */
    group<R extends keyof T, V = T>(
      mapper: R,
      transformValue?: KVGroupTransform<R, T, V>,
    ): FluentAsyncIterable<FluentGroup<V, T[R]>>;

    /**
     * Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param predicate The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted.
     * @returns A promise of the number of elements matching the specified predicate.
     */
    count(predicate: keyof T): Promise<number>;

    /**
     * Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
     * @param predicate The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted.
     * @returns A promise of the first element matching the specified predicate, or `undefined` if no such element found.
     */
    first(predicate: keyof T): Promise<T | undefined>;

    /**
     * Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param predicate The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted.
     * @returns A promise of the last element matching the specified predicate, or `undefined` if no such element found.
     */
    last(predicate: keyof T): Promise<T | undefined>;

    /**
     * Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @typeparam A The type of the accumulator value.
     * @typeparam R The type of the aggregation result.
     * @param reducer The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.
     * @param initial The initial (aka *seed*) value of the accumulator.
     * @param result The mapping function, projects the accumulator value of type `A` to the result value of type `R`.
     * @returns A promise of the aggregated value.
     */
    reduceAndMap<A, R extends keyof A>(
      reducer: AsyncReducer<T, A>,
      initial: A,
      result: R,
    ): Promise<A[R]>;

    /**
     * Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
     * @param predicate The condition checked for all elements in the iterable.
     * @returns A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.
     */
    all(predicate: keyof T): Promise<boolean>;

    /**
     * Determines whether any element of the iterable exists or satisfies a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
     * @param predicate The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty.
     * @returns A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.
     */
    any(predicate: keyof T): Promise<boolean>;

    /**
     * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
     * @param keySelector Projects an element of the iterable into the key of the corresponding field.
     * @param valueSelector Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.
     * @returns A promise of the object composed of the elements of the iterable as fields.
     */
    toObject<R1 extends keyof T, R = T[R1]>(
      keySelector: R1,
      valueSelector?: AsyncMapper<T, R>,
    ): Promise<{ [key in R1]: R }>;

    /**
     * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
     * @param keySelector Projects an element of the iterable into the key of the corresponding field.
     * @param valueSelector Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.
     * @returns A promise of the object composed of the elements of the iterable as fields.
     */
    toObject<K extends string | symbol | number, R2 extends keyof T>(
      keySelector: AsyncMapper<T, K>,
      valueSelector: R2,
    ): Promise<{ [key in K]: R2 }>;

    /**
     * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
     * @param keySelector Projects an element of the iterable into the key of the corresponding field.
     * @param valueSelector Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.
     * @returns A promise of the object composed of the elements of the iterable as fields.
     */
    toObject<R1 extends keyof T, R2 extends keyof T>(
      keySelector: R1,
      valueSelector: R2,
    ): Promise<{ [key in R1]: R2 }>;

    /**
     * Iterates through the iterable and executes an action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param action A promise of the action to execute against each element.
     */
    forEach(mapper: keyof T): Promise<void>;

    /**
     * Translate an iterable into one which executes an action against each element before yield them.
     * @param action The action to execute against each element.
     * @returns The [[FluentAsyncIterable]] with the action injected to it.
     */
    execute(action: keyof T): FluentAsyncIterable<T>;

    /**
     * Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param separator The separator to use in between the elements of the iterable.
     * @param mapper The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.
     * @returns A promise of the concatenated string of the elements in the iterable.
     */
    join(separator: string, mapper: keyof T): Promise<string>;

    /**
     * Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param mapper The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
     * @returns A promise of the sum of the projected elements of the iterable.
     */
    sum(mapper: keyof T): Promise<number>;

    /**
     * Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param mapper The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
     * @returns A promise of the average of the projected elements of the iterable.
     */
    avg(mapper: keyof T): Promise<number>;

    /**
     * Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @typeparam R The type of the projected elements used for comparison.
     * @param mapper The function which projects the elements of the iterable into comparable.
     * @param comparer The comparison function.
     * @returns A promise of the top of the iterable's projected elements.
     */
    top<R extends keyof T>(
      mapper: R,
      comparer: Comparer<T[R]>,
    ): Promise<T | undefined>;

    /**
     * Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param mapper The function which projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted.
     * @returns A promise of the minimum of the iterable's projected elements.
     */
    min(mapper: keyof T): Promise<T | undefined>;

    /**
     * Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.
     * @param mapper The function which projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted.
     * @returns A promise of the maximum of the iterable's projected elements.
     */
    max(mapper: keyof T): Promise<T | undefined>;

    /**
     * Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.
     * @param mapper The asynchronous function which projects the elements of the iterable into promises.
     * @returns a promises that resolves into an array with the result of all mappings.
     */
    waitAll<R extends keyof T>(mapper: R): PromiseLike<T[R][]>;

    /**
     * Join the async iterable with another one, returning a new async iterable with the inner matching combinations
     * @param iterable The right iterable to be combined
     * @param keyA A mapper that returns the key map value from the left iterable
     * @param keyB A mapper that returns the key map value from the right iterable
     */
    combine<U, K>(
      iterable: Iterable<U> | AsyncIterable<U>,
      keyA: keyof T,
      keyB: Mapper<U, K>,
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
      keyB: keyof U,
    ): FluentAsyncIterable<[T, U]>;

    /**
     * Join the async iterable with another one, returning a new async iterable with the inner matching combinations
     * @param iterable The right iterable to be combined
     * @param keyA A mapper that returns the key map value from the left iterable
     * @param keyB A mapper that returns the key map value from the right iterable
     */
    combine<U>(
      iterable: Iterable<U> | AsyncIterable<U>,
      keyA: keyof T,
      keyB: keyof U,
    ): FluentAsyncIterable<[T, U]>;
  }
}
