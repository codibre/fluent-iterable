export type Truthy<T> = Exclude<
  Exclude<Exclude<Exclude<Exclude<T, false>, 0>, ''>, null>,
  undefined
>;
