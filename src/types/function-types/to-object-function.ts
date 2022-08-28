import { AsyncMapper, Mapper } from 'augmentative-iterable';
import { ToObjectKeyType } from '../base';
import { Choose } from '../choose';

export type ObjectType<R extends string | symbol | number> = {
  [k in R]: unknown;
};

export type KeyType = string | symbol | number;

export interface ToObjectFunction<T> {
  /**
   * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
   *     * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`
   * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
   * @param keySelector Projects an element of the iterable into the key of the corresponding field.
   * @returns The object composed of the elements of the iterable as fields.
   */
  <R extends KeyType>(keySelector: Mapper<T, R>): Record<R, T>;

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
  <R extends KeyType, O>(
    keySelector: Mapper<T, R>,
    valueSelector: Mapper<T, O>,
    reduceValue?: Choose<O>,
  ): Record<R, O>;

  /**
   * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
   * @param keySelector Projects an element of the iterable into the key of the corresponding field.
   * @returns The object composed of the elements of the iterable as fields.
   */
  <R1 extends keyof T>(keySelector: R1): Record<ToObjectKeyType<T, R1>, T>;

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
  <R1 extends keyof T, R>(
    keySelector: R1,
    valueSelector: Mapper<T, R>,
    reduceValue?: Choose<R>,
  ): Record<ToObjectKeyType<T, R1>, R>;

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
  <K extends string | symbol | number, R2 extends keyof T>(
    keySelector: Mapper<T, K>,
    valueSelector: R2,
    reduceValue?: Choose<T[R2]>,
  ): Record<K, T[R2]>;

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
  <R1 extends keyof T, R2 extends keyof T>(
    keySelector: R1,
    valueSelector: R2,
    reduceValue?: Choose<T[R2]>,
  ): Record<ToObjectKeyType<T, R1>, T[R2]>;
}

export interface AsyncToObjectFunction<T> {
  /**
   * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
   * @param keySelector Asynchronously projects an element of the iterable into the key of the corresponding field.
   * @returns A promise of the object composed of the elements of the iterable as fields.
   */
  <R extends KeyType>(keySelector: AsyncMapper<T, R>): Promise<Record<R, T>>;

  /**
   * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
   * @param keySelector Asynchronously projects an element of the iterable into the key of the corresponding field.
   * @param valueSelector Asynchronously projects an element of the iterable into the value of the corresponding field.
   * @param reduceValue reduce the following items to the map value type. If not informed, assumes only the first value
   * @returns A promise of the object composed of the elements of the iterable as fields.
   */
  <K extends KeyType, V>(
    keySelector: AsyncMapper<T, K>,
    valueSelector: AsyncMapper<T, V>,
    reduceValue?: Choose<V>,
  ): Promise<Record<K, V>>;

  /**
   * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
   * @param keySelector Asynchronously projects an element of the iterable into the key of the corresponding field.
   * @returns A promise of the object composed of the elements of the iterable as fields.
   */
  <R1 extends keyof T>(keySelector: R1): Promise<
    Record<ToObjectKeyType<T, R1>, T>
  >;

  /**
   * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
   * @param keySelector Asynchronously projects an element of the iterable into the key of the corresponding field.
   * @param valueSelector Asynchronously projects an element of the iterable into the value of the corresponding field.
   * @param reduceValue reduce the following items to the map value type. If not informed, assumes only the first value
   * @returns A promise of the object composed of the elements of the iterable as fields.
   */
  <R1 extends keyof T, R>(
    keySelector: R1,
    valueSelector: AsyncMapper<T, R>,
    reduceValue?: Choose<R>,
  ): Promise<Record<ToObjectKeyType<T, R1>, R>>;
  /**
   * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
   * @param keySelector Asynchronously projects an element of the iterable into the key of the corresponding field.
   * @param valueSelector Asynchronously projects an element of the iterable into the value of the corresponding field.
   * @param reduceValue reduce the following items to the map value type. If not informed, assumes only the first value
   * @returns A promise of the object composed of the elements of the iterable as fields.
   */
  <K extends string | symbol | number, R2 extends keyof T>(
    keySelector: AsyncMapper<T, K>,
    valueSelector: R2,
    reduceValue?: Choose<T[R2]>,
  ): Promise<Record<K, T[R2]>>;

  /**
   * Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The expected type of the object. Cannot be enforced, this is strictly informal.
   * @param keySelector Asynchronously projects an element of the iterable into the key of the corresponding field.
   * @param valueSelector Asynchronously projects an element of the iterable into the value of the corresponding field.
   * @param reduceValue reduce the following items to the map value type. If not informed, assumes only the first value
   * @returns A promise of the object composed of the elements of the iterable as fields.
   */
  <R1 extends keyof T, R2 extends keyof T>(
    keySelector: R1,
    valueSelector: R2,
    reduceValue?: Choose<T[R2]>,
  ): Promise<Record<ToObjectKeyType<T, R1>, T[R2]>>;
}
