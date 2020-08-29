import { AnyMapper } from '../types-internal';
import { prepare } from '../types-internal/prepare';
import { identity, getAverageStepper } from '../utils';
import { BasicIngredients } from './ingredients';

export function avgRecipe({ forEach, resolver }: BasicIngredients) {
  return function <T>(this: Iterable<T>, baseMapper: AnyMapper<T> = identity) {
    const stepper = getAverageStepper();
    const mapper = prepare(baseMapper);
    return resolver(
      forEach.call(this, (x: T) => resolver(mapper(x), stepper.step)),
      () => stepper.avg,
    );
  };
}
