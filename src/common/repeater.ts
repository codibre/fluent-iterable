export function getRepeater<T>() {
  const cache: T[] = [];

  return {
    push(value: T) {
      cache.push(value);
      return value;
    },
    *repeat(times: number) {
      for (let i = 1; i < times; ++i) {
        yield* cache;
      }
    },
  };
}
