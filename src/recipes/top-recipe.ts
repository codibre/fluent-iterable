export function topRecipe(reduceAndMap: Function) {
  return (iterable: any, mapper: Function, comparer: Function): any => {
    return reduceAndMap(
      iterable,
      (current: any, next: any) => {
        const value = mapper(next);
        return !current.found ||
          (current.value && comparer(value, current.value) > 0)
          ? { value, item: next, found: true }
          : current;
      },
      { value: undefined, item: undefined, found: false },
      (acc: any) => acc.item,
    );
  };
}
