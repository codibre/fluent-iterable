export function forEach<T>(this: Iterable<T>, mapper: any) {
  const iterator = this[Symbol.iterator]();
  let item: IteratorResult<T>;
  while (!(item = iterator.next()).done) mapper(item.value);
}
