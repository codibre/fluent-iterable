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
} from './types';

import fluent, { FluentIterable } from './fluent';
import fluentAsync, { FluentAsyncIterable } from './fluentAsync';
import depaginate from './depaginator';
import { interval } from './utils';

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
  Page,
  Pager,
  fluentAsync,
  depaginate,
  interval,
};
