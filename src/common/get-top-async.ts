export function getTopAsync(reduceAndMapAsync: Function) {
  return (iterable: any, mapper: Function, comparer: Function): any => {
    return reduceAndMapAsync(
      iterable,
      async (current: any, next: any) => {
        const value = await mapper(next);
        return !current.found ||
          (current.value && comparer(value, current.value) > 0)
          ? { value, item: next, found: true }
          : current;
      },
      { value: undefined, item: undefined, found: false },
      async (acc: any) => acc.item,
    );
  };
}
