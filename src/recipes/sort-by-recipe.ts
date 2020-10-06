import { valueTypeWrapper } from './../types-internal/string-wrapper';
import { isDescendingOrderAssured } from './../types-internal/order-assured';
import { FunctionAnyMapper } from './../types-internal/any-mapper';
import { ComparerIngredient } from './ingredients';
import { AnyMapper, keepOrderAssuring } from '../types-internal';
import { prepare } from '../types-internal/prepare';

function compareFunc(props: FunctionAnyMapper<any>[]) {
  return function (a: any, b: any) {
    let ret = 0;

    props.some(function (el) {
      const descending = isDescendingOrderAssured(el);
      const x = el(a);
      const y = el(b);

      if (x !== y) {
        ret =
          typeof x === 'string' && typeof y === 'string'
            ? x.localeCompare(y)
            : x < y
            ? -1
            : 1;

        if (ret !== 0) {
          if (descending) {
            ret *= -1;
          }
          return true;
        }
      }
      return false;
    });

    return ret;
  };
}

export function sortByRecipe(sort: ComparerIngredient) {
  return function <T>(this: Iterable<T>, ...props: AnyMapper<T>[]) {
    const comparer = compareFunc(
      props.map((x) => keepOrderAssuring(prepare(x), x)),
    );
    return sort.call(this, comparer);
  };
}
