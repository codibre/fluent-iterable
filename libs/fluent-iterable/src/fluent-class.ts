import { fluentAsync } from './fluent-async-func';
import { orderAssured } from './types-internal';
import { addFluentResolvingFactory } from './utils/internal-utils';

export class FluentClass {
  constructor(private base: any) {}

  [Symbol.iterator]() {
    return this.base[Symbol.iterator]();
  }

  get [orderAssured]() {
    return this.base[orderAssured];
  }

  set [orderAssured](value: number | undefined) {
    this.base[orderAssured] = value;
  }
}

export function addFluentMethod(method: string, body: Function) {
  if (FluentClass.prototype.hasOwnProperty(method)) {
    throw new TypeError(`Prototype already has a method called ${method}`);
  }
  (FluentClass.prototype as any)[method] = function (
    this: FluentClass,
    ...args: any
  ) {
    return new FluentClass(body.call(this['base'], ...args));
  };
}

export function addFluentAsyncMethod(method: string, body: Function) {
  if (FluentClass.prototype.hasOwnProperty(method)) {
    throw new TypeError(`Prototype already has a method called ${method}`);
  }
  (FluentClass.prototype as any)[method] = function (
    this: FluentClass,
    ...args: any
  ) {
    return fluentAsync(body.apply(this['base'], args));
  };
}

export const addFluentResolvingMethod = addFluentResolvingFactory(FluentClass);
