import { AnyIterable } from '../../index';

export async function* getAsync<T>(ts: AnyIterable<T>) {
  for await (const t of ts) {
    yield t;
  }
}
