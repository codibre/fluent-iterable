export function getSkip(skipWhile: Function) {
  return <T>(iterable: AsyncIterable<T>, n: number) => {
    let counter = n;
    return skipWhile(iterable, () => counter-- > 0);
  };
}
