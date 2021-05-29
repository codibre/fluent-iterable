import { KVGroupTransform } from '../types/base';
import { Mapper } from 'augmentative-iterable';
import { prepare } from '../types-internal/prepare';
import { AnyMapper, FunctionAnyMapper } from '../types-internal';
import { constant, identity } from './utils';

type Choose<T> = (a: T, b: T) => T;
const noDistinct = constant(1);

/**
 * Returns a functions that make the group operations to get only one item, per group key,
 * The item kept is the preferred one, according to a given choosing criteria,
 * @param choose must return the preferred value over two provided
 */
export function getGroupingTopHit<K, T>(
  choose: Choose<T>,
): KVGroupTransform<K, T>;
/**
 * Returns a functions that make the group operations get distinct items, according to a giving criteria,
 * keeping the preferred one, according to a given choosing criteria,
 * @param distinct must return the distinction key. The distinction is respected by group
 * @param choose must return the preferred value over two provided
 * @param mapper The property name you want to map for the value
 */
export function getGroupingTopHit<K, T, KT extends keyof T>(
  distinct: AnyMapper<T>,
  choose: Choose<T[KT]>,
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
  choose: Choose<NewT>,
  mapper?: Mapper<T, NewT>,
): KVGroupTransform<K, T, NewT>;
export function getGroupingTopHit<K, T, NewT = T>(
  distinct: AnyMapper<T> | Choose<NewT>,
  choose?: Choose<NewT>,
  mapper: Mapper<T, NewT> | keyof T = identity as any,
): KVGroupTransform<K, T, NewT> {
  const preparedMapper: FunctionAnyMapper<T> = prepare(mapper);
  let preparedDistinct: FunctionAnyMapper<T>;
  if (!choose) {
    preparedDistinct = noDistinct;
    choose = distinct as Choose<NewT>;
    const chosenMap = new Map<K, [NewT, number]>();
    return function (k: K, v: T, previous: NewT[]) {
      const mapped = preparedMapper(v);
      const prev = chosenMap.get(k);
      if (!prev) {
        chosenMap.set(k, [mapped, previous.length]);
        return [mapped];
      }
      const chosen = choose!(prev[0], mapped);
      if (chosen !== prev[0]) {
        chosenMap.set(k, [chosen, prev[1]]);
        previous[prev[1]] = chosen;
      }
    };
  }
  preparedDistinct = prepare(distinct as AnyMapper<T>);
  const groupMap = new Map<K, Map<unknown, [NewT, number]>>();

  return function (k: K, v: T, previous: NewT[]) {
    let chosenMap = groupMap.get(k);
    if (!chosenMap) {
      chosenMap = new Map();
      groupMap.set(k, chosenMap);
    }
    const mapped = preparedMapper(v);
    const chosenKey = preparedDistinct(v);
    const prev = chosenMap.get(chosenKey);
    if (!prev) {
      chosenMap.set(chosenKey, [mapped, previous.length]);
      return [mapped];
    }
    const chosen = choose!(prev[0], mapped);
    if (chosen !== prev[0]) {
      chosenMap.set(chosenKey, [chosen, prev[1]]);
      previous[prev[1]] = chosen;
    }
  };
}
