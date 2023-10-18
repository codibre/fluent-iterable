export function addFactory(adder: Function, origin: Record<string, Function>) {
  return (method: string) => {
    const body = origin[method];
    return adder(method, body);
  };
}

export function addFluentResolvingFactory(
  FluentClass: new (...args: any) => unknown,
) {
  return (method: string, body: Function) => {
    if (FluentClass.prototype.hasOwnProperty(method)) {
      throw new TypeError(`Prototype already has a method called ${method}`);
    }
    FluentClass.prototype[method] = body;
  };
}

export function isClassFactory<T>(Class: new (...args: any) => T) {
  const methodName = `is${Class.name}`;
  const result = {
    [methodName](value: unknown): value is T {
      return value instanceof Class;
    },
  };

  return result[methodName];
}
