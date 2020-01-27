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
import fluentAsync from './fluentAsync';
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
  FluentGroup,
  Page,
  Pager,
  fluentAsync,
  depaginate,
  interval,
};
