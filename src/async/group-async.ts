import { Mapper, Group, AsyncMapper } from '../types';
import { mapAsync } from './map-async';
import { reduceAndMapAsync } from './reduce-and-map-async';
import { getGrouper, groupMap } from '../common/get-group';
import { AnyIterable } from '../common';
import { asyncResolver } from '../utils';

export async function* groupAsync<T, R>(
  iterable: AnyIterable<T>,
  mapper: AsyncMapper<T, R>,
): AsyncIterable<Group<T, R>> {
  const r = getGrouper(iterable, mapper, reduceAndMapAsync, asyncResolver);
  yield* groupMap(await r, mapAsync);
}
