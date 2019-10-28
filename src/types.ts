type Predicate<T> = (item: T) => boolean;
type AsyncPredicate<T> = (item: T) => Promise<boolean>;
type Mapper<T, R> = (item: T) => R;
type AsyncMapper<T, R> = (item: T) => Promise<R>;
type Reducer<T, A> = (current: A, next: T) => A;
type AsyncReducer<T, A> = (current: A, next: T) => Promise<A>;
type Comparer<T> = (a: T, b: T) => number;
type Action<T> = (item: T) => void;
type AsyncAction<T> = (item: T) => Promise<void>;

interface Group<T, R> {
  key: R;
  values: Iterable<T>;
}

export { Predicate, AsyncPredicate, Mapper, AsyncMapper, Reducer, AsyncReducer, Comparer, Action, AsyncAction, Group };
