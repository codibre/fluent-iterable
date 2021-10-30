import { KVGroupTransform } from '../types/base';
import { ItemType } from '../types';
import { Mapper } from 'augmentative-iterable';
import { prepare } from '../types-internal/prepare';
import { filter } from '../sync/filter';

/**
 * Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper
 * @param valueDistinctMapper must return the unicity key. The unicity is respected by group
 */

export function getGroupingDistinct<K, T>(
  valueDistinctMapper: keyof T,
): KVGroupTransform<K, T>;
/**
 * Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper
 * @param valueMapper maps the value for a Iterable of values. Useful if you need to flat map your values per group somehow
 * @param valueDistinctMapper must return the unicity key. The unicity is respected by group
 */
export function getGroupingDistinct<
  K,
  T,
  KT extends keyof T,
  NewT extends ItemType<T[KT]> = ItemType<T[KT]>,
>(
  valueMapper: KT,
  valueDistinctMapper: keyof ItemType<T[KT]>,
): KVGroupTransform<K, T, NewT>;
/**
 * Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper
 * @param valueDistinctMapper must return the unicity key. The unicity is respected by group
 */
export function getGroupingDistinct<K, T, NewT>(
  valueDistinctMapper: Mapper<T, NewT>,
): KVGroupTransform<K, T, NewT>;
/**
 * Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper
 * @param valueMapper maps the value for a Iterable of values. Useful if you need to flat map your values per group somehow
 * @param valueDistinctMapper must return the unicity key. The unicity is respected by group
 */
export function getGroupingDistinct<K, T, NewT = T[]>(
  valueMapper: Mapper<T, Iterable<NewT>>,
  valueDistinctMapper?: Mapper<NewT, unknown> | keyof NewT,
): KVGroupTransform<K, T, NewT>;
export function getGroupingDistinct<K, T, NewT = T[]>(
  baseValueMapper: any,
  baseValueDistinctMapper?: any,
): KVGroupTransform<K, T, NewT> {
  const groupMap = new Map<K, Set<unknown>>();
  if (!baseValueDistinctMapper) {
    baseValueDistinctMapper = baseValueMapper;
    baseValueMapper = (t: T) => [t];
  }
  const valueMapper = prepare(baseValueMapper);
  const valueDistinctMapper = prepare(baseValueDistinctMapper);

  return function (k: K, v: T) {
    let set = groupMap.get(k);
    if (!set) {
      set = new Set<unknown>();
      groupMap.set(k, set);
    }

    return filter.call(valueMapper(v), (nv: any) => {
      const kv = valueDistinctMapper(nv);
      const result = !set!.has(kv);
      if (result) {
        set!.add(kv);
      }

      return result;
    }) as Iterable<any>;
  };
}
