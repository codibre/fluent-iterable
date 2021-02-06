import {
  AsyncPredicate,
  Page,
  Pager,
  FluentIterable,
  FluentAsyncIterable,
  FluentGroup,
  OrderAssurable,
} from './types';
import {
  Predicate,
  Reducer,
  AsyncReducer,
  Comparer,
  Action,
  AsyncAction,
  Group,
  FluentEmitter,
} from './types/base';

import fluent from './fluent';
import { fluentAsync, fluentEmit } from './fluent-async';
import depaginate from './depaginator';
import { interval } from './interval';
import { mergeIterators, mergeIterables } from './async-base/merging';
import { assureOrder as o, assureOrderDescending as od } from './utils';
import { AsyncMapper, Mapper } from 'augmentative-iterable';

export * from './extend-async';
export * from './extend';
export * from './transform-obj-values';
export {
  o,
  od,
  OrderAssurable,
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
  fluentEmit,
  FluentEmitter,
  depaginate,
  interval,
  mergeIterables,
  mergeIterators,
};
export * from './utils';
