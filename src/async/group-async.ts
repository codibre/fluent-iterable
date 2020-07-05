import { Mapper, Group, AsyncMapper } from '../types';
import { mapAsync } from './map-async';
import { reduceAndMapAsync } from './reduce-and-map-async';
import { getGrouper } from '../common/get-group';
import { AnyIterable } from '../common';

export async function* groupAsync<T, R>(
  iterable: AnyIterable<T>,
  mapper: AsyncMapper<T, R>,
): AsyncIterable<Group<T, R>> {
  const r = getGrouper(
    iterable,
    mapper,
    reduceAndMapAsync,
    async (t: any, g) => g(await t),
    mapAsync,
  );
  yield* r.group(await r.mapped);
}
