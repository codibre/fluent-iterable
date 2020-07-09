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
  Page,
  Pager,
  FluentIterable,
  FluentAsyncIterable,
  FluentGroup,
} from './types';

import fluent from './fluent';
import fluentAsync from './fluent-async';
import depaginate from './depaginator';
import { interval } from './interval';
import { mergeIterators } from './async-base/merging';

export * from './extend-async';
export * from './extend';
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
  FluentGroup,
  Page,
  Pager,
  fluent,
  fluentAsync,
  depaginate,
  interval,
  mergeIterators,
};
export * from './utils';
