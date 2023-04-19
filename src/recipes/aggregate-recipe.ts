import { AnyIterable } from 'augmentative-iterable';
import { AverageStepper } from '../types';
import { getAverageStepper } from '../utils';
import { BasicIngredients } from './ingredients';

const contextSymbol = Symbol('context');

class Context {
  id = 0;
  customIds: any = {};
  modMultiplyId = 0;
  modMultiplySymbols: any = {};
  modSumId = 0;
  modSumSymbols: any = {};
  [key: string]: any;

  resetIds() {
    this.modSumId = this.modMultiplyId = this.id = 0;
  }
  defaultId() {
    return (this.customIds[this.id++] ??= Symbol(this.id));
  }
  getModMultiplyId(id: any) {
    return typeof id === 'symbol'
      ? id
      : (this.modMultiplySymbols[id] ??= Symbol(id));
  }
  getModSumId(id: any) {
    return typeof id === 'symbol'
      ? id
      : (this.modSumSymbols[id] ??= Symbol(id));
  }
}

class Aggregations {
  [contextSymbol] = new Context();

  sum(value: number, id: string | number = this[contextSymbol].defaultId()) {
    const context = (this[contextSymbol].sum ??= {});
    return (context[id] = (context[id] ?? 0) + value);
  }
  multiply(
    value: number,
    id: string | number = this[contextSymbol].defaultId(),
  ) {
    const context = (this[contextSymbol].multiply ??= {});
    return (context[id] = (context[id] ?? 1) * value);
  }
  max(
    value: string | number,
    id: string | number = this[contextSymbol].defaultId(),
  ) {
    const context = (this[contextSymbol].max ??= {});
    if (context[id] === undefined || context[id] < value) context[id] = value;
    return context[id];
  }
  avg(value: number, id: string | number = this[contextSymbol].defaultId()) {
    const context = (this[contextSymbol].avg ??= {});
    if (context[id] === undefined) context[id] = getAverageStepper();
    const stepper: AverageStepper = context[id];
    stepper.step(value);
    return stepper.avg;
  }
  min<T>(value: T, id: string | number = this[contextSymbol].defaultId()) {
    const context = (this[contextSymbol].min ??= {});
    if (context[id] === undefined || context[id] > value) context[id] = value;
    return context[id];
  }
  first<T>(value: T, id: string | number = this[contextSymbol].defaultId()) {
    const context = (this[contextSymbol].first ??= {});
    if (context[id] === undefined) context[id] = { value };
    return context[id].value;
  }
  last<T>(value: T) {
    return value;
  }
  modSum(value: number, mod: number, id = this[contextSymbol].defaultId()) {
    const context = (this[contextSymbol].modSumInternal ??= {});
    return (context[id] =
      this.sum(value, this[contextSymbol].getModSumId(id)) % mod);
  }
  modMultiply(
    value: number,
    mod: number,
    id = this[contextSymbol].defaultId(),
  ) {
    const context = (this[contextSymbol].modMultiplyInternal ??= {});
    return (context[id] =
      this.multiply(value, this[contextSymbol].getModMultiplyId(id)) % mod);
  }
}

export function aggregateRecipe(ingredients: BasicIngredients): any {
  const { forEach, resolver } = ingredients;
  return function aggregate<T>(
    this: AnyIterable<T>,
    callback: (a: T, agg: Aggregations, prev: any) => any,
    result?: any,
  ) {
    const agg = new Aggregations();
    return resolver(
      forEach.call(this, (item: T) => {
        agg[contextSymbol].resetIds();
        result = callback(item, agg, result);
      }),
      () => result,
    );
  };
}
