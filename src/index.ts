import {
  Predicate,
  AsyncPredicate,
  Mapper,
  AsyncMapper,
  Reducer,
  AsyncReducer,
  Comparer,
  Action,
  AsyncAction,
  Group,
} from './types';

import fluent, { FluentIterable } from './fluent';
import fluentAsync, { FluentAsyncIterable } from './fluentAsync';

export default fluent;
export {
  FluentIterable,
  FluentAsyncIterable,
  Predicate,
  AsyncPredicate,
  Mapper,
  AsyncMapper,
  Reducer,
  AsyncReducer,
  Comparer,
  Action,
  AsyncAction,
  Group,
  fluentAsync,
};
