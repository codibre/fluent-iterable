import { orderAssured } from './types-internal';
import { iterateAsync } from './utils';
import { addFluentResolvingFactory } from './utils/internal-utils';

export class FluentAsyncClass {
  private base: any;
  constructor(base: any) {
    this.base = iterateAsync(base);
  }

  [Symbol.asyncIterator]() {
    return this.base[Symbol.asyncIterator]();
  }

  get [orderAssured]() {
    return this.base[orderAssured];
  }

  set [orderAssured](value: number | undefined) {
    this.base[orderAssured] = value;
  }
}

export function addAsyncFluentMethod(method: string, body: Function) {
  if (FluentAsyncClass.prototype.hasOwnProperty(method)) {
    throw new TypeError(`Prototype already has a method called ${method}`);
  }
  (FluentAsyncClass.prototype as any)[method] = function (
    this: FluentAsyncClass,
    ...args: any
  ) {
    return new FluentAsyncClass(iterateAsync(body.apply(this['base'], args)));
  };
}

export const addAsyncFluentResolvingMethod =
  addFluentResolvingFactory(FluentAsyncClass);
