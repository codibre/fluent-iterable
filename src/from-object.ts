/* eslint-disable guard-for-in */

export function* fromObject<
  T extends Function,
  Obj extends { [key: string]: T }
>(obj: Obj): Iterable<[keyof Obj, T]> {
  for (const prop in obj) {
    yield [prop, obj[prop]];
  }
}
