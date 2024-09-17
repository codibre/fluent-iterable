const jestExpect: jest.Expect = (global as any).expect;
import {
  o,
  fluent,
  identity,
  interval,
  od,
  getGroupingDistinct,
} from '../../src';
import { data, flatMap, Gender, generator, Person, picker } from './tools';
import delay from 'delay';
import { ObjectReadableMock } from 'stream-mock';
import { FluentClass } from '../../src/fluent-class';

const additionalPerson: Person = {
  name: 'name',
  gender: Gender.NonBinary,
  emails: ['name@email.com'],
};

describe('fluent iterable', () => {
  const suite = (createSubject: () => Iterable<Person>) => () => {
    let subject: Iterable<Person>;

    beforeEach(() => (subject = createSubject()));

    describe('synchronous', () => {
      describe('basics work', () => {
        it('wrapping does not fail', () => {
          fluent(subject);
        });
        it('can iterate through', () => {
          let idx = 0;
          for (const person of fluent(subject)) {
            expect(person).toEqual(data[idx++]);
          }
        });
        it('can convert to array', () => {
          expect(fluent(subject).toArray()).toEqual(data);
        });
        it('should iterate with forEach', () => {
          let sum = 0;
          fluent([1, 2, 3]).forEach((x) => (sum += x));
          expect(sum).toBe(6);
        });
        it('should serialize as an array', () => {
          expect(JSON.stringify(fluent([1, 2, 3]).map((x) => x * 2))).toEqual(
            '[2,4,6]',
          );
        });
      });
      describe('withIndex', () => {
        it('should return Indexed instances from informed array', () => {
          expect(fluent(['a', 'b', 'c']).withIndex().toArray()).toEqual([
            { idx: 0, value: 'a' },
            { idx: 1, value: 'b' },
            { idx: 2, value: 'c' },
          ]);
        });
      });
      describe('takeWhile', () => {
        it('works with initially not true statement', () => {
          expect(
            fluent(subject)
              .takeWhile((p) => p.emails.length > 0)
              .toArray(),
          ).toBeEmpty();
        });
        it('works with eventually not true statement', () => {
          expect(
            fluent(subject)
              .takeWhile((p) => p.gender === undefined)
              .toArray(),
          ).toEqual(data.slice(0, 3));
        });
        it('works with always true statement', () => {
          expect(
            fluent(subject)
              .takeWhile((p) => p.name.length > 0)
              .toArray(),
          ).toEqual(data);
        });
        it('should work with key string parameter', () => {
          expect(
            fluent([{ a: 1 }, { a: 2 }, { a: 0 }, { a: 1 }])
              .takeWhile('a')
              .toArray(),
          ).toEqual([{ a: 1 }, { a: 2 }]);
        });
      });
      describe('takeWhileAsync', () => {
        it('works with initially not true statement', async () =>
          expect(
            await fluent(subject)
              .takeWhileAsync(async (p) => p.emails.length > 0)
              .toArray(),
          ).toBeEmpty());
        it('works with eventually not true statement', async () => {
          expect(
            await fluent(subject)
              .takeWhileAsync(async (p) => p.gender === undefined)
              .toArray(),
          ).toEqual(data.slice(0, 3));
        });
        it('works with always true statement', async () => {
          expect(
            await fluent(subject)
              .takeWhileAsync(async (p) => p.name.length > 0)
              .toArray(),
          ).toEqual(data);
        });
        it('should work with key string parameter', async () => {
          expect(
            await fluent([
              { a: 1 },
              { a: 2 },
              { a: Promise.resolve(0) },
              { a: 1 },
            ])
              .takeWhileAsync('a')
              .toArray(),
          ).toEqual([{ a: 1 }, { a: 2 }]);
        });
      });
      describe('take', () => {
        it('works with negative count', () => {
          expect(fluent(subject).take(-5).toArray()).toBeEmpty();
        });
        it('works with zero count', () => {
          expect(fluent(subject).take(0).toArray()).toBeEmpty();
        });
        it('works with one count', () => {
          expect(fluent(subject).take(1).toArray()).toEqual(data.slice(0, 1));
        });
        it('works with count < length', () => {
          expect(fluent(subject).take(5).toArray()).toEqual(data.slice(0, 5));
        });
        it('works with count = length', () => {
          expect(fluent(subject).take(data.length).toArray()).toEqual(data);
        });
        it('works with count > length', () => {
          expect(
            fluent(subject)
              .take(data.length * 2)
              .toArray(),
          ).toEqual(data);
        });
      });
      describe('skipWhile', () => {
        it('works with initially not true statement', () => {
          expect(
            fluent(subject)
              .skipWhile((p) => p.emails.length > 0)
              .toArray(),
          ).toEqual(data);
        });
        it('works with eventually not true statement', () => {
          expect(
            fluent(subject)
              .skipWhile((p) => p.gender === undefined)
              .toArray(),
          ).toEqual(data.slice(3));
        });
        it('works with always true statement', () => {
          expect(
            fluent(subject)
              .skipWhile((p) => p.name.length > 0)
              .toArray(),
          ).toBeEmpty();
        });
        it('works with alternating true statement', () => {
          expect(
            fluent(subject)
              .skipWhile((p) => p.emails.length === 0)
              .toArray(),
          ).toEqual(data.slice(1));
        });
        it('should work with key string parameter', () => {
          expect(
            fluent([
              { a: 1, b: 1 },
              { a: 1, b: 2 },
              { a: 0, b: 3 },
              { a: 1, b: 4 },
            ])
              .skipWhile('a')
              .toArray(),
          ).toEqual([
            { a: 0, b: 3 },
            { a: 1, b: 4 },
          ]);
        });
      });
      describe('skipWhileAsync', () => {
        it('works with initially not true statement', async () =>
          expect(
            await fluent(subject)
              .skipWhileAsync(async (p) => p.emails.length > 0)
              .toArray(),
          ).toEqual(data));
        it('works with eventually not true statement', async () =>
          expect(
            await fluent(subject)
              .skipWhileAsync(async (p) => p.gender === undefined)
              .toArray(),
          ).toEqual(data.slice(3)));
        it('works with always true statement', async () =>
          expect(
            await fluent(subject)
              .skipWhileAsync(async (p) => p.name.length > 0)
              .toArray(),
          ).toBeEmpty());
        it('works with alternating true statement', async () =>
          expect(
            await fluent(subject)
              .skipWhileAsync(async (p) => p.emails.length === 0)
              .toArray(),
          ).toEqual(data.slice(1)));
        it('should work with key string parameter', async () => {
          expect(
            await fluent([
              { a: 1, b: 1 },
              { a: 1, b: 2 },
              { a: Promise.resolve(0), b: 3 },
              { a: 1, b: 4 },
            ])
              .skipWhileAsync('a')
              .map('b')
              .toArray(),
          ).toEqual([3, 4]);
        });
      });
      describe('skip', () => {
        it('works with negative count', () => {
          expect(fluent(subject).skip(-5).toArray()).toEqual(data);
        });
        it('works with zero count', () => {
          expect(fluent(subject).skip(0).toArray()).toEqual(data);
        });
        it('works with one count', () => {
          expect(fluent(subject).skip(1).toArray()).toEqual(data.slice(1));
        });
        it('works with count < length', () => {
          expect(fluent(subject).skip(5).toArray()).toEqual(data.slice(5));
        });
        it('works with count = length', () => {
          expect(fluent(subject).skip(data.length).toArray()).toBeEmpty();
        });
        it('works with count > length', () => {
          expect(
            fluent(subject)
              .skip(data.length * 2)
              .toArray(),
          ).toBeEmpty();
        });
      });
      describe('map', () => {
        it('maps to undefined', () => {
          const res = fluent(subject)
            .map(() => undefined)
            .toArray();
          expect(res).toHaveLength(data.length);
          res.forEach((item) => expect(item).toBeUndefined());
        });
        it('maps to projection', () => {
          const res = fluent(subject)
            .map((p) => p.name)
            .toArray();
          expect(res).toHaveLength(data.length);
          let idx = 0;
          for (const item of res) {
            expect(item).toEqual(data[idx++].name);
          }
        });
        it('should map symbol properties', () => {
          const mySymbol = Symbol('test');

          const res = fluent([{ [mySymbol]: 123 }, { [mySymbol]: 456 }])
            .map(mySymbol)
            .toArray();

          expect(res).toEqual([123, 456]);
        });
        it('should map numeric properties', () => {
          const res = fluent([[123], [456]])
            .map(0)
            .toArray();

          expect(res).toEqual([123, 456]);
        });
        it('should work with key string', () => {
          const res = fluent(subject)
            .map((p) => p.name)
            .toArray();
          expect(res).toHaveLength(data.length);
          let idx = 0;
          for (const item of res) {
            expect(item).toEqual(data[idx++].name);
          }
        });
        it('should work with key string parameter', () => {
          expect(
            fluent([
              { a: 1, b: 1 },
              { a: 1, b: 2 },
              { a: Promise.resolve(0), b: 3 },
              { a: 1, b: 4 },
            ])
              .map('b')
              .toArray(),
          ).toEqual([1, 2, 3, 4]);
        });
      });
      describe('mapAsync', () => {
        it('maps to undefined', async () => {
          const res = await fluent(subject)
            .mapAsync(async () => undefined)
            .toArray();
          expect(res).toHaveLength(data.length);
          res.forEach((item) => expect(item).toBeUndefined());
        });
        it('maps to projection', async () => {
          const res = await fluent(subject)
            .mapAsync(async (p) => p.name)
            .toArray();
          expect(res).toHaveLength(data.length);
          let idx = 0;
          for (const item of res) {
            expect(item).toEqual(data[idx++].name);
          }
        });
        it('should work with key string parameter', async () => {
          expect(
            await fluent([
              { a: 1, b: Promise.resolve(1) },
              { a: 1, b: Promise.resolve(2) },
              { a: Promise.resolve(0), b: Promise.resolve(3) },
              { a: 1, b: Promise.resolve(4) },
            ])
              .mapAsync('b')
              .toArray(),
          ).toEqual([1, 2, 3, 4]);
        });
      });
      describe('filter', () => {
        it('with always false predicate', () => {
          expect(
            fluent(subject)
              .filter(() => false)
              .toArray(),
          ).toBeEmpty();
        });
        it('with always true predicate', () => {
          expect(
            fluent(subject)
              .filter(() => true)
              .toArray(),
          ).toEqual(data);
        });
        it('with alternating predicate', () => {
          expect(
            fluent(subject)
              .filter((p) => p.gender === Gender.Female)
              .toArray(),
          ).toEqual(picker(4, 7, 10));
        });
        it('not assuring order', () => {
          const call = jest.fn();
          expect(
            fluent([1, 2, 3, 4, 3])
              .filter((p) => {
                call();
                return 2 <= p && p <= 3;
              })
              .toArray(),
          ).toEqual([2, 3, 3]);
          jestExpect(call).toHaveBeenCalledTimes(5);
        });
        it('assuring order', () => {
          const call = jest.fn();
          expect(
            fluent([1, 2, 3, 4, 3])
              .filter(
                o((p) => {
                  call();
                  return 2 <= p && p <= 3;
                }),
              )
              .toArray(),
          ).toEqual([2, 3]);
          jestExpect(call).toHaveReturnedTimes(4);
        });
        it('assuring order descending', () => {
          const call = jest.fn();
          expect(
            fluent([1, 2, 3, 4, 3])
              .filter(
                od((p) => {
                  call();
                  return 2 <= p && p <= 3;
                }),
              )
              .toArray(),
          ).toEqual([2, 3]);
          jestExpect(call).toHaveReturnedTimes(4);
        });
        it('should work with key string parameter', () => {
          expect(
            fluent([
              { a: 0, b: 1 },
              { a: 1, b: 2 },
              { a: 0, b: 3 },
              { a: 1, b: 4 },
            ])
              .filter('a')
              .map('b')
              .toArray(),
          ).toEqual([2, 4]);
        });
        it('should guarantees that a possible falsy unique key is defined', () => {
          interface Test {
            a?: number;
            b: string | null;
          }
          expect(
            fluent([{ b: null, a: 1 }, { b: 'a' }, { a: 2, b: 'b' }] as Test[])
              .filter('b')
              .filter('a')
              .map((x) => `${x.a.toFixed(2)} and ${x.b.length}`)
              .first(),
          ).toBe('2.00 and 1');
        });
        it('should guarantees that a possible falsy unique key is defined explicitly', () => {
          interface Test {
            a?: number;
            b: string | null;
          }
          expect(
            fluent([{ b: null, a: 1 }, { b: 'a' }, { a: 2, b: 'b' }] as Test[])
              .filter<'b' | 'a'>((x) => x.b && x.a)
              .map((x) => `${x.a.toFixed(2)} and ${x.b.length}`)
              .first(),
          ).toBe('2.00 and 1');
        });
        it('should return just the truthy values with correct typing', () => {
          interface Test {
            a: number;
            b: string;
          }
          expect(
            fluent([{ b: 'abc', a: 1 }, undefined, { a: 2, b: 'b' }] as (
              | Test
              | undefined
            )[])
              .filter()
              .map((x) => `${x.a.toFixed(2)} and ${x.b.length}`)
              .toArray(),
          ).toEqual(['1.00 and 3', '2.00 and 1']);
        });
        it('should apply type guard properly', () => {
          const test: (number | string)[] = [1, 'b', 2, 'c', 3];
          const result = fluent(test)
            .filter((a): a is number => typeof a === 'number')
            .toArray();

          expect(result[0] + 1).toBe(2);
        });
      });
      describe('filterAsync', () => {
        it('with always false predicate', async () =>
          expect(
            await fluent(subject)
              .filterAsync(async () => false)
              .toArray(),
          ).toBeEmpty());
        it('with always true predicate', async () =>
          expect(
            await fluent(subject)
              .filterAsync(async () => true)
              .toArray(),
          ).toEqual(data));
        it('with alternating predicate', async () =>
          expect(
            await fluent(subject)
              .filterAsync(async (p) => p.gender === Gender.Female)
              .toArray(),
          ).toEqual(picker(4, 7, 10)));
        it('should work with key string parameter', async () => {
          expect(
            await fluent([
              { a: 0, b: 1 },
              { a: Promise.resolve(1), b: 2 },
              { a: Promise.resolve(0), b: 3 },
              { a: 1, b: 4 },
            ])
              .filterAsync('a')
              .map('b')
              .toArray(),
          ).toEqual([2, 4]);
        });
        it('should guarantees that a possible falsy unique key is defined', async () => {
          interface Test {
            a?: number;
            b: string | null;
          }
          expect(
            await fluent([
              { b: null, a: 1 },
              { b: 'a' },
              { a: 2, b: 'b' },
            ] as Test[])
              .filterAsync('b')
              .filter('a')
              .map((x) => `${x.a.toFixed(2)} and ${x.b.length}`)
              .first(),
          ).toBe('2.00 and 1');
        });
        it('should guarantees that a possible falsy unique key is defined explicitly', async () => {
          interface Test {
            a?: number;
            b: string | null;
          }
          expect(
            await fluent([
              { b: null, a: 1 },
              { b: 'a' },
              { a: 2, b: 'b' },
            ] as Test[])
              .filterAsync<'b' | 'a'>((x) => x.b && x.a)
              .map((x) => `${x.a.toFixed(2)} and ${x.b.length}`)
              .first(),
          ).toBe('2.00 and 1');
        });
        it('should return just the truthy values with correct typing', async () => {
          interface Test {
            a: number;
            b: string;
          }
          expect(
            await fluent([{ b: 'abc', a: 1 }, undefined, { a: 2, b: 'b' }] as (
              | Test
              | undefined
            )[])
              .filterAsync()
              .map((x) => `${x.a.toFixed(2)} and ${x.b.length}`)
              .toArray(),
          ).toEqual(['1.00 and 3', '2.00 and 1']);
        });
      });
      describe('partition', () => {
        it('should divide result in blocks of the specified size', () => {
          expect(
            fluent([1, 2, 3, 4, 5, 6, 7, 8])
              .partition(3)
              .map((x) => x.toArray())
              .toArray(),
          ).toEqual([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8],
          ]);
        });
        it('should divide result in blocks of the specified size when input it not an array', () => {
          expect(
            fluent([1, 2, 3, 4, 5, 6, 7, 8][Symbol.iterator]())
              .partition(3)
              .map((x) => x.toArray())
              .toArray(),
          ).toEqual([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8],
          ]);
        });
        it('should thrown an error when partition size is not valid', () => {
          let error: any;
          try {
            fluent([]).partition(0);
          } catch (err) {
            error = err;
          }
          expect(error).toBeInstanceOf(Error);
        });
      });
      describe('append', () => {
        it('with empty iterable', () => {
          expect(
            fluent([] as Person[])
              .append(additionalPerson)
              .toArray(),
          ).toEqual([additionalPerson]);
        });
        it('with non-empty iterable', () => {
          expect(fluent(subject).append(additionalPerson).toArray()).toEqual([
            ...data,
            additionalPerson,
          ]);
        });
      });
      describe('prepend', () => {
        it('with empty iterable', () => {
          expect(
            fluent([] as Person[])
              .prepend(additionalPerson)
              .toArray(),
          ).toEqual([additionalPerson]);
        });
        it('with non-empty iterable', () => {
          expect(fluent(subject).prepend(additionalPerson).toArray()).toEqual([
            additionalPerson,
            ...data,
          ]);
        });
      });
      describe('concat', () => {
        it('one empty array', () => {
          expect(fluent(subject).concat([]).toArray()).toEqual(data);
        });
        it('two empty arrays', () => {
          expect(fluent(subject).concat([], []).toArray()).toEqual(data);
        });
        it('one non-empty arrays', () => {
          expect(fluent(subject).concat([additionalPerson]).toArray()).toEqual([
            ...data,
            additionalPerson,
          ]);
        });
        it('two non-empty arrays', () => {
          expect(
            fluent(subject).concat([additionalPerson], data).toArray(),
          ).toEqual([...data, additionalPerson, ...data]);
        });
        it('one empty and one non-empty arrays', () => {
          expect(
            fluent(subject).concat([], [additionalPerson]).toArray(),
          ).toEqual([...data, additionalPerson]);
        });
      });

      describe('concatEmitter', () => {
        it('one empty array', async () =>
          expect(
            await fluent(subject)
              .concatEmitter(new ObjectReadableMock([]))
              .toArray(),
          ).toEqual(data));
        it('one non-empty arrays', async () =>
          expect(
            await fluent(subject)
              .concatEmitter(new ObjectReadableMock([additionalPerson]))
              .toArray(),
          ).toEqual([...data, additionalPerson]));
      });
      describe('repeat', () => {
        it('negative number of times', () => {
          expect(fluent(subject).repeat(-5).toArray()).toBeEmpty();
        });
        it('zero times', () => {
          expect(fluent(subject).repeat(0).toArray()).toBeEmpty();
        });
        it('once', () => {
          expect(fluent(subject).repeat(1).toArray()).toEqual(data);
        });
        it('twice', () => {
          expect(fluent(subject).repeat(2).toArray()).toEqual([
            ...data,
            ...data,
          ]);
        });
        it('three times', () => {
          expect(fluent(subject).repeat(3).toArray()).toEqual([
            ...data,
            ...data,
            ...data,
          ]);
        });
      });
      const flattens: ['flatten', 'flatMap'] = ['flatten', 'flatMap'];
      flattens.forEach((func) => {
        describe(func, () => {
          it('empty array', () => {
            expect(
              fluent([] as [][])
                [func]()
                .toArray(),
            ).toBeEmpty();
          });
          it('already flat fails', () => {
            expect(() =>
              fluent(subject as [][])
                [func]()
                .toArray(),
            ).toThrow();
          });
          it('not flat', () => {
            expect(
              fluent([[1, 2], [3, 4, 5], [], [6]])
                [func]()
                .toArray(),
            ).toEqual([1, 2, 3, 4, 5, 6]);
          });
          it('with mapper', () => {
            expect(
              fluent(subject)
                [func]((p) => p.emails)
                .toArray(),
            ).toEqual(
              flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails),
            );
          });
          it('should work with key string', () => {
            expect(fluent(subject)[func]('emails').toArray()).toEqual(
              flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails),
            );
          });
        });
      });
      const flattensAsync: ['flattenAsync', 'flatMapAsync'] = [
        'flattenAsync',
        'flatMapAsync',
      ];
      flattensAsync.forEach((func) => {
        describe(func, () => {
          it('empty array', async () =>
            expect(
              await fluent([] as any[])
                [func]((x) => x)
                .toArray(),
            ).toBeEmpty());
          it('not flat', async () =>
            expect(
              await fluent([[1, 2], [3, 4, 5], [], [6]])
                [func](async (x) => x)
                .toArray(),
            ).toEqual([1, 2, 3, 4, 5, 6]));
          it('should work with key string', async () =>
            expect(await fluent(subject)[func]('emails').toArray()).toEqual(
              flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails),
            ));
        });
      });
      describe('sort', () => {
        it('empty', () => {
          expect(fluent([]).sort().toArray()).toBeEmpty();
        });
        it('flat numbers', () => {
          expect(fluent([6, 4, 5, 3, 2, 1]).sort().toArray()).toEqual([
            1, 2, 3, 4, 5, 6,
          ]);
        });
        it('flat numbers with reversed comparison', () => {
          expect(
            fluent([6, 4, 5, 3, 2, 1])
              .sort((a, b) => b - a)
              .toArray(),
          ).toEqual([6, 5, 4, 3, 2, 1]);
        });
      });
      describe('group', () => {
        it('empty', () => {
          expect(
            fluent([] as Person[])
              .group((p) => p.gender)
              .toArray(),
          ).toBeEmpty();
        });
        it('non-empty', () => {
          const groups = fluent(subject)
            .group((p) => p.gender)
            .toArray();
          expect(groups.length).toEqual(4);
          expect(groups.map((grp) => grp.key)).toEqual([
            undefined,
            Gender.Male,
            Gender.Female,
            Gender.NonBinary,
          ]);
          for (const grp of groups) {
            expect(grp.values.toArray()).toEqual(
              data.filter((p) => p.gender === grp.key),
            );
          }
        });
        it('not assuring order', () => {
          const items = [
            { k: 1, v: 1 },
            { k: 1, v: 2 },
            { k: 2, v: 1 },
            { k: 2, v: 2 },
            { k: 1, v: 1 },
            { k: 1, v: 2 },
          ];
          const groups = fluent(items)
            .group((x) => x.k)
            .toArray();
          expect(groups.length).toEqual(2);
          expect(groups.map((grp) => grp.key)).toEqual([1, 2]);

          groups.forEach(({ key, values }) => {
            expect(values.toArray()).toEqual(items.filter((x) => x.k === key));
          });
        });
        it('assuring order', () => {
          const items = [
            { k: 1, v: 1 },
            { k: 1, v: 2 },
            { k: 2, v: 1 },
            { k: 2, v: 2 },
            { k: 1, v: 1 },
            { k: 1, v: 2 },
          ];
          const groups = fluent(items)
            .group(o((x) => x.k))
            .toArray();
          expect(groups.length).toEqual(3);
          expect(groups.map((grp) => grp.key)).toEqual([1, 2, 1]);

          groups.forEach(({ values }, i) => {
            values.withIndex().forEach(({ value, idx }) => {
              expect(value).toBe(items[i * 2 + idx]);
            });
          });
        });
        it('assuring order descending', () => {
          const items = [
            { k: 1, v: 1 },
            { k: 1, v: 2 },
            { k: 2, v: 1 },
            { k: 2, v: 2 },
            { k: 1, v: 1 },
            { k: 1, v: 2 },
          ];
          const groups = fluent(items)
            .group(od((x) => x.k))
            .toArray();
          expect(groups.length).toEqual(3);
          expect(groups.map((grp) => grp.key)).toEqual([1, 2, 1]);

          groups.forEach(({ values }, i) => {
            values.withIndex().forEach(({ value, idx }) => {
              expect(value).toBe(items[i * 2 + idx]);
            });
          });
        });
        it('assuring order with value transformation', () => {
          const items = [
            { k: 1, v: 1 },
            { k: 1, v: 1 },
            { k: 1, v: 2 },
            { k: 2, v: 1 },
            { k: 2, v: 2 },
            { k: 2, v: 2 },
            { k: 2, v: 2 },
            { k: 1, v: 1 },
            { k: 1, v: 2 },
            { k: 1, v: 2 },
          ];
          const expected = [
            { k: 1, v: 1 },
            { k: 1, v: 2 },
            { k: 2, v: 1 },
            { k: 2, v: 2 },
            { k: 1, v: 1 },
            { k: 1, v: 2 },
          ];
          const groups = fluent(items)
            .group(
              o((x) => x.k),
              getGroupingDistinct(
                (x) => [x.v.toString()],
                (x) => x[0],
              ),
            )
            .toArray();
          expect(groups.length).toEqual(3);
          expect(groups.map((grp) => grp.key)).toEqual([1, 2, 1]);

          groups.forEach(({ values }, i) => {
            values.withIndex().forEach(({ value, idx }) => {
              expect(value).toEqual(expected[i * 2 + idx].v.toString());
            });
          });
        });
        it('should work with key string', () => {
          const groups = fluent(subject).group('gender').toArray();
          expect(groups.length).toEqual(4);
          expect(groups.map((grp) => grp.key)).toEqual([
            undefined,
            Gender.Male,
            Gender.Female,
            Gender.NonBinary,
          ]);
          for (const grp of groups) {
            expect(grp.values.toArray()).toEqual(
              data.filter((p) => p.gender === grp.key),
            );
          }
        });
        it('should work with transformation expression', () => {
          const groups = fluent([1, 2, 2, 3, 4, 4, 5, 5, 5])
            .group((x) => x % 2, getGroupingDistinct(identity))
            .toArray();
          expect(groups.length).toEqual(2);
          expect(groups.map((grp) => grp.key).sort()).toEqual([0, 1]);
          expect(groups.find(({ key }) => key === 0)!.values.toArray()).toEqual(
            [2, 4],
          );
          expect(groups.find(({ key }) => key === 1)!.values.toArray()).toEqual(
            [1, 3, 5],
          );
        });
      });
      describe('groupAsync', () => {
        it('empty', async () =>
          expect(
            await fluent([] as Person[])
              .groupAsync(async (p) => p.gender)
              .toArray(),
          ).toBeEmpty());
        it('non-empty', async () => {
          const groups = await fluent(subject)
            .groupAsync(async (p) => p.gender)
            .toArray();
          expect(groups.length).toEqual(4);
          expect(groups.map((grp) => grp.key)).toEqual([
            undefined,
            Gender.Male,
            Gender.Female,
            Gender.NonBinary,
          ]);
          for (const grp of groups) {
            expect(grp.values.toArray()).toEqual(
              data.filter((p) => p.gender === grp.key),
            );
          }
        });
        it('should work with key string', async () => {
          const groups = await fluent(subject).groupAsync('gender').toArray();
          expect(groups.length).toEqual(4);
          expect(groups.map((grp) => grp.key)).toEqual([
            undefined,
            Gender.Male,
            Gender.Female,
            Gender.NonBinary,
          ]);
          for (const grp of groups) {
            expect(grp.values.toArray()).toEqual(
              data.filter((p) => p.gender === grp.key),
            );
          }
        });
        it('assuring order with value transformation', async () => {
          const items = [
            { k: 1, v: 1 },
            { k: 1, v: 1 },
            { k: 1, v: 2 },
            { k: 2, v: 1 },
            { k: 2, v: 2 },
            { k: 2, v: 2 },
            { k: 2, v: 2 },
            { k: 1, v: 1 },
            { k: 1, v: 2 },
            { k: 1, v: 2 },
          ];
          const expected = [
            { k: 1, v: 1 },
            { k: 1, v: 2 },
            { k: 2, v: 1 },
            { k: 2, v: 2 },
            { k: 1, v: 1 },
            { k: 1, v: 2 },
          ];
          const groups = await fluent(items)
            .groupAsync(
              o((x) => x.k),
              getGroupingDistinct(
                (x) => [x.v.toString()],
                (x) => x[0],
              ),
            )
            .toArray();
          expect(groups.length).toEqual(3);
          expect(groups.map((grp) => grp.key)).toEqual([1, 2, 1]);

          groups.forEach(({ values }, i) => {
            values.withIndex().forEach(({ value, idx }) => {
              expect(value).toEqual(expected[i * 2 + idx].v.toString());
            });
          });
        });
        it('should work with distinct expression', async () => {
          const groups = await fluent([1, 2, 2, 3, 4, 4, 5, 5, 5])
            .groupAsync((x) => x % 2, getGroupingDistinct(identity))
            .toArray();
          expect(groups.length).toEqual(2);
          expect(groups.map((grp) => grp.key).sort()).toEqual([0, 1]);
          expect(groups.find(({ key }) => key === 0)!.values.toArray()).toEqual(
            [2, 4],
          );
          expect(groups.find(({ key }) => key === 1)!.values.toArray()).toEqual(
            [1, 3, 5],
          );
        });
      });
      describe('avg', () => {
        it('empty', () => {
          expect(fluent([]).avg()).toEqual(NaN);
        });
        it('one element', () => {
          expect(fluent([2]).avg()).toEqual(2);
        });
        it('multiple elements', () => {
          expect(fluent([2, 3, 4, 5]).avg()).toEqual(3.5);
        });
        it('multiple elements with predicate', () => {
          expect(fluent(subject).avg((x) => x.emails.length)).toEqual(1);
        });
        it('should work with key string', () => {
          expect(fluent([{ a: 1 }, { a: 2 }, { a: 3 }]).avg('a')).toEqual(2);
        });
      });
      describe('min', () => {
        it('empty', () => {
          expect(fluent([]).min()).toEqual(undefined);
        });
        it('one element', () => {
          expect(fluent([2]).min()).toEqual(2);
        });
        it('multiple elements', () => {
          expect(fluent([1, 3, 4, 5]).min()).toEqual(1);
        });
        it('multiple non numeric elements', () => {
          expect(fluent(['a', 'b', 'c', 'd', 'e']).min()).toEqual('a');
        });
        it('multiple elements with predicate', () => {
          expect(fluent(subject).min((x) => x.emails.length)).toEqual({
            emails: [],
            name: '0: w/o gender & 0 emails',
          });
        });
        it('not assuring order', () => {
          expect(fluent([5, 4, 3, 4, 1]).min()).toBe(1);
        });
        it('assuring order', () => {
          expect(fluent([5, 4, 3, 4, 1]).min(o(identity))).toBe(5);
        });
        it('assuring descending order', () => {
          expect(fluent([5, 4, 3, 4, 1]).min(od(identity))).toBe(3);
        });
        it('should work with key string', () => {
          expect(fluent([{ a: 1 }, { a: 2 }, { a: 3 }]).min('a')).toEqual({
            a: 1,
          });
        });
      });
      describe('count', () => {
        it('empty', () => {
          expect(fluent([]).count()).toEqual(0);
        });
        it('one element', () => {
          expect(fluent([0]).count()).toEqual(1);
        });
        it('multiple elements', () => {
          expect(fluent(subject).count()).toEqual(data.length);
        });
        it('multiple elements with predicate', () => {
          expect(fluent(subject).count((x) => x.emails.length > 0)).toEqual(8);
        });
        it('not assuring order', () => {
          expect(fluent([1, 2, 4, 5, 6]).count((x) => x % 2 === 0)).toEqual(3);
        });
        it('assuring order', () => {
          expect(
            fluent([1, 2, 4, 5, 6]).count(o((x: number) => x % 2 === 0)),
          ).toEqual(2);
        });
        it('assuring descending order', () => {
          expect(
            fluent([1, 2, 4, 5, 6]).count(o((x: number) => x % 2 === 0)),
          ).toEqual(2);
        });
        it('should work with key string', () => {
          expect(fluent([{ a: 1 }, { a: 2 }, { a: 0 }]).count('a')).toEqual(2);
        });
      });
      describe('countAsync', () => {
        it('empty', async () =>
          expect(await fluent([]).countAsync(async () => true)).toEqual(0));
        it('one element', async () =>
          expect(await fluent([0]).countAsync(async (x) => x === 0)).toEqual(
            1,
          ));
        it('multiple elements', async () =>
          expect(
            await fluent(subject).countAsync(async (x) => x.emails.length > 0),
          ).toEqual(8));
        it('should work with key string', async () =>
          expect(
            await fluent([{ a: 1 }, { a: 0 }, { a: 3 }]).countAsync('a'),
          ).toEqual(2));
      });
      describe('join', () => {
        it('empty', () => {
          expect(fluent([]).join('-')).toBe('');
        });
        it('one', () => {
          expect(fluent(['1']).join('-')).toEqual('1');
        });
        it('two', () => {
          expect(fluent(['1', '2']).join('-')).toEqual('1-2');
        });
        it('many with predicate', () => {
          expect(fluent(['1', '2', '3']).join('-', (x) => `a${x}`)).toEqual(
            'a1-a2-a3',
          );
        });
        it('should work using key string', () => {
          expect(
            fluent([{ a: '1' }, { a: '2' }, { a: '3' }]).join('-', 'a'),
          ).toEqual('1-2-3');
        });
      });
      describe('joinAsync', () => {
        it('many with predicate', async () =>
          expect(
            await fluent(['1', '2', '3']).joinAsync('-', (x) => `a${x}`),
          ).toEqual('a1-a2-a3'));
        it('should work using key string', async () =>
          expect(
            await fluent([{ a: '1' }, { a: '2' }, { a: '3' }]).joinAsync(
              '-',
              'a',
            ),
          ).toEqual('1-2-3'));
      });
      describe('first', () => {
        it('empty', () => {
          expect(fluent([]).first()).toBeUndefined();
        });
        it('not empty', () => {
          expect(fluent([3, 1]).first()).toEqual(3);
        });
        it('with predicate', () => {
          expect(fluent([3, 1, 2, 6]).first((x) => x % 2 === 0)).toEqual(2);
        });
        it('should work with key string', () => {
          expect(fluent([{ a: 0 }, { a: 7 }, { a: 3 }]).first('a')).toEqual({
            a: 7,
          });
        });
      });
      describe('firstAsync', () => {
        it('empty', async () =>
          expect(await fluent([]).firstAsync(async (x) => x)).toBeUndefined());
        it('not empty', async () =>
          expect(
            await fluent([3, 1, 2, 6]).firstAsync(async (x) => x % 2 === 0),
          ).toEqual(2));
        it('should work with key string', async () =>
          expect(
            await fluent([{ a: 0 }, { a: 9 }, { a: 3 }]).firstAsync('a'),
          ).toEqual({ a: 9 }));
      });
      describe('last', () => {
        it('empty', () => {
          expect(fluent([]).last()).toBeUndefined();
        });
        it('not empty', () => {
          expect(fluent([3, 1]).last()).toEqual(1);
        });
        it('with predicate, not assuring order', () => {
          expect(fluent([3, 1, 2, 6, 3, 8]).last((x) => x % 2 === 0)).toEqual(
            8,
          );
        });
        it('assuring order', () => {
          expect(
            fluent([3, 1, 2, 6, 3, 8]).last(o((x: number) => x % 2 === 0)),
          ).toEqual(6);
        });
        it('assuring order descending', () => {
          expect(
            fluent([3, 1, 2, 6, 3, 8]).last(od((x: number) => x % 2 === 0)),
          ).toEqual(6);
        });
        it('should work with key string', () => {
          expect(fluent([{ a: 1 }, { a: 11 }, { a: 0 }]).last('a')).toEqual({
            a: 11,
          });
        });
      });

      describe('lastAsync', () => {
        it('empty', async () =>
          expect(await fluent([]).lastAsync(async (x) => x)).toBeUndefined());
        it('not empty', async () =>
          expect(
            await fluent([3, 1, 2, 6, 7]).lastAsync(async (x) => x % 2 === 0),
          ).toEqual(6));
        it('should work with key string', async () =>
          expect(
            await fluent([{ a: 1 }, { a: 11 }, { a: 0 }]).lastAsync('a'),
          ).toEqual({ a: 11 }));
      });
      describe('reduceAndMap', () => {
        it('empty', async () =>
          expect(
            fluent([]).reduceAndMap(
              (a, b) => a + b,
              0,
              (a) => a * 10 + 1,
            ),
          ).toEqual(1));
        it('not empty', async () =>
          expect(
            fluent([1, 2, 3]).reduceAndMap(
              (a, b) => a + b,
              0,
              (a) => a * 10 + 1,
            ),
          ).toEqual(61));
        it('should work with key string', () => {
          expect(
            fluent([1, 2, 3]).reduceAndMap(
              (a, b) => {
                a.a += b;
                return a;
              },
              { a: 0 },
              'a',
            ),
          ).toEqual(6);
        });
      });
      describe('reduceAndMapAsync', () => {
        it('empty', async () =>
          expect(
            await fluent([]).reduceAndMapAsync(
              async (a, b) => a + b,
              0,
              async (a) => a * 10 + 1,
            ),
          ).toEqual(1));
        it('not empty', async () =>
          expect(
            await fluent([1, 2, 3]).reduceAndMapAsync(
              async (a, b) => a + b,
              0,
              async (a) => a * 10 + 1,
            ),
          ).toEqual(61));
        it('should work with key string', async () =>
          expect(
            await fluent([1, 2, 3]).reduceAndMapAsync(
              (a, b) => {
                a.a += b;
                return a;
              },
              { a: 0 },
              'a',
            ),
          ).toEqual(6));
      });
      describe('reduce', () => {
        it('empty', () => {
          expect(fluent([]).reduce((a, b) => a + b, 0)).toEqual(0);
        });
        it('not empty', () => {
          expect(fluent([1, 2, 3]).reduce((a, b) => a + b, 0)).toEqual(6);
        });
        it('with no initializer', () => {
          const result = fluent([1, 2, 3]).reduce((a, b) => a + b);

          expect(result).toEqual(6);
        });
        it('with no initializer and type changing', () => {
          const result = fluent([1, 2, 3]).reduce<string>(
            (a, b) => `${a}:${b}`,
          );

          expect(result).toEqual('1:2:3');
        });

        it('with single element arrays', () => {
          const result = fluent([1]).reduce<string>((a, b) => `${a}:${b}`);

          expect(result).toEqual(1);
        });

        it('with no initializer and type changing', () => {
          const result = fluent([1, 2, 3]).reduce<string>(
            (a, b) => `${a}:${b}`,
          );

          expect(result).toEqual('1:2:3');
        });
      });
      describe('reduceAsync', () => {
        it('empty', async () =>
          expect(
            await fluent([]).reduceAsync(async (a, b) => a + b, 0),
          ).toEqual(0));
        it('not empty', async () =>
          expect(
            await fluent([1, 2, 3]).reduceAsync(async (a, b) => a + b, 0),
          ).toEqual(6));
        it('with no initializer', async () => {
          const result = await fluent([1, 2, 3]).reduceAsync((a, b) => a + b);

          expect(result).toEqual(6);
        });

        it('with single element arrays', async () => {
          const result = await fluent([1]).reduceAsync<string>(
            (a, b) => `${a}:${b}`,
          );

          expect(result).toEqual(1);
        });

        it('with no initializer and type changing', async () => {
          const result = await fluent([1, 2, 3]).reduceAsync<string>(
            (a, b) => `${a}:${b}`,
          );

          expect(result).toEqual('1:2:3');
        });
      });
      const all: ['all', 'every'] = ['all', 'every'];
      all.forEach((func) => {
        describe('all', () => {
          it('empty', async () =>
            expect(fluent([])[func]((a: number) => a % 2 === 0)).toBe(true));
          it('false', async () =>
            expect(fluent([1, 2, 3])[func]((a: number) => a % 2 === 0)).toBe(
              false,
            ));
          it('true', async () =>
            expect(fluent([2, 4, 6])[func]((a: number) => a % 2 === 0)).toBe(
              true,
            ));
          it('should work with key string when result is true', () => {
            expect(fluent([{ a: 1 }, { a: 2 }, { a: 3 }])[func]('a')).toBe(
              true,
            );
          });
          it('should work with key string when result is true', () => {
            expect(fluent([{ a: 1 }, { a: 0 }, { a: 3 }])[func]('a')).toBe(
              false,
            );
          });
        });
      });
      const allAsync: ['allAsync', 'everyAsync'] = ['allAsync', 'everyAsync'];
      allAsync.forEach((func) => {
        describe(func, () => {
          it('empty', async () =>
            expect(
              await fluent([])[func](async (a: number) => a % 2 === 0),
            ).toBe(true));
          it('false', async () =>
            expect(
              await fluent([1, 2, 3])[func](async (a: number) => a % 2 === 0),
            ).toBe(false));
          it('true', async () =>
            expect(
              await fluent([2, 4, 6])[func](async (a: number) => a % 2 === 0),
            ).toBe(true));
          it('should work with key string when result is true', async () =>
            expect(
              await fluent([{ a: 1 }, { a: 2 }, { a: 3 }])[func]('a'),
            ).toBe(true));
          it('should work with key string when result is true', async () =>
            expect(
              await fluent([{ a: 1 }, { a: 0 }, { a: 3 }])[func]('a'),
            ).toBe(false));
        });
      });
      const anys: ['any', 'some'] = ['any', 'some'];
      anys.forEach((func) => {
        describe(func, () => {
          it('empty', async () =>
            expect(fluent([])[func]((a: number) => a % 2 === 0)).toBe(false));
          it('false', async () =>
            expect(fluent([1, 3, 5])[func]((a: number) => a % 2 === 0)).toBe(
              false,
            ));
          it('true', async () =>
            expect(fluent([1, 2, 3])[func]((a: number) => a % 2 === 0)).toBe(
              true,
            ));
          it('should work with key string when result is true', () => {
            expect(fluent([{ a: 1 }, { a: 2 }, { a: 0 }])[func]('a')).toBe(
              true,
            );
          });
          it('should work with key string when result is true', () => {
            expect(fluent([{ a: false }, { a: 0 }, { a: 0 }])[func]('a')).toBe(
              false,
            );
          });
        });
      });
      const anysAsync: ['anyAsync', 'someAsync'] = ['anyAsync', 'someAsync'];
      anysAsync.forEach((func) => {
        describe(func, () => {
          it('empty', async () =>
            expect(
              await fluent([])[func](async (a: number) => a % 2 === 0),
            ).toBe(false));
          it('false', async () =>
            expect(
              await fluent([1, 3, 5])[func](async (a: number) => a % 2 === 0),
            ).toBe(false));
          it('true', async () =>
            expect(
              await fluent([1, 2, 3])[func](async (a: number) => a % 2 === 0),
            ).toBe(true));
          it('should work with key string when result is true', async () =>
            expect(
              await fluent([{ a: 1 }, { a: 2 }, { a: 3 }])[func]('a'),
            ).toBe(true));
          it('should work with key string when result is true', async () =>
            expect(
              await fluent([{ a: false }, { a: 0 }, { a: null }])[func]('a'),
            ).toBe(false));
        });
      });
      describe('contains', () => {
        it('empty', async () =>
          expect(fluent([] as number[]).contains(4)).toBe(false));
        it('false', async () =>
          expect(fluent([1, 3, 5]).contains(4)).toBe(false));
        it('true', async () =>
          expect(fluent([1, 2, 4]).contains(4)).toBe(true));
      });
      describe('toObject', () => {
        it('empty', () => {
          expect(
            fluent([] as Iterable<Person>).toObject(
              (x) => x.gender as string,
              (x) => x.name,
            ),
          ).toEqual({});
        });
        it('not empty', () => {
          expect(
            fluent([
              {
                gender: Gender.Female,
                name: 'name A',
              },
              {
                gender: Gender.NonBinary,
                name: 'name B',
              },
              {
                gender: Gender.Male,
                name: 'name C',
              },
            ]).toObject(
              (x) => x.gender as string,
              (x) => x.name,
            ),
          ).toEqual({
            [Gender.Female]: 'name A',
            [Gender.NonBinary]: 'name B',
            [Gender.Male]: 'name C',
          });
        });
        it('default mapper', () => {
          expect(
            fluent([
              {
                gender: Gender.Female,
                name: 'name A',
              },
              {
                gender: Gender.NonBinary,
                name: 'name B',
              },
              {
                gender: Gender.Male,
                name: 'name C',
              },
            ] as Iterable<Person>).toObject((x) => x.gender as string),
          ).toEqual({
            [Gender.Female]: {
              gender: Gender.Female,
              name: 'name A',
            },
            [Gender.NonBinary]: {
              gender: Gender.NonBinary,
              name: 'name B',
            },
            [Gender.Male]: {
              gender: Gender.Male,
              name: 'name C',
            },
          });
        });
        it('should work with key string key mapper', () => {
          expect(
            fluent([
              {
                gender: Gender.Female,
                name: 'name A',
              },
              {
                gender: Gender.NonBinary,
                name: 'name B',
              },
              {
                gender: Gender.Male,
                name: 'name C',
              },
            ]).toObject('gender', (x) => x.name),
          ).toEqual({
            [Gender.Female]: 'name A',
            [Gender.NonBinary]: 'name B',
            [Gender.Male]: 'name C',
          });
        });
        it('should work with key string key mapper and default value mapper', () => {
          expect(
            fluent([
              {
                gender: Gender.Female,
                name: 'name A',
              },
              {
                gender: Gender.NonBinary,
                name: 'name B',
              },
              {
                gender: Gender.Male,
                name: 'name C',
              },
            ] as Iterable<Person>).toObject('gender'),
          ).toEqual({
            [Gender.Female]: {
              gender: Gender.Female,
              name: 'name A',
            },
            [Gender.NonBinary]: {
              gender: Gender.NonBinary,
              name: 'name B',
            },
            [Gender.Male]: {
              gender: Gender.Male,
              name: 'name C',
            },
          });
        });
        it('should work with key string for key mapper and value mapper', () => {
          expect(
            fluent([
              {
                gender: Gender.Female,
                name: 'name A',
              },
              {
                gender: Gender.NonBinary,
                name: 'name B',
              },
              {
                gender: Gender.Male,
                name: 'name C',
              },
            ] as Iterable<Person>).toObject('gender', 'name'),
          ).toEqual({
            [Gender.Female]: 'name A',
            [Gender.NonBinary]: 'name B',
            [Gender.Male]: 'name C',
          });
        });
        it('should keep last value when having repeated keys and no reducing criteria', () => {
          expect(
            fluent([
              {
                gender: Gender.Female,
                name: 'name A',
              },
              {
                gender: Gender.Female,
                name: 'name B',
              },
              {
                gender: Gender.Male,
                name: 'name C',
              },
            ]).toObject(
              (x) => x.gender as string,
              (x) => x.name,
            ),
          ).toEqual({
            [Gender.Female]: 'name B',
            [Gender.Male]: 'name C',
          });
        });
        it('should keep chosen value when having repeated keys and a reducing criteria', () => {
          expect(
            fluent([
              {
                gender: Gender.Female,
                name: 'name A',
              },
              {
                gender: Gender.Female,
                name: 'name B',
              },
              {
                gender: Gender.Male,
                name: 'name C',
              },
            ]).toObject(
              (x) => x.gender as string,
              (x) => x.name,
              (a, b) => (a < b ? a : b),
            ),
          ).toEqual({
            [Gender.Female]: 'name A',
            [Gender.Male]: 'name C',
          });
        });
      });
      describe('toObjectAsync', () => {
        it('empty', async () =>
          expect(
            await fluent([] as Iterable<Person>).toObjectAsync(
              async (x) => x.gender as string,
              async (x) => x.name,
            ),
          ).toEqual({}));
        it('not empty', async () =>
          expect(
            await fluent([
              {
                gender: Gender.Female,
                name: 'name A',
              },
              {
                gender: Gender.NonBinary,
                name: 'name B',
              },
              {
                gender: Gender.Male,
                name: 'name C',
              },
            ]).toObjectAsync(
              async (x) => x.gender as string,
              async (x) => x.name,
            ),
          ).toEqual({
            [Gender.Female]: 'name A',
            [Gender.NonBinary]: 'name B',
            [Gender.Male]: 'name C',
          }));
        it('should work with key string key mapper', async () =>
          expect(
            await fluent([
              {
                gender: Gender.Female,
                name: 'name A',
              },
              {
                gender: Gender.NonBinary,
                name: 'name B',
              },
              {
                gender: Gender.Male,
                name: 'name C',
              },
            ]).toObjectAsync('gender', (x) => x.name),
          ).toEqual({
            [Gender.Female]: 'name A',
            [Gender.NonBinary]: 'name B',
            [Gender.Male]: 'name C',
          }));
        it('should work with key string key mapper and default value mapper', async () =>
          expect(
            await fluent([
              {
                gender: Gender.Female,
                name: 'name A',
              },
              {
                gender: Gender.NonBinary,
                name: 'name B',
              },
              {
                gender: Gender.Male,
                name: 'name C',
              },
            ] as Iterable<Person>).toObjectAsync('gender'),
          ).toEqual({
            [Gender.Female]: {
              gender: Gender.Female,
              name: 'name A',
            },
            [Gender.NonBinary]: {
              gender: Gender.NonBinary,
              name: 'name B',
            },
            [Gender.Male]: {
              gender: Gender.Male,
              name: 'name C',
            },
          }));
        it('should work with key string for key mapper and value mapper', async () =>
          expect(
            await fluent([
              {
                gender: Gender.Female,
                name: 'name A',
              },
              {
                gender: Gender.NonBinary,
                name: 'name B',
              },
              {
                gender: Gender.Male,
                name: 'name C',
              },
            ] as Iterable<Person>).toObjectAsync('gender', 'name'),
          ).toEqual({
            [Gender.Female]: 'name A',
            [Gender.NonBinary]: 'name B',
            [Gender.Male]: 'name C',
          }));
      });
      describe('top', () => {
        it('should return the max number from a numeric array when no parameter is informed', () => {
          expect(fluent([1, 2, 3]).top(identity, (a, b) => a - b)).toBe(3);
        });
        it('should return the max number from a transformation when a parameter is informed', () => {
          expect(
            fluent([1, 2, 3]).top(
              (x) => 3 - x,
              (a, b) => a - b,
            ),
          ).toBe(1);
        });
        it('should work with key string', () => {
          expect(
            fluent([{ a: 3 }, { a: 1 }, { a: 2 }]).top('a', (a, b) => a - b),
          ).toEqual({ a: 3 });
        });
      });
      describe('max', () => {
        it('should return the max number from a numeric array when no parameter is informed', () => {
          expect(fluent([1, 2, 3]).max()).toBe(3);
        });
        it('should return the max number from a transformation when a parameter is informed', () => {
          expect(fluent([1, 2, 3]).max((x) => 3 - x)).toBe(1);
        });
        it('should return the max value from an array of multiple non numeric elements', () => {
          expect(fluent(['a', 'b', 'c', 'd', 'e']).max()).toEqual('e');
        });
        it('not assuring order', () => {
          expect(fluent([1, 2, 3, 4, 3, 5]).max(identity)).toBe(5);
        });
        it('assuring order', () => {
          expect(o(fluent([1, 2, 3, 4, 3, 5])).max(identity)).toBe(4);
        });
        it('assuring descending order', () => {
          expect(fluent([1, 2, 3, 4, 3, 5]).max(od(identity))).toBe(1);
        });
        it('should work with key string', () => {
          expect(fluent([{ a: 1 }, { a: 3 }, { a: 2 }]).max('a')).toEqual({
            a: 3,
          });
        });
      });
      describe('hasExactly', () => {
        it('false', () => {
          expect(fluent([1, 2, 3]).hasExactly(2)).toBe(false);
        });
        it('true', () => {
          expect(fluent([1, 2, 3]).hasExactly(3)).toBe(true);
        });
      });
      describe('hasLessThan', () => {
        it('false', () => {
          expect(fluent([1, 2, 3]).hasLessThan(3)).toBe(false);
        });
        it('true', () => {
          expect(fluent([1, 2, 3]).hasLessThan(4)).toBe(true);
        });
      });
      describe('hasLessOrExactly', () => {
        it('false', () => {
          expect(fluent([1, 2, 3]).hasLessOrExactly(2)).toBe(false);
        });
        it('true', () => {
          expect(fluent([1, 2, 3]).hasLessOrExactly(3)).toBe(true);
        });
        it('true for less', () => {
          expect(fluent([1, 2, 3]).hasLessOrExactly(4)).toBe(true);
        });
      });
      describe('hasMoreThan', () => {
        it('false', () => {
          expect(fluent([1, 2, 3]).hasMoreThan(3)).toBe(false);
        });
        it('true', () => {
          expect(fluent([1, 2, 3]).hasMoreThan(2)).toBe(true);
        });
      });
      describe('hasMoreOrExactly', () => {
        it('false', () => {
          expect(fluent([1, 2, 3]).hasMoreOrExactly(4)).toBe(false);
        });
        it('true', () => {
          expect(fluent([1, 2, 3]).hasMoreOrExactly(3)).toBe(true);
        });
        it('true for more', () => {
          expect(fluent([1, 2, 3]).hasMoreOrExactly(2)).toBe(true);
        });
      });
      describe('execute', () => {
        it('should run what is passed', () => {
          const action = jest.fn();

          const result = fluent([1, 2, 3]).execute(action).toArray();

          jestExpect(action).toHaveCallsLike([1], [2], [3]);
          expect(result).toEqual([1, 2, 3]);
        });
      });
      describe('executeAsync', () => {
        it('should run what is passed', async () => {
          const action = jest.fn();

          const result = await fluent([1, 2, 3]).executeAsync(action).toArray();

          jestExpect(action).toHaveCallsLike([1], [2], [3]);
          expect(result).toEqual([1, 2, 3]);
        });
      });
    });

    describe('asynchronous', () => {
      describe('basics work', () => {
        it('can convert to fluent', async () =>
          expect(await fluent(subject).toAsync().toArray()).toEqual(data));
      });
    });
  };
  describe(
    'on array',
    suite(() => data),
  );
  describe('on generator', suite(generator));

  describe('waitAll', () => {
    it('should return a promises with resolves when all promises are resolved', async () => {
      let resolved = 0;

      const promise = fluent(interval(1, 10)).waitAll(
        (x) =>
          new Promise(async (resolve) => {
            await delay(1);
            resolved++;
            resolve(x);
          }),
      );

      expect(resolved).toBe(0);
      const result = await promise;
      expect(resolved).toBe(10);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('should return a promises with resolves when all promises are resolved using a key string', async () => {
      let resolved = 0;

      const promise = fluent(interval(1, 10))
        .map((x) => ({
          p: new Promise(async (resolve) => {
            await delay(1);
            resolved++;
            resolve(x);
          }),
        }))
        .waitAll('p');

      expect(resolved).toBe(0);
      const result = await promise;
      expect(resolved).toBe(10);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  it('should be identifiable as fluent', () => {
    const result: any = fluent(fluent([1, 2, 3]));

    expect(result).toBeInstanceOf(FluentClass);
  });
});
