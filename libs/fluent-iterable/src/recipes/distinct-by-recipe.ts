import { AnyIterable } from 'augmentative-iterable';
import { AnyMapper, FunctionAnyMapper } from '../types-internal';
import { DistinctIngredients } from './ingredients';
import { prepare } from '../types-internal/prepare';

function chooseDistinctByRecipe({ forEach, resolver }: DistinctIngredients) {
  return function distinct<T>(
    this: AnyIterable<T>,
    mappers: FunctionAnyMapper<any>[],
  ) {
    const { length } = mappers;
    const setPos = length - 1;
    const lastMap = setPos - 1;
    const map = setPos === 0 ? new Set() : new Map();
    const result: any[] = [];

    return resolver(
      forEach.call(this, (x) => {
        let current: any = map;
        for (let i = 0; i < setPos; i++) {
          const mapper = mappers[i];
          const k = mapper(x);
          const prev = current;
          current = prev.get(k);
          if (!current) {
            current = i === lastMap ? new Set() : new Map();
            prev.set(k, current);
          }
        }
        const k = mappers[setPos](x);
        if (!current.has(k)) {
          current.add(k);
          result.push(x);
        }
      }),
      () => result,
    );
  };
}

export function distinctByRecipe(ingredients: DistinctIngredients) {
  const choose = chooseDistinctByRecipe(ingredients);

  return function distinctBy<T>(
    this: AnyIterable<T>,
    ...baseMappers: Array<AnyMapper<T>>
  ) {
    const mappers = baseMappers.map(prepare);
    return choose.call(this, mappers);
  };
}
