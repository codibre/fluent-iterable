import { identity, getAverageStepper } from '../utils';
import { BasicIngredients } from './ingredients';

export function avgRecipe({ forEach, resolver }: BasicIngredients) {
  return function <T>(this: Iterable<T>, mapper: any = identity) {
    const stepper = getAverageStepper();
    return resolver(
      forEach.call(this, (x: T) => resolver(mapper(x), stepper.step)),
      () => stepper.avg,
    );
  };
}
