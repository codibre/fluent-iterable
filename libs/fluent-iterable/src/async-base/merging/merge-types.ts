export interface NextResult<T> {
  index: number;
  result: IteratorResult<T>;
}

export interface GetNextAsyncIterator<T> {
  (asyncIterator: AsyncIterator<T>, index: number): Promise<NextResult<T>>;
}
