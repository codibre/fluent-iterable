import { AnyIterable } from 'augmentative-iterable';
import { AverageStepper } from '../types';
import { BasicIngredients } from './ingredients';

let getAverageStepper: Function;
const contextSymbol = Symbol('context');

class Context {
  id = 0;
  item: any;
  customIds: any = {};
  modMultiplyId = 0;
  modMultiplySymbols: any = {};
  modSumId = 0;
  modSumSymbols: any = {};
  [key: string]: any;

  resetIds(item: any) {
    this.modSumId = this.modMultiplyId = this.id = 0;
    this.item = item;
  }
  defaultId() {
    return (this.customIds[this.id++] ??= Symbol(this.id));
  }
  getId(id: any, prop: 'modMultiplySymbols' | 'modSumSymbols') {
    return typeof id === 'symbol' ? id : (this[prop][id] ??= Symbol(id));
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
    if (context[id] === undefined || context[id].value < value) {
      context[id] = { value, item: this[contextSymbol].item };
    }
    return context[id].item;
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
    if (context[id] === undefined || context[id].value > value) {
      context[id] = { value, item: this[contextSymbol].item };
    }
    return context[id].item;
  }
  first<T>(value: T, id: string | number = this[contextSymbol].defaultId()) {
    const context = (this[contextSymbol].first ??= {});
    if (context[id] === undefined && value) {
      context[id] = { item: this[contextSymbol].item };
    }
    return context[id]?.item;
  }
  last<T>(value: T, id: string | number = this[contextSymbol].defaultId()) {
    const context = (this[contextSymbol].last ??= {});
    if (value) context[id] = { item: this[contextSymbol].item };
    return context[id]?.item;
  }
  modSum(value: number, mod: number, id = this[contextSymbol].defaultId()) {
    const context = (this[contextSymbol].modSumInternal ??= {});
    return (context[id] =
      this.sum(value, this[contextSymbol].getId(id, 'modSumSymbols')) % mod);
  }
  modMultiply(
    value: number,
    mod: number,
    id = this[contextSymbol].defaultId(),
  ) {
    const context = (this[contextSymbol].modMultiplyInternal ??= {});
    return (context[id] =
      this.multiply(
        value,
        this[contextSymbol].getId(id, 'modMultiplySymbols'),
      ) % mod);
  }
}

export function aggregateRecipe(ingredients: BasicIngredients): any {
  const { forEach, resolver } = ingredients;
  getAverageStepper ??= require('../utils').getAverageStepper;
  return function aggregate<T>(
    this: AnyIterable<T>,
    callback: (a: T, agg: Aggregations, prev: any) => any,
    result?: any,
  ) {
    const agg = new Aggregations();
    return resolver(
      forEach.call(this, (item: T) => {
        agg[contextSymbol].resetIds(item);
        result = callback(item, agg, result);
      }),
      () => result,
    );
  };
}
