import { identity, getAverageStepper } from '../utils';
import { ResolverType } from '../types-internal';

export function avgRecipe(forEach: Function, resolver: ResolverType) {
  return function <T>(this: Iterable<T>, mapper: any = identity) {
    const stepper = getAverageStepper();
    return resolver(
      forEach.call(this, (x: T) => resolver(mapper(x), stepper.step)),
      () => stepper.avg,
    );
  };
}
