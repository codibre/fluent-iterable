import { KVGroupTransform } from '../types/base';
import { Mapper } from 'augmentative-iterable';
import { prepare } from '../types-internal/prepare';
import { AnyMapper } from '../types-internal';
import { identity } from './utils';

/**
 * Returns a functions that make the group operations get distinct items, according to a giving criteria,
 * keeping the preferred one, according to a given choosing criteria,
 * @param distinct must return the distinction key. The distinction is respected by group
 * @param choose must return the preferred value over two provided
 * @param mapper The property name you want to map for the value
 */
export function getGroupingTopHit<K, T, KT extends keyof T>(
  distinct: AnyMapper<T>,
  choose: (a: T[KT], b: T[KT]) => T[KT],
  mapper: KT,
): KVGroupTransform<K, T, T[KT][]>;
/**
 * Returns a functions that make the group operations get distinct items, according to a giving criteria,
 * keeping the preferred one, according to a given choosing criteria,
 * @param distinct must return the distinction key. The distinction is respected by group
 * @param choose must return the preferred value over two provided
 * @param mapper If informed, the mapping operation to define the grouping value. If not, the original value is assumed
 */
export function getGroupingTopHit<K, T, NewT = T>(
  distinct: AnyMapper<T>,
  choose: (a: NewT, b: NewT) => NewT,
  mapper?: Mapper<T, NewT>,
): KVGroupTransform<K, T, NewT[]>;
export function getGroupingTopHit<K, T, NewT = T>(
  distinct: AnyMapper<T>,
  choose: (a: NewT, b: NewT) => NewT,
  mapper: Mapper<T, NewT> | keyof T = identity as any,
): KVGroupTransform<K, T, NewT> {
  const groupMap = new Map<K, Map<unknown, [NewT, number]>>();
  const preparedDistinct = prepare(distinct);
  const preparedMapper = prepare(mapper);

  return function (k: K, v: T, previous: NewT[]) {
    let chosenMap = groupMap.get(k);
    if (!chosenMap) {
      chosenMap = new Map();
      groupMap.set(k, chosenMap);
    }
    const mapped = preparedMapper(v);
    const chosenKey = preparedDistinct(v);
    const prev = chosenMap.get(chosenKey);
    if (prev) {
      const chosen = choose(prev[0], mapped);
      if (chosen !== prev[0]) {
        previous[prev[1]] = chosen;
      }
      return [];
    }
    chosenMap.set(chosenKey, [mapped, previous.length]);

    return [mapped];
  };
}
