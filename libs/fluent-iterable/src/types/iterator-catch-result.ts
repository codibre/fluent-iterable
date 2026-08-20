export interface IteratorCatchResult<T> {
  done?: boolean;
  ignore?: boolean;
  value: T;
}
