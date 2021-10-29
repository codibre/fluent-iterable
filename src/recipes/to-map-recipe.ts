import { AnyIterable } from 'augmentative-iterable';
import {
  AnyMapper,
  FunctionAnyMapper,
  isAnyOrderAssured,
} from '../types-internal';
import { DistinctIngredients } from './ingredients';
import { orderedOperationRecipe } from './ordered-operation-recipe';
import { prepare } from '../types-internal/prepare';
import { Choose } from '../types';

const nonChosen = Symbol('nonChosen');

function orderedToMapRecipe({
  forEach,
  map,
  resolver,
  partition,
  reduce,
}: DistinctIngredients) {
  const ordered = orderedOperationRecipe(map, resolver, partition);
  return function distinct<T>(
    this: AnyIterable<T>,
    getKey: FunctionAnyMapper<any>,
    mapper: FunctionAnyMapper<any>,
    choose: Choose<T>,
  ) {
    const partitioned = ordered.call(this, getKey);
    const result = new Map();
    return resolver(
      forEach.call(partitioned, (x) =>
        resolver(
          reduce.call(
            x,
            (acc: any, [k, v]) => {
              if (acc === nonChosen) {
                return [k, mapper(v)];
              }
              const newV = choose(acc[1], v);
              if (newV !== acc[1]) {
                acc[1] = newV;
              }
              return acc;
            },
            nonChosen,
          ),
          ([k, v]) => result.set(k, v),
        ),
      ),
      () => result,
    );
  };
}

export function chooseToMapRecipe({ forEach, resolver }: DistinctIngredients) {
  return function distinct<T>(
    this: AnyIterable<T>,
    getKey: FunctionAnyMapper<any>,
    mapper: FunctionAnyMapper<any>,
    choose: Choose<T>,
  ) {
    const map = new Map();
    return resolver(
      forEach.call(this, (x) => {
        const k = getKey(x);
        const old = map.get(k);
        const newOne = old === undefined ? mapper(x) : choose(old, x);
        if (old !== newOne) {
          map.set(k, newOne);
        }
      }),
      () => map,
    );
  };
}

export function toMapRecipe(ingredients: DistinctIngredients) {
  const ordered = orderedToMapRecipe(ingredients);
  const choose = chooseToMapRecipe(ingredients);

  return function distinct<T>(
    this: AnyIterable<T>,
    getKey: AnyMapper<T>,
    mapper: AnyMapper<T>,
    getReduced?: Choose<T>,
  ) {
    const preparedGetKey = prepare(getKey);
    const preparedMapper = prepare(mapper);
    if (isAnyOrderAssured(preparedGetKey, this)) {
      return ordered.call(
        this,
        preparedGetKey,
        preparedMapper,
        getReduced as Choose<unknown>,
      );
    }

    return choose.call(
      this,
      preparedGetKey,
      preparedMapper,
      getReduced as Choose<unknown>,
    );
  };
}
