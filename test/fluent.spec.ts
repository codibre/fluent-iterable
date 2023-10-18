import { o, fluent, identity, interval, od, getGroupingDistinct } from '../src';
import expect, { flatMap, pick } from './tools';
import delay from 'delay';
import 'chai-callslike';
import { ObjectReadableMock } from 'stream-mock';
import { stub } from 'chai-callslike';
import { FluentClass } from '../src/fluent-class';

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  NonBinary = 'NonBinary',
}

export interface Person {
  name: string;
  gender?: Gender;
  emails: string[];
}

export const data: Person[] = [
  {
    name: '0: w/o gender & 0 emails',
    emails: [],
  },
  {
    name: '1: w/o gender & 1 emails',
    emails: ['1@email.com'],
  },
  {
    name: '2: w/o gender & 2 emails',
    emails: ['2/1@email.com', '2/2@email.com'],
  },
  {
    name: '3: male & 0 emails',
    gender: Gender.Male,
    emails: [],
  },
  {
    name: '4: female & 0 emails',
    gender: Gender.Female,
    emails: [],
  },
  {
    name: '5: non-binary & 0 emails',
    gender: Gender.NonBinary,
    emails: [],
  },
  {
    name: '6: male & 1 emails',
    gender: Gender.Male,
    emails: ['6@email.com'],
  },
  {
    name: '7: female & 1 emails',
    gender: Gender.Female,
    emails: ['7@email.com'],
  },
  {
    name: '8: non-binary & 1 emails',
    gender: Gender.NonBinary,
    emails: ['8@email.com'],
  },
  {
    name: '9: male & 2 emails',
    gender: Gender.Male,
    emails: ['9/1@email.com', '9/2@email.com'],
  },
  {
    name: '10: female & 2 emails',
    gender: Gender.Female,
    emails: ['10/1@email.com', '10/2@email.com'],
  },
  {
    name: '11: non-binary & 2 emails',
    gender: Gender.NonBinary,
    emails: ['11/1@email.com', '11/2@email.com'],
  },
];

export const picker = (...indexes: number[]): Person[] =>
  pick(data, ...indexes);

export function* generator(): Iterable<Person> {
  yield* data;
}

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
      context('basics work', () => {
        it('wrapping does not fail', () => {
          fluent(subject);
        });
        it('can iterate through', () => {
          let idx = 0;
          for (const person of fluent(subject)) {
            expect(person).to.equal(data[idx++]);
          }
        });
        it('can convert to array', () => {
          expect(fluent(subject).toArray()).to.eql(data);
        });
        it('should iterate with forEach', () => {
          let sum = 0;
          fluent([1, 2, 3]).forEach((x) => (sum += x));
          expect(sum).to.be.eq(6);
        });
        it('should serialize as an array', () => {
          expect(JSON.stringify(fluent([1, 2, 3]).map((x) => x * 2))).to.be.eql(
            '[2,4,6]',
          );
        });
      });
      context('withIndex', () => {
        it('should return Indexed instances from informed array', () => {
          expect(fluent(['a', 'b', 'c']).withIndex().toArray()).to.be.eql([
            { idx: 0, value: 'a' },
            { idx: 1, value: 'b' },
            { idx: 2, value: 'c' },
          ]);
        });
      });
      context('takeWhile', () => {
        it('works with initially not true statement', () =>
          expect(
            fluent(subject)
              .takeWhile((p) => p.emails.length > 0)
              .toArray(),
          ).to.be.empty);
        it('works with eventually not true statement', () => {
          expect(
            fluent(subject)
              .takeWhile((p) => p.gender === undefined)
              .toArray(),
          ).to.eql(data.slice(0, 3));
        });
        it('works with always true statement', () => {
          expect(
            fluent(subject)
              .takeWhile((p) => p.name.length > 0)
              .toArray(),
          ).to.eql(data);
        });
        it('should work with key string parameter', () => {
          expect(
            fluent([{ a: 1 }, { a: 2 }, { a: 0 }, { a: 1 }])
              .takeWhile('a')
              .toArray(),
          ).to.eql([{ a: 1 }, { a: 2 }]);
        });
      });
      context('takeWhileAsync', () => {
        it('works with initially not true statement', async () =>
          expect(
            await fluent(subject)
              .takeWhileAsync(async (p) => p.emails.length > 0)
              .toArray(),
          ).to.be.empty);
        it('works with eventually not true statement', async () => {
          expect(
            await fluent(subject)
              .takeWhileAsync(async (p) => p.gender === undefined)
              .toArray(),
          ).to.eql(data.slice(0, 3));
        });
        it('works with always true statement', async () => {
          expect(
            await fluent(subject)
              .takeWhileAsync(async (p) => p.name.length > 0)
              .toArray(),
          ).to.eql(data);
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
          ).to.eql([{ a: 1 }, { a: 2 }]);
        });
      });
      context('take', () => {
        it('works with negative count', () =>
          expect(fluent(subject).take(-5).toArray()).to.be.empty);
        it('works with zero count', () =>
          expect(fluent(subject).take(0).toArray()).to.be.empty);
        it('works with one count', () =>
          expect(fluent(subject).take(1).toArray()).to.eql(data.slice(0, 1)));
        it('works with count < length', () =>
          expect(fluent(subject).take(5).toArray()).to.eql(data.slice(0, 5)));
        it('works with count = length', () =>
          expect(fluent(subject).take(data.length).toArray()).to.eql(data));
        it('works with count > length', () =>
          expect(
            fluent(subject)
              .take(data.length * 2)
              .toArray(),
          ).to.eql(data));
      });
      context('skipWhile', () => {
        it('works with initially not true statement', () =>
          expect(
            fluent(subject)
              .skipWhile((p) => p.emails.length > 0)
              .toArray(),
          ).to.eql(data));
        it('works with eventually not true statement', () =>
          expect(
            fluent(subject)
              .skipWhile((p) => p.gender === undefined)
              .toArray(),
          ).to.eql(data.slice(3)));
        it('works with always true statement', () =>
          expect(
            fluent(subject)
              .skipWhile((p) => p.name.length > 0)
              .toArray(),
          ).to.be.empty);
        it('works with alternating true statement', () =>
          expect(
            fluent(subject)
              .skipWhile((p) => p.emails.length === 0)
              .toArray(),
          ).to.eql(data.slice(1)));
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
          ).to.eql([
            { a: 0, b: 3 },
            { a: 1, b: 4 },
          ]);
        });
      });
      context('skipWhileAsync', () => {
        it('works with initially not true statement', async () =>
          expect(
            await fluent(subject)
              .skipWhileAsync(async (p) => p.emails.length > 0)
              .toArray(),
          ).to.eql(data));
        it('works with eventually not true statement', async () =>
          expect(
            await fluent(subject)
              .skipWhileAsync(async (p) => p.gender === undefined)
              .toArray(),
          ).to.eql(data.slice(3)));
        it('works with always true statement', async () =>
          expect(
            await fluent(subject)
              .skipWhileAsync(async (p) => p.name.length > 0)
              .toArray(),
          ).to.be.empty);
        it('works with alternating true statement', async () =>
          expect(
            await fluent(subject)
              .skipWhileAsync(async (p) => p.emails.length === 0)
              .toArray(),
          ).to.eql(data.slice(1)));
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
          ).to.eql([3, 4]);
        });
      });
      context('skip', () => {
        it('works with negative count', () =>
          expect(fluent(subject).skip(-5).toArray()).to.eql(data));
        it('works with zero count', () =>
          expect(fluent(subject).skip(0).toArray()).to.eql(data));
        it('works with one count', () =>
          expect(fluent(subject).skip(1).toArray()).to.eql(data.slice(1)));
        it('works with count < length', () =>
          expect(fluent(subject).skip(5).toArray()).to.eql(data.slice(5)));
        it('works with count = length', () =>
          expect(fluent(subject).skip(data.length).toArray()).to.be.empty);
        it('works with count > length', () =>
          expect(
            fluent(subject)
              .skip(data.length * 2)
              .toArray(),
          ).to.be.empty);
      });
      describe('map', () => {
        it('maps to undefined', () => {
          const res = fluent(subject)
            .map(() => undefined)
            .toArray();
          expect(res).to.length(data.length);
          res.forEach((item) => expect(item).to.be.undefined);
        });
        it('maps to projection', () => {
          const res = fluent(subject)
            .map((p) => p.name)
            .toArray();
          expect(res).to.length(data.length);
          let idx = 0;
          for (const item of res) {
            expect(item).to.equal(data[idx++].name);
          }
        });
        it('should map symbol properties', () => {
          const mySymbol = Symbol('test');

          const res = fluent([{ [mySymbol]: 123 }, { [mySymbol]: 456 }])
            .map(mySymbol)
            .toArray();

          expect(res).to.be.eql([123, 456]);
        });
        it('should map numeric properties', () => {
          const res = fluent([[123], [456]])
            .map(0)
            .toArray();

          expect(res).to.be.eql([123, 456]);
        });
        it('should work with key string', () => {
          const res = fluent(subject)
            .map((p) => p.name)
            .toArray();
          expect(res).to.length(data.length);
          let idx = 0;
          for (const item of res) {
            expect(item).to.equal(data[idx++].name);
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
          ).to.eql([1, 2, 3, 4]);
        });
      });
      describe('mapAsync', () => {
        it('maps to undefined', async () => {
          const res = await fluent(subject)
            .mapAsync(async () => undefined)
            .toArray();
          expect(res).to.length(data.length);
          res.forEach((item) => expect(item).to.be.undefined);
        });
        it('maps to projection', async () => {
          const res = await fluent(subject)
            .mapAsync(async (p) => p.name)
            .toArray();
          expect(res).to.length(data.length);
          let idx = 0;
          for (const item of res) {
            expect(item).to.equal(data[idx++].name);
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
          ).to.eql([1, 2, 3, 4]);
        });
      });
      describe('filter', () => {
        it('with always false predicate', () =>
          expect(
            fluent(subject)
              .filter(() => false)
              .toArray(),
          ).to.be.empty);
        it('with always true predicate', () =>
          expect(
            fluent(subject)
              .filter(() => true)
              .toArray(),
          ).to.eql(data));
        it('with alternating predicate', () =>
          expect(
            fluent(subject)
              .filter((p) => p.gender === Gender.Female)
              .toArray(),
          ).to.eql(picker(4, 7, 10)));
        it('not assuring order', () => {
          const call = stub();
          expect(
            fluent([1, 2, 3, 4, 3])
              .filter((p) => {
                call();
                return 2 <= p && p <= 3;
              })
              .toArray(),
          ).to.eql([2, 3, 3]);
          expect(call).to.have.callCount(5);
        });
        it('assuring order', () => {
          const call = stub();
          expect(
            fluent([1, 2, 3, 4, 3])
              .filter(
                o((p) => {
                  call();
                  return 2 <= p && p <= 3;
                }),
              )
              .toArray(),
          ).to.eql([2, 3]);
          expect(call).to.have.callCount(4);
        });
        it('assuring order descending', () => {
          const call = stub();
          expect(
            fluent([1, 2, 3, 4, 3])
              .filter(
                od((p) => {
                  call();
                  return 2 <= p && p <= 3;
                }),
              )
              .toArray(),
          ).to.eql([2, 3]);
          expect(call).to.have.callCount(4);
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
          ).to.eql([2, 4]);
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
          ).to.be.eq('2.00 and 1');
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
          ).to.be.eq('2.00 and 1');
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
          ).to.be.eql(['1.00 and 3', '2.00 and 1']);
        });
        it('should apply type guard properly', () => {
          const test: (number | string)[] = [1, 'b', 2, 'c', 3];
          const result = fluent(test)
            .filter((a): a is number => typeof a === 'number')
            .toArray();

          expect(result[0] + 1).to.be.eq(2);
        });
      });
      describe('filterAsync', () => {
        it('with always false predicate', async () =>
          expect(
            await fluent(subject)
              .filterAsync(async () => false)
              .toArray(),
          ).to.be.empty);
        it('with always true predicate', async () =>
          expect(
            await fluent(subject)
              .filterAsync(async () => true)
              .toArray(),
          ).to.eql(data));
        it('with alternating predicate', async () =>
          expect(
            await fluent(subject)
              .filterAsync(async (p) => p.gender === Gender.Female)
              .toArray(),
          ).to.eql(picker(4, 7, 10)));
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
          ).to.eql([2, 4]);
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
          ).to.be.eq('2.00 and 1');
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
          ).to.be.eq('2.00 and 1');
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
          ).to.be.eql(['1.00 and 3', '2.00 and 1']);
        });
      });
      describe('partition', () => {
        it('should divide result in blocks of the specified size', () => {
          expect(
            fluent([1, 2, 3, 4, 5, 6, 7, 8])
              .partition(3)
              .map((x) => x.toArray())
              .toArray(),
          ).to.be.eql([
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
          ).to.be.eql([
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
          expect(error).to.be.instanceOf(Error);
        });
      });
      describe('append', () => {
        it('with empty iterable', () =>
          expect(
            fluent([] as Person[])
              .append(additionalPerson)
              .toArray(),
          ).to.eql([additionalPerson]));
        it('with non-empty iterable', () =>
          expect(fluent(subject).append(additionalPerson).toArray()).to.eql([
            ...data,
            additionalPerson,
          ]));
      });
      describe('prepend', () => {
        it('with empty iterable', () =>
          expect(
            fluent([] as Person[])
              .prepend(additionalPerson)
              .toArray(),
          ).to.eql([additionalPerson]));
        it('with non-empty iterable', () =>
          expect(fluent(subject).prepend(additionalPerson).toArray()).to.eql([
            additionalPerson,
            ...data,
          ]));
      });
      describe('concat', () => {
        it('one empty array', () =>
          expect(fluent(subject).concat([]).toArray()).to.eql(data));
        it('two empty arrays', () =>
          expect(fluent(subject).concat([], []).toArray()).to.eql(data));
        it('one non-empty arrays', () =>
          expect(fluent(subject).concat([additionalPerson]).toArray()).to.eql([
            ...data,
            additionalPerson,
          ]));
        it('two non-empty arrays', () =>
          expect(
            fluent(subject).concat([additionalPerson], data).toArray(),
          ).to.eql([...data, additionalPerson, ...data]));
        it('one empty and one non-empty arrays', () =>
          expect(
            fluent(subject).concat([], [additionalPerson]).toArray(),
          ).to.eql([...data, additionalPerson]));
      });

      describe('concatEmitter', () => {
        it('one empty array', async () =>
          expect(
            await fluent(subject)
              .concatEmitter(new ObjectReadableMock([]))
              .toArray(),
          ).to.eql(data));
        it('one non-empty arrays', async () =>
          expect(
            await fluent(subject)
              .concatEmitter(new ObjectReadableMock([additionalPerson]))
              .toArray(),
          ).to.eql([...data, additionalPerson]));
      });
      describe('repeat', () => {
        it('negative number of times', () =>
          expect(fluent(subject).repeat(-5).toArray()).to.be.empty);
        it('zero times', () =>
          expect(fluent(subject).repeat(0).toArray()).to.be.empty);
        it('once', () =>
          expect(fluent(subject).repeat(1).toArray()).to.eql(data));
        it('twice', () =>
          expect(fluent(subject).repeat(2).toArray()).to.eql([
            ...data,
            ...data,
          ]));
        it('three times', () =>
          expect(fluent(subject).repeat(3).toArray()).to.eql([
            ...data,
            ...data,
            ...data,
          ]));
      });
      const flattens: ['flatten', 'flatMap'] = ['flatten', 'flatMap'];
      flattens.forEach((func) => {
        describe(func, () => {
          it('empty array', () =>
            expect(
              fluent([] as [][])
                [func]()
                .toArray(),
            ).to.be.empty);
          it('already flat fails', () =>
            expect(() =>
              fluent(subject as [][])
                [func]()
                .toArray(),
            ).to.throw());
          it('not flat', () =>
            expect(
              fluent([[1, 2], [3, 4, 5], [], [6]])
                [func]()
                .toArray(),
            ).to.eql([1, 2, 3, 4, 5, 6]));
          it('with mapper', () =>
            expect(
              fluent(subject)
                [func]((p) => p.emails)
                .toArray(),
            ).to.eql(
              flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails),
            ));
          it('should work with key string', () =>
            expect(fluent(subject)[func]('emails').toArray()).to.eql(
              flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails),
            ));
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
            ).to.be.empty);
          it('not flat', async () =>
            expect(
              await fluent([[1, 2], [3, 4, 5], [], [6]])
                [func](async (x) => x)
                .toArray(),
            ).to.eql([1, 2, 3, 4, 5, 6]));
          it('should work with key string', async () =>
            expect(await fluent(subject)[func]('emails').toArray()).to.eql(
              flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails),
            ));
        });
      });
      describe('sort', () => {
        it('empty', () => expect(fluent([]).sort().toArray()).to.be.empty);
        it('flat numbers', () =>
          expect(fluent([6, 4, 5, 3, 2, 1]).sort().toArray()).to.eql([
            1, 2, 3, 4, 5, 6,
          ]));
        it('flat numbers with reversed comparison', () =>
          expect(
            fluent([6, 4, 5, 3, 2, 1])
              .sort((a, b) => b - a)
              .toArray(),
          ).to.eql([6, 5, 4, 3, 2, 1]));
      });
      describe('group', () => {
        it('empty', () =>
          expect(
            fluent([] as Person[])
              .group((p) => p.gender)
              .toArray(),
          ).to.be.empty);
        it('non-empty', () => {
          const groups = fluent(subject)
            .group((p) => p.gender)
            .toArray();
          expect(groups.length).to.eql(4);
          expect(groups.map((grp) => grp.key)).to.have.members([
            undefined,
            Gender.Male,
            Gender.Female,
            Gender.NonBinary,
          ]);
          for (const grp of groups) {
            expect(grp.values.toArray()).to.eql(
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
          expect(groups.length).to.eql(2);
          expect(groups.map((grp) => grp.key)).to.have.members([1, 2]);

          groups.forEach(({ key, values }) => {
            expect(values.toArray()).to.eql(items.filter((x) => x.k === key));
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
          expect(groups.length).to.eql(3);
          expect(groups.map((grp) => grp.key)).to.have.members([1, 2, 1]);

          groups.forEach(({ values }, i) => {
            values.withIndex().forEach(({ value, idx }) => {
              expect(value).to.be.eq(items[i * 2 + idx]);
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
          expect(groups.length).to.eql(3);
          expect(groups.map((grp) => grp.key)).to.have.members([1, 2, 1]);

          groups.forEach(({ values }, i) => {
            values.withIndex().forEach(({ value, idx }) => {
              expect(value).to.be.eq(items[i * 2 + idx]);
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
          expect(groups.length).to.eql(3);
          expect(groups.map((grp) => grp.key)).to.have.members([1, 2, 1]);

          groups.forEach(({ values }, i) => {
            values.withIndex().forEach(({ value, idx }) => {
              expect(value).to.be.eql(expected[i * 2 + idx].v.toString());
            });
          });
        });
        it('should work with key string', () => {
          const groups = fluent(subject).group('gender').toArray();
          expect(groups.length).to.eql(4);
          expect(groups.map((grp) => grp.key)).to.have.members([
            undefined,
            Gender.Male,
            Gender.Female,
            Gender.NonBinary,
          ]);
          for (const grp of groups) {
            expect(grp.values.toArray()).to.eql(
              data.filter((p) => p.gender === grp.key),
            );
          }
        });
        it('should work with transformation expression', () => {
          const groups = fluent([1, 2, 2, 3, 4, 4, 5, 5, 5])
            .group((x) => x % 2, getGroupingDistinct(identity))
            .toArray();
          expect(groups.length).to.eql(2);
          expect(groups.map((grp) => grp.key)).to.have.members([0, 1]);
          expect(
            groups.find(({ key }) => key === 0)!.values.toArray(),
          ).to.be.eql([2, 4]);
          expect(
            groups.find(({ key }) => key === 1)!.values.toArray(),
          ).to.be.eql([1, 3, 5]);
        });
      });
      describe('groupAsync', () => {
        it('empty', async () =>
          expect(
            await fluent([] as Person[])
              .groupAsync(async (p) => p.gender)
              .toArray(),
          ).to.be.empty);
        it('non-empty', async () => {
          const groups = await fluent(subject)
            .groupAsync(async (p) => p.gender)
            .toArray();
          expect(groups.length).to.eql(4);
          expect(groups.map((grp) => grp.key)).to.have.members([
            undefined,
            Gender.Male,
            Gender.Female,
            Gender.NonBinary,
          ]);
          for (const grp of groups) {
            expect(grp.values.toArray()).to.eql(
              data.filter((p) => p.gender === grp.key),
            );
          }
        });
        it('should work with key string', async () => {
          const groups = await fluent(subject).groupAsync('gender').toArray();
          expect(groups.length).to.eql(4);
          expect(groups.map((grp) => grp.key)).to.have.members([
            undefined,
            Gender.Male,
            Gender.Female,
            Gender.NonBinary,
          ]);
          for (const grp of groups) {
            expect(grp.values.toArray()).to.eql(
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
          expect(groups.length).to.eql(3);
          expect(groups.map((grp) => grp.key)).to.have.members([1, 2, 1]);

          groups.forEach(({ values }, i) => {
            values.withIndex().forEach(({ value, idx }) => {
              expect(value).to.be.eql(expected[i * 2 + idx].v.toString());
            });
          });
        });
        it('should work with distinct expression', async () => {
          const groups = await fluent([1, 2, 2, 3, 4, 4, 5, 5, 5])
            .groupAsync((x) => x % 2, getGroupingDistinct(identity))
            .toArray();
          expect(groups.length).to.eql(2);
          expect(groups.map((grp) => grp.key)).to.have.members([0, 1]);
          expect(
            groups.find(({ key }) => key === 0)!.values.toArray(),
          ).to.be.eql([2, 4]);
          expect(
            groups.find(({ key }) => key === 1)!.values.toArray(),
          ).to.be.eql([1, 3, 5]);
        });
      });
      describe('avg', () => {
        it('empty', () => expect(fluent([]).avg()).to.eql(NaN));
        it('one element', () => expect(fluent([2]).avg()).to.equal(2));
        it('multiple elements', () =>
          expect(fluent([2, 3, 4, 5]).avg()).to.equal(3.5));
        it('multiple elements with predicate', () =>
          expect(fluent(subject).avg((x) => x.emails.length)).to.equal(1));
        it('should work with key string', () =>
          expect(fluent([{ a: 1 }, { a: 2 }, { a: 3 }]).avg('a')).to.equal(2));
      });
      describe('min', () => {
        it('empty', () => expect(fluent([]).min()).to.eql(undefined));
        it('one element', () => expect(fluent([2]).min()).to.equal(2));
        it('multiple elements', () =>
          expect(fluent([1, 3, 4, 5]).min()).to.equal(1));
        it('multiple non numeric elements', () =>
          expect(fluent(['a', 'b', 'c', 'd', 'e']).min()).to.equal('a'));
        it('multiple elements with predicate', () =>
          expect(fluent(subject).min((x) => x.emails.length)).to.eql({
            emails: [],
            name: '0: w/o gender & 0 emails',
          }));
        it('not assuring order', () => {
          expect(fluent([5, 4, 3, 4, 1]).min()).to.be.eq(1);
        });
        it('assuring order', () => {
          expect(fluent([5, 4, 3, 4, 1]).min(o(identity))).to.be.eq(5);
        });
        it('assuring descending order', () => {
          expect(fluent([5, 4, 3, 4, 1]).min(od(identity))).to.be.eq(3);
        });
        it('should work with key string', () =>
          expect(fluent([{ a: 1 }, { a: 2 }, { a: 3 }]).min('a')).to.eql({
            a: 1,
          }));
      });
      describe('count', () => {
        it('empty', () => expect(fluent([]).count()).to.equal(0));
        it('one element', () => expect(fluent([0]).count()).to.equal(1));
        it('multiple elements', () =>
          expect(fluent(subject).count()).to.equal(data.length));
        it('multiple elements with predicate', () =>
          expect(fluent(subject).count((x) => x.emails.length > 0)).to.equal(
            8,
          ));
        it('not assuring order', () =>
          expect(fluent([1, 2, 4, 5, 6]).count((x) => x % 2 === 0)).to.equal(
            3,
          ));
        it('assuring order', () =>
          expect(fluent([1, 2, 4, 5, 6]).count(o((x) => x % 2 === 0))).to.equal(
            2,
          ));
        it('assuring descending order', () =>
          expect(fluent([1, 2, 4, 5, 6]).count(o((x) => x % 2 === 0))).to.equal(
            2,
          ));
        it('should work with key string', () =>
          expect(fluent([{ a: 1 }, { a: 2 }, { a: 0 }]).count('a')).to.equal(
            2,
          ));
      });
      describe('countAsync', () => {
        it('empty', async () =>
          expect(await fluent([]).countAsync(async () => true)).to.equal(0));
        it('one element', async () =>
          expect(await fluent([0]).countAsync(async (x) => x === 0)).to.equal(
            1,
          ));
        it('multiple elements', async () =>
          expect(
            await fluent(subject).countAsync(async (x) => x.emails.length > 0),
          ).to.equal(8));
        it('should work with key string', async () =>
          expect(
            await fluent([{ a: 1 }, { a: 0 }, { a: 3 }]).countAsync('a'),
          ).to.equal(2));
      });
      describe('join', () => {
        it('empty', () => expect(fluent([]).join('-')).to.be.eq(''));
        it('one', () => expect(fluent(['1']).join('-')).to.be.equal('1'));
        it('two', () =>
          expect(fluent(['1', '2']).join('-')).to.be.equal('1-2'));
        it('many with predicate', () =>
          expect(fluent(['1', '2', '3']).join('-', (x) => `a${x}`)).to.be.equal(
            'a1-a2-a3',
          ));
        it('should work using key string', () =>
          expect(
            fluent([{ a: '1' }, { a: '2' }, { a: '3' }]).join('-', 'a'),
          ).to.be.equal('1-2-3'));
      });
      describe('joinAsync', () => {
        it('many with predicate', async () =>
          expect(
            await fluent(['1', '2', '3']).joinAsync('-', (x) => `a${x}`),
          ).to.be.equal('a1-a2-a3'));
        it('should work using key string', async () =>
          expect(
            await fluent([{ a: '1' }, { a: '2' }, { a: '3' }]).joinAsync(
              '-',
              'a',
            ),
          ).to.be.equal('1-2-3'));
      });
      describe('first', () => {
        it('empty', () => expect(fluent([]).first()).to.be.undefined);
        it('not empty', () => expect(fluent([3, 1]).first()).to.be.equal(3));
        it('with predicate', () =>
          expect(fluent([3, 1, 2, 6]).first((x) => x % 2 === 0)).to.be.equal(
            2,
          ));
        it('should work with key string', () =>
          expect(fluent([{ a: 0 }, { a: 7 }, { a: 3 }]).first('a')).to.eql({
            a: 7,
          }));
      });
      describe('firstAsync', () => {
        it('empty', async () =>
          expect(await fluent([]).firstAsync(async (x) => x)).to.be.undefined);
        it('not empty', async () =>
          expect(
            await fluent([3, 1, 2, 6]).firstAsync(async (x) => x % 2 === 0),
          ).to.be.equal(2));
        it('should work with key string', async () =>
          expect(
            await fluent([{ a: 0 }, { a: 9 }, { a: 3 }]).firstAsync('a'),
          ).to.eql({ a: 9 }));
      });
      describe('last', () => {
        it('empty', () => expect(fluent([]).last()).to.be.undefined);
        it('not empty', () => expect(fluent([3, 1]).last()).to.be.equal(1));
        it('with predicate, not assuring order', () =>
          expect(
            fluent([3, 1, 2, 6, 3, 8]).last((x) => x % 2 === 0),
          ).to.be.equal(8));
        it('assuring order', () =>
          expect(
            fluent([3, 1, 2, 6, 3, 8]).last(o((x) => x % 2 === 0)),
          ).to.be.equal(6));
        it('assuring order descending', () =>
          expect(
            fluent([3, 1, 2, 6, 3, 8]).last(od((x) => x % 2 === 0)),
          ).to.be.equal(6));
        it('should work with key string', () =>
          expect(fluent([{ a: 1 }, { a: 11 }, { a: 0 }]).last('a')).to.eql({
            a: 11,
          }));
      });

      describe('lastAsync', () => {
        it('empty', async () =>
          expect(await fluent([]).lastAsync(async (x) => x)).to.be.undefined);
        it('not empty', async () =>
          expect(
            await fluent([3, 1, 2, 6, 7]).lastAsync(async (x) => x % 2 === 0),
          ).to.be.equal(6));
        it('should work with key string', async () =>
          expect(
            await fluent([{ a: 1 }, { a: 11 }, { a: 0 }]).lastAsync('a'),
          ).to.eql({ a: 11 }));
      });
      describe('reduceAndMap', () => {
        it('empty', async () =>
          expect(
            fluent([]).reduceAndMap(
              (a, b) => (a += b),
              0,
              (a) => a * 10 + 1,
            ),
          ).to.be.equal(1));
        it('not empty', async () =>
          expect(
            fluent([1, 2, 3]).reduceAndMap(
              (a, b) => (a += b),
              0,
              (a) => a * 10 + 1,
            ),
          ).to.be.equals(61));
        it('should work with key string', () =>
          expect(
            fluent([1, 2, 3]).reduceAndMap(
              (a, b) => {
                a.a += b;
                return a;
              },
              { a: 0 },
              'a',
            ),
          ).to.be.equals(6));
      });
      describe('reduceAndMapAsync', () => {
        it('empty', async () =>
          expect(
            await fluent([]).reduceAndMapAsync(
              async (a, b) => (a += b),
              0,
              async (a) => a * 10 + 1,
            ),
          ).to.be.equal(1));
        it('not empty', async () =>
          expect(
            await fluent([1, 2, 3]).reduceAndMapAsync(
              async (a, b) => (a += b),
              0,
              async (a) => a * 10 + 1,
            ),
          ).to.be.equals(61));
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
          ).to.be.equals(6));
      });
      describe('reduce', () => {
        it('empty', async () =>
          expect(fluent([]).reduce((a, b) => (a += b), 0)).to.be.equal(0));
        it('not empty', async () =>
          expect(fluent([1, 2, 3]).reduce((a, b) => (a += b), 0)).to.be.equals(
            6,
          ));
      });
      describe('reduceAsync', () => {
        it('empty', async () =>
          expect(
            await fluent([]).reduceAsync(async (a, b) => (a += b), 0),
          ).to.be.equal(0));
        it('not empty', async () =>
          expect(
            await fluent([1, 2, 3]).reduceAsync(async (a, b) => (a += b), 0),
          ).to.be.equals(6));
      });
      const all: ['all', 'every'] = ['all', 'every'];
      all.forEach((func) => {
        describe('all', () => {
          it('empty', async () =>
            expect(fluent([])[func]((a: number) => a % 2 === 0)).to.be.true);
          it('false', async () =>
            expect(fluent([1, 2, 3])[func]((a: number) => a % 2 === 0)).to.be
              .false);
          it('true', async () =>
            expect(fluent([2, 4, 6])[func]((a: number) => a % 2 === 0)).to.be
              .true);
          it('should work with key string when result is true', () =>
            expect(fluent([{ a: 1 }, { a: 2 }, { a: 3 }])[func]('a')).to.true);
          it('should work with key string when result is true', () =>
            expect(fluent([{ a: 1 }, { a: 0 }, { a: 3 }])[func]('a')).to.false);
        });
      });
      const allAsync: ['allAsync', 'everyAsync'] = ['allAsync', 'everyAsync'];
      allAsync.forEach((func) => {
        describe(func, () => {
          it('empty', async () =>
            expect(await fluent([])[func](async (a: number) => a % 2 === 0)).to
              .be.true);
          it('false', async () =>
            expect(
              await fluent([1, 2, 3])[func](async (a: number) => a % 2 === 0),
            ).to.be.false);
          it('true', async () =>
            expect(
              await fluent([2, 4, 6])[func](async (a: number) => a % 2 === 0),
            ).to.be.true);
          it('should work with key string when result is true', async () =>
            expect(await fluent([{ a: 1 }, { a: 2 }, { a: 3 }])[func]('a')).to
              .true);
          it('should work with key string when result is true', async () =>
            expect(await fluent([{ a: 1 }, { a: 0 }, { a: 3 }])[func]('a')).to
              .false);
        });
      });
      const anys: ['any', 'some'] = ['any', 'some'];
      anys.forEach((func) => {
        describe(func, () => {
          it('empty', async () =>
            expect(fluent([])[func]((a: number) => a % 2 === 0)).to.be.false);
          it('false', async () =>
            expect(fluent([1, 3, 5])[func]((a: number) => a % 2 === 0)).to.be
              .false);
          it('true', async () =>
            expect(fluent([1, 2, 3])[func]((a: number) => a % 2 === 0)).to.be
              .true);
          it('should work with key string when result is true', () =>
            expect(fluent([{ a: 1 }, { a: 2 }, { a: 0 }])[func]('a')).to.true);
          it('should work with key string when result is true', () =>
            expect(fluent([{ a: false }, { a: 0 }, { a: 0 }])[func]('a')).to
              .false);
        });
      });
      const anysAsync: ['anyAsync', 'someAsync'] = ['anyAsync', 'someAsync'];
      anysAsync.forEach((func) => {
        describe(func, () => {
          it('empty', async () =>
            expect(await fluent([])[func](async (a: number) => a % 2 === 0)).to
              .be.false);
          it('false', async () =>
            expect(
              await fluent([1, 3, 5])[func](async (a: number) => a % 2 === 0),
            ).to.be.false);
          it('true', async () =>
            expect(
              await fluent([1, 2, 3])[func](async (a: number) => a % 2 === 0),
            ).to.be.true);
          it('should work with key string when result is true', async () =>
            expect(await fluent([{ a: 1 }, { a: 2 }, { a: 3 }])[func]('a')).to
              .true);
          it('should work with key string when result is true', async () =>
            expect(
              await fluent([{ a: false }, { a: 0 }, { a: null }])[func]('a'),
            ).to.false);
        });
      });
      describe('contains', () => {
        it('empty', async () =>
          expect(fluent([] as number[]).contains(4)).to.be.false);
        it('false', async () =>
          expect(fluent([1, 3, 5]).contains(4)).to.be.false);
        it('true', async () =>
          expect(fluent([1, 2, 4]).contains(4)).to.be.true);
      });
      describe('toObject', () => {
        it('empty', () =>
          expect(
            fluent([] as Iterable<Person>).toObject(
              (x) => x.gender as string,
              (x) => x.name,
            ),
          ).to.be.deep.equal({}));
        it('not empty', () =>
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
          ).to.be.deep.equal({
            [Gender.Female]: 'name A',
            [Gender.NonBinary]: 'name B',
            [Gender.Male]: 'name C',
          }));
        it('default mapper', () =>
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
          ).to.be.deep.equal({
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
        it('should work with key string key mapper', () =>
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
          ).to.be.deep.equal({
            [Gender.Female]: 'name A',
            [Gender.NonBinary]: 'name B',
            [Gender.Male]: 'name C',
          }));
        it('should work with key string key mapper and default value mapper', () =>
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
          ).to.be.deep.equal({
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
        it('should work with key string for key mapper and value mapper', () =>
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
          ).to.be.deep.equal({
            [Gender.Female]: 'name A',
            [Gender.NonBinary]: 'name B',
            [Gender.Male]: 'name C',
          }));
        it('should keep last value when having repeated keys and no reducing criteria', () =>
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
          ).to.be.deep.equal({
            [Gender.Female]: 'name B',
            [Gender.Male]: 'name C',
          }));
        it('should keep chosen value when having repeated keys and a reducing criteria', () =>
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
          ).to.be.deep.equal({
            [Gender.Female]: 'name A',
            [Gender.Male]: 'name C',
          }));
      });
      describe('toObjectAsync', () => {
        it('empty', async () =>
          expect(
            await fluent([] as Iterable<Person>).toObjectAsync(
              async (x) => x.gender as string,
              async (x) => x.name,
            ),
          ).to.be.deep.equal({}));
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
          ).to.be.deep.equal({
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
          ).to.be.deep.equal({
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
          ).to.be.deep.equal({
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
          ).to.be.deep.equal({
            [Gender.Female]: 'name A',
            [Gender.NonBinary]: 'name B',
            [Gender.Male]: 'name C',
          }));
      });
      describe('top', () => {
        it('should return the max number from a numeric array when no parameter is informed', () => {
          expect(fluent([1, 2, 3]).top(identity, (a, b) => a - b)).to.be.eq(3);
        });
        it('should return the max number from a transformation when a parameter is informed', () => {
          expect(
            fluent([1, 2, 3]).top(
              (x) => 3 - x,
              (a, b) => a - b,
            ),
          ).to.be.eq(1);
        });
        it('should work with key string', () =>
          expect(
            fluent([{ a: 3 }, { a: 1 }, { a: 2 }]).top('a', (a, b) => a - b),
          ).to.eql({ a: 3 }));
      });
      describe('max', () => {
        it('should return the max number from a numeric array when no parameter is informed', () => {
          expect(fluent([1, 2, 3]).max()).to.be.eq(3);
        });
        it('should return the max number from a transformation when a parameter is informed', () => {
          expect(fluent([1, 2, 3]).max((x) => 3 - x)).to.be.eq(1);
        });
        it('should return the max value from an array of multiple non numeric elements', () =>
          expect(fluent(['a', 'b', 'c', 'd', 'e']).max()).to.equal('e'));
        it('not assuring order', () => {
          expect(fluent([1, 2, 3, 4, 3, 5]).max(identity)).to.be.eq(5);
        });
        it('assuring order', () => {
          expect(o(fluent([1, 2, 3, 4, 3, 5])).max(identity)).to.be.eq(4);
        });
        it('assuring descending order', () => {
          expect(fluent([1, 2, 3, 4, 3, 5]).max(od(identity))).to.be.eq(1);
        });
        it('should work with key string', () =>
          expect(fluent([{ a: 1 }, { a: 3 }, { a: 2 }]).max('a')).to.eql({
            a: 3,
          }));
      });
      describe('hasExactly', () => {
        it('false', () => expect(fluent([1, 2, 3]).hasExactly(2)).to.false);
        it('true', () => expect(fluent([1, 2, 3]).hasExactly(3)).to.true);
      });
      describe('hasLessThan', () => {
        it('false', () => expect(fluent([1, 2, 3]).hasLessThan(3)).to.false);
        it('true', () => expect(fluent([1, 2, 3]).hasLessThan(4)).to.true);
      });
      describe('hasLessOrExactly', () => {
        it('false', () =>
          expect(fluent([1, 2, 3]).hasLessOrExactly(2)).to.false);
        it('true', () => expect(fluent([1, 2, 3]).hasLessOrExactly(3)).to.true);
        it('true for less', () =>
          expect(fluent([1, 2, 3]).hasLessOrExactly(4)).to.true);
      });
      describe('hasMoreThan', () => {
        it('false', () => expect(fluent([1, 2, 3]).hasMoreThan(3)).to.false);
        it('true', () => expect(fluent([1, 2, 3]).hasMoreThan(2)).to.true);
      });
      describe('hasMoreOrExactly', () => {
        it('false', () =>
          expect(fluent([1, 2, 3]).hasMoreOrExactly(4)).to.false);
        it('true', () => expect(fluent([1, 2, 3]).hasMoreOrExactly(3)).to.true);
        it('true for more', () =>
          expect(fluent([1, 2, 3]).hasMoreOrExactly(2)).to.true);
      });
      describe('execute', () => {
        it('should run what is passed', () => {
          const action = stub();

          const result = fluent([1, 2, 3]).execute(action).toArray();

          expect(action).to.have.callsLike([1], [2], [3]);
          expect(result).to.be.eql([1, 2, 3]);
        });
      });
      describe('executeAsync', () => {
        it('should run what is passed', async () => {
          const action = stub();

          const result = await fluent([1, 2, 3]).executeAsync(action).toArray();

          expect(action).to.have.callsLike([1], [2], [3]);
          expect(result).to.be.eql([1, 2, 3]);
        });
      });
    });

    describe('asynchronous', () => {
      context('basics work', () => {
        it('can convert to fluent', async () =>
          expect(await fluent(subject).toAsync().toArray()).to.eql(data));
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

      expect(resolved).to.be.eq(0);
      const result = await promise;
      expect(resolved).to.be.eq(10);
      expect(result).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
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

      expect(resolved).to.be.eq(0);
      const result = await promise;
      expect(resolved).to.be.eq(10);
      expect(result).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  it('should be identifiable as fluent', () => {
    const result: any = fluent(fluent([1, 2, 3]));

    expect(result).to.be.instanceOf(FluentClass);
  });
});
