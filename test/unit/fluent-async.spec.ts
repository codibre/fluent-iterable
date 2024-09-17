import {
  fluentAsync,
  interval,
  fluent,
  o,
  identity,
  od,
  getGroupingDistinct,
} from '../../src';
import { flatMap } from './tools';
import { ObjectReadableMock } from 'stream-mock';
import { Person, data, Gender, picker } from './tools';
import delay from 'delay';
import { AnyIterable } from 'augmentative-iterable';
import { emitGenerator } from './fluent-emit.spec';
import { FluentAsyncClass } from '../../src/fluent-async-class';

export async function* asyncGenerator(): AsyncIterable<Person> {
  yield* data;
}

const additionalPerson: Person = {
  name: 'name',
  gender: Gender.NonBinary,
  emails: ['name@email.com'],
};

describe('fluent async iterable', () => {
  const suite = (createSubject: () => AnyIterable<Person>) => () => {
    let subject: AnyIterable<Person>;

    beforeEach(() => (subject = createSubject()));
    describe('basics work', () => {
      it('wrapping does not fail', async () => {
        fluentAsync(subject);
      });
      it('can iterate through', async () => {
        let idx = 0;
        for await (const person of fluentAsync(subject)) {
          expect(person).toEqual(data[idx++]);
        }
      });
      it('can convert to array', async () => {
        expect(await fluentAsync(subject).toArray()).toEqual(data);
      });
      it('iterate over a Promise of an iterable', async () => {
        expect(
          await fluentAsync(
            new Promise<any>((resolve) => resolve(subject)),
          ).toArray(),
        ).toEqual(data);
      });
      it('should iterate with forEach', async () => {
        let sum = 0;
        await fluentAsync(new ObjectReadableMock([1, 2, 3])).forEach(
          (x) => (sum += x),
        );
        expect(sum).toBe(6);
      });
    });
    describe('withIndex', () => {
      it('should return Indexed instances from informed array', async () => {
        expect(
          await fluentAsync(new ObjectReadableMock(['a', 'b', 'c']))
            .withIndex()
            .toArray(),
        ).toEqual([
          { idx: 0, value: 'a' },
          { idx: 1, value: 'b' },
          { idx: 2, value: 'c' },
        ]);
      });
    });
    describe('takeWhile', () => {
      it('works with initially not true statement', async () =>
        expect(
          await fluentAsync(subject)
            .takeWhile((p) => p.emails.length > 0)
            .toArray(),
        ).toBeEmpty());
      it('works with eventually not true statement', async () => {
        expect(
          await fluentAsync(subject)
            .takeWhile((p) => p.gender === undefined)
            .toArray(),
        ).toEqual(data.slice(0, 3));
      });
      it('works with always true statement', async () => {
        expect(
          await fluentAsync(subject)
            .takeWhile((p) => p.name.length > 0)
            .toArray(),
        ).toEqual(data);
      });
    });
    describe('take', () => {
      it('works with negative count', async () =>
        expect(await fluentAsync(subject).take(-5).toArray()).toBeEmpty());
      it('works with zero count', async () =>
        expect(await fluentAsync(subject).take(0).toArray()).toBeEmpty());
      it('works with one count', async () =>
        expect(await fluentAsync(subject).take(1).toArray()).toEqual(
          data.slice(0, 1),
        ));
      it('works with count < length', async () =>
        expect(await fluentAsync(subject).take(5).toArray()).toEqual(
          data.slice(0, 5),
        ));
      it('works with count = length', async () =>
        expect(await fluentAsync(subject).take(data.length).toArray()).toEqual(
          data,
        ));
      it('works with count > length', async () =>
        expect(
          await fluentAsync(subject)
            .take(data.length * 2)
            .toArray(),
        ).toEqual(data));
    });
    describe('skipWhile', () => {
      it('works with initially not true statement', async () =>
        expect(
          await fluentAsync(subject)
            .skipWhile((p) => p.emails.length > 0)
            .toArray(),
        ).toEqual(data));
      it('works with eventually not true statement', async () =>
        expect(
          await fluentAsync(subject)
            .skipWhile((p) => p.gender === undefined)
            .toArray(),
        ).toEqual(data.slice(3)));
      it('works with always true statement', async () =>
        expect(
          await fluentAsync(subject)
            .skipWhile((p) => p.name.length > 0)
            .toArray(),
        ).toBeEmpty());
      it('works with alternating true statement', async () =>
        expect(
          await fluentAsync(subject)
            .skipWhile((p) => p.emails.length === 0)
            .toArray(),
        ).toEqual(data.slice(1)));
    });
    describe('skip', () => {
      it('works with negative count', async () =>
        expect(await fluentAsync(subject).skip(-5).toArray()).toEqual(data));
      it('works with zero count', async () =>
        expect(await fluentAsync(subject).skip(0).toArray()).toEqual(data));
      it('works with one count', async () =>
        expect(await fluentAsync(subject).skip(1).toArray()).toEqual(
          data.slice(1),
        ));
      it('works with count < length', async () =>
        expect(await fluentAsync(subject).skip(5).toArray()).toEqual(
          data.slice(5),
        ));
      it('works with count = length', async () =>
        expect(
          await fluentAsync(subject).skip(data.length).toArray(),
        ).toBeEmpty());
      it('works with count > length', async () =>
        expect(
          await fluentAsync(subject)
            .skip(data.length * 2)
            .toArray(),
        ).toBeEmpty());
    });
    describe('map', () => {
      it('maps to undefined', async () => {
        const res = await fluentAsync(subject)
          .map(() => undefined)
          .toArray();
        expect(res).toHaveLength(data.length);
        res.forEach((item) => expect(item).toBeUndefined());
      });
      it('maps to projection', async () => {
        const res = await fluentAsync(subject)
          .map((p) => p.name)
          .toArray();
        expect(res).toHaveLength(data.length);
        let idx = 0;
        for await (const item of res) {
          expect(item).toEqual(data[idx++].name);
        }
      });
    });
    describe('filter', () => {
      it('with always false predicate', async () =>
        expect(
          await fluentAsync(subject)
            .filter(() => false)
            .toArray(),
        ).toBeEmpty());
      it('with always true predicate', async () =>
        expect(
          await fluentAsync(subject)
            .filter(() => true)
            .toArray(),
        ).toEqual(data));
      it('with alternating predicate', async () =>
        expect(
          await fluentAsync(subject)
            .filter((p) => p.gender === Gender.Female)
            .toArray(),
        ).toEqual(picker(4, 7, 10)));
      it('assuring order', async () => {
        const call = jest.fn();
        expect(
          await fluentAsync([1, 2, 3, 4, 3])
            .filter(
              o((p) => {
                call();
                return 2 <= p && p <= 3;
              }),
            )
            .toArray(),
        ).toEqual([2, 3]);
        expect(call).toHaveBeenCalledTimes(4);
      });
      it('should apply type guard properly', async () => {
        const test: (number | string)[] = [1, 'b', 2, 'c', 3];
        const result = await fluentAsync(test)
          .filter((a): a is number => typeof a === 'number')
          .toArray();

        expect(result[0] + 1).toBe(2);
      });
    });
    describe('partition', () => {
      it('should divide result in blocks of the specified size', async () => {
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3, 4, 5, 6, 7, 8]))
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
          fluentAsync([]).partition(0);
        } catch (err) {
          error = err;
        }
        expect(error).toBeInstanceOf(Error);
      });
    });
    describe('append', () => {
      it('with empty iterable', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([] as Person[]))
            .append(additionalPerson)
            .toArray(),
        ).toEqual([additionalPerson]));
      it('with non-empty iterable', async () =>
        expect(
          await fluentAsync(subject).append(additionalPerson).toArray(),
        ).toEqual([...data, additionalPerson]));
    });
    describe('prepend', () => {
      it('with empty iterable', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([] as Person[]))
            .prepend(additionalPerson)
            .toArray(),
        ).toEqual([additionalPerson]));
      it('with non-empty iterable', async () =>
        expect(
          await fluentAsync(subject).prepend(additionalPerson).toArray(),
        ).toEqual([additionalPerson, ...data]));
    });

    describe('concat', () => {
      it('one empty array', async () =>
        expect(
          await fluentAsync(subject)
            .concat(new ObjectReadableMock([]))
            .toArray(),
        ).toEqual(data));
      it('two empty arrays', async () =>
        expect(
          await fluentAsync(subject)
            .concat(new ObjectReadableMock([]), new ObjectReadableMock([]))
            .toArray(),
        ).toEqual(data));
      it('one non-empty arrays', async () =>
        expect(
          await fluentAsync(subject)
            .concat(new ObjectReadableMock([additionalPerson]))
            .toArray(),
        ).toEqual([...data, additionalPerson]));
      it('two non-empty arrays', async () =>
        expect(
          await fluentAsync(subject)
            .concat(new ObjectReadableMock([additionalPerson]), createSubject())
            .toArray(),
        ).toEqual([...data, additionalPerson, ...data]));
      it('one empty and one non-empty arrays', async () =>
        expect(
          await fluentAsync(subject)
            .concat(
              new ObjectReadableMock([]),
              new ObjectReadableMock([additionalPerson]),
            )
            .toArray(),
        ).toEqual([...data, additionalPerson]));
    });

    describe('concatEmitter', () => {
      it('one empty array', async () =>
        expect(
          await fluentAsync(subject)
            .concatEmitter(new ObjectReadableMock([]))
            .toArray(),
        ).toEqual(data));
      it('one non-empty arrays', async () =>
        expect(
          await fluentAsync(subject)
            .concatEmitter(new ObjectReadableMock([additionalPerson]))
            .toArray(),
        ).toEqual([...data, additionalPerson]));
    });

    describe('repeat', () => {
      it('negative number of times', async () =>
        expect(await fluentAsync(subject).repeat(-5).toArray()).toBeEmpty());
      it('zero times', async () =>
        expect(await fluentAsync(subject).repeat(0).toArray()).toBeEmpty());
      it('once', async () =>
        expect(await fluentAsync(subject).repeat(1).toArray()).toEqual(data));
      it('twice', async () =>
        expect(await fluentAsync(subject).repeat(2).toArray()).toEqual([
          ...data,
          ...data,
        ]));
      it('three times', async () =>
        expect(await fluentAsync(subject).repeat(3).toArray()).toEqual([
          ...data,
          ...data,
          ...data,
        ]));
    });
    const flattens: ['flatten', 'flatMap'] = ['flatten', 'flatMap'];
    flattens.forEach((func) => {
      describe(func, () => {
        it('empty array', async () =>
          expect(
            await fluentAsync(new ObjectReadableMock([]))[func]().toArray(),
          ).toBeEmpty());
        it('already flat fails', async () => {
          let error: unknown;

          try {
            await fluentAsync(subject as any)
              [func]()
              .toArray();
          } catch (err) {
            error = err;
          }

          expect(error).toBeDefined();
        });
        it('not flat', async () =>
          expect(
            await fluentAsync(
              new ObjectReadableMock([
                [1, 2],
                [3, 4, 5],
                [],
                [6],
              ]) as AsyncIterable<any>,
            )
              [func]()
              .toArray(),
          ).toEqual([1, 2, 3, 4, 5, 6]));
        it('with mapper', async () =>
          expect(
            await fluentAsync(subject)
              [func]((p) => p.emails)
              .toArray(),
          ).toEqual(
            flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails),
          ));
        it('with property key', async () =>
          expect(await fluentAsync(subject)[func]('emails').toArray()).toEqual(
            flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails),
          ));
        it('with no mapper and async items', async () =>
          expect(
            await fluentAsync(subject)
              .map(async (x) => x.emails)
              [func]()
              .toArray(),
          ).toEqual(
            flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails),
          ));
        it('with mapper and async items', async () =>
          expect(
            await fluentAsync(subject)
              .map(async (x) => x)
              [func]((p) => p.emails)
              .toArray(),
          ).toEqual(
            flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails),
          ));
        it('with property key', async () =>
          expect(await fluentAsync(subject)[func]('emails').toArray()).toEqual(
            flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails),
          ));
      });
    });
    describe('sort', () => {
      it('empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([])).sort().toArray(),
        ).toBeEmpty());
      it('flat numbers', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([6, 4, 5, 3, 2, 1]))
            .sort()
            .toArray(),
        ).toEqual([1, 2, 3, 4, 5, 6]));
      it('flat numbers with reversed comparison', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([6, 4, 5, 3, 2, 1]))
            .sort((a, b) => b - a)
            .toArray(),
        ).toEqual([6, 5, 4, 3, 2, 1]));
    });
    describe('group', () => {
      it('empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([] as Person[]))
            .group((p) => p.gender)
            .toArray(),
        ).toBeEmpty());
      it('non-empty', async () => {
        const groups = await fluentAsync(subject)
          .group((p) => p.gender)
          .toArray();
        expect(groups.length).toEqual(4);
        expect(groups.map((grp) => grp.key)).toEqual([
          undefined,
          Gender.Male,
          Gender.Female,
          Gender.NonBinary,
        ]);
        for await (const grp of groups) {
          expect(grp.values.toArray()).toEqual(
            data.filter((p) => p.gender === grp.key),
          );
        }
      });
      it('assuring order', async () => {
        const items = [
          { k: 1, v: 1 },
          { k: 1, v: 2 },
          { k: 2, v: 1 },
          { k: 2, v: 2 },
          { k: 1, v: 1 },
          { k: 1, v: 2 },
        ];
        const groups = await fluentAsync(items)
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
      it('assuring order with distinct', async () => {
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
        const groups = await fluentAsync(items)
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
      it('should work with transformation expression', async () => {
        const groups = await fluentAsync(
          new ObjectReadableMock([1, 2, 2, 3, 4, 4, 5, 5, 5]),
        )
          .group((x) => x % 2, getGroupingDistinct(identity))
          .toArray();
        expect(groups.length).toEqual(2);
        expect(groups.map((grp) => grp.key).sort()).toEqual([0, 1]);
        expect(groups.find(({ key }) => key === 0)!.values.toArray()).toEqual([
          2, 4,
        ]);
        expect(groups.find(({ key }) => key === 1)!.values.toArray()).toEqual([
          1, 3, 5,
        ]);
      });
    });
    describe('avg', () => {
      it('empty', async () =>
        expect(await fluentAsync(new ObjectReadableMock([])).avg()).toEqual(
          NaN,
        ));
      it('one element', async () =>
        expect(await fluentAsync(new ObjectReadableMock([2])).avg()).toEqual(
          2,
        ));
      it('multiple elements', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([2, 3, 4, 5])).avg(),
        ).toEqual(3.5));
      it('multiple elements with predicate', async () =>
        expect(await fluentAsync(subject).avg((x) => x.emails.length)).toEqual(
          1,
        ));
    });
    describe('min', () => {
      it('empty', async () =>
        expect(await fluentAsync(new ObjectReadableMock([])).min()).toEqual(
          undefined,
        ));
      it('one element', async () =>
        expect(await fluentAsync(new ObjectReadableMock([2])).min()).toEqual(
          2,
        ));
      it('multiple elements', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([2, 3, 4, 5])).min(),
        ).toEqual(2));
      it('multiple elements with predicate', async () =>
        expect(
          await fluentAsync(subject).min(async (x) => x.emails.length),
        ).toEqual({
          emails: [],
          name: '0: w/o gender & 0 emails',
        }));
    });
    describe('sum', () => {
      it('empty', async () =>
        expect(await fluentAsync(new ObjectReadableMock([])).sum()).toEqual(0));
      it('one element', async () =>
        expect(await fluentAsync(new ObjectReadableMock([2])).sum()).toEqual(
          2,
        ));
      it('multiple elements', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([2, 3, 4, 5])).sum(),
        ).toEqual(14));
      it('multiple elements with predicate', async () =>
        expect(await fluentAsync(subject).sum((x) => x.emails.length)).toEqual(
          12,
        ));
    });
    describe('min', () => {
      it('empty', async () =>
        expect(await fluentAsync([]).min()).toEqual(undefined));
      it('one element', async () =>
        expect(await fluentAsync([2]).min()).toEqual(2));
      it('multiple elements', async () =>
        expect(await fluentAsync([1, 3, 4, 5]).min()).toEqual(1));
      it('multiple non numeric elements', async () =>
        expect(await fluentAsync(['a', 'b', 'c', 'd', 'e']).min()).toEqual(
          'a',
        ));
      it('multiple elements with predicate', async () =>
        expect(await fluentAsync(subject).min((x) => x.emails.length)).toEqual({
          emails: [],
          name: '0: w/o gender & 0 emails',
        }));
      it('not assuring order', async () => {
        expect(await fluentAsync([5, 4, 3, 4, 1]).min()).toBe(1);
      });
      it('assuring order', async () => {
        expect(await fluentAsync([5, 4, 3, 4, 1]).min(o(identity))).toBe(5);
      });
      it('assuring descending order', async () => {
        expect(await fluentAsync([5, 4, 3, 4, 1]).min(od(identity))).toBe(3);
      });
    });
    describe('count', () => {
      it('empty', async () =>
        expect(await fluentAsync(new ObjectReadableMock([])).count()).toEqual(
          0,
        ));
      it('one element', async () =>
        expect(await fluentAsync(new ObjectReadableMock([0])).count()).toEqual(
          1,
        ));
      it('multiple elements', async () =>
        expect(await fluentAsync(subject).count()).toEqual(data.length));
      it('multiple elements with predicate', async () =>
        expect(
          await fluentAsync(subject).count((x) => x.emails.length > 0),
        ).toEqual(8));
      it('not assuring order', async () =>
        expect(
          await fluentAsync([1, 2, 4, 5, 6]).count((x) => x % 2 === 0),
        ).toEqual(3));
      it('assuring order', async () =>
        expect(
          await fluentAsync([1, 2, 4, 5, 6]).count(
            o((x: number) => x % 2 === 0),
          ),
        ).toEqual(2));
      it('assuring descending order', async () =>
        expect(
          await fluentAsync([1, 2, 4, 5, 6]).count(
            o((x: number) => x % 2 === 0),
          ),
        ).toEqual(2));
    });
    describe('first', () => {
      it('empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([])).first(),
        ).toBeUndefined());
      it('not empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([3, 1])).first(),
        ).toEqual(3));
      it('with predicate', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([3, 1, 2, 6])).first(
            (x) => x % 2 === 0,
          ),
        ).toEqual(2));
    });
    describe('last', () => {
      it('empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([])).last(),
        ).toBeUndefined());
      it('not empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([3, 1])).last(),
        ).toEqual(1));
      it('with predicate', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([3, 1, 2, 6, 3, 8])).last(
            (x) => x % 2 === 0,
          ),
        ).toEqual(8));
      it('assuring order', async () =>
        expect(
          await fluentAsync([3, 1, 2, 6, 3, 8]).last(
            o((x: number) => x % 2 === 0),
          ),
        ).toEqual(6));
    });
    describe('reduceAndMap', () => {
      it('empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([])).reduceAndMap(
            (a, b) => (a += b),
            0,
            (a) => a * 10 + 1,
          ),
        ).toEqual(1));
      it('not empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).reduceAndMap(
            (a, b) => (a += b),
            0,
            (a) => a * 10 + 1,
          ),
        ).toEqual(61));
    });
    describe('reduce', () => {
      it('empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([])).reduce(
            (a, b) => (a += b),
            0,
          ),
        ).toEqual(0));
      it('not empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).reduce(
            (a, b) => (a += b),
            0,
          ),
        ).toEqual(6));
    });
    const all: ['all', 'every'] = ['all', 'every'];
    all.forEach((func) => {
      describe(func, () => {
        it('empty', async () =>
          expect(
            await fluentAsync(new ObjectReadableMock([]))[func](
              (a: number) => a % 2 === 0,
            ),
          ).toBe(true));
        it('false', async () =>
          expect(
            await fluentAsync(new ObjectReadableMock([1, 2, 3]))[func](
              (a: number) => a % 2 === 0,
            ),
          ).toBe(false));
        it('true', async () =>
          expect(
            await fluentAsync(new ObjectReadableMock([2, 4, 6]))[func](
              (a: number) => a % 2 === 0,
            ),
          ).toBe(true));
      });
    });
    const anys: ['any', 'some'] = ['any', 'some'];
    anys.forEach((func) => {
      describe(func, () => {
        it('empty', async () =>
          expect(
            await fluentAsync(new ObjectReadableMock([]))[func](
              (a: number) => a % 2 === 0,
            ),
          ).toBe(false));
        it('false', async () =>
          expect(
            await fluentAsync(new ObjectReadableMock([1, 3, 5]))[func](
              (a: number) => a % 2 === 0,
            ),
          ).toBe(false));
        it('true', async () =>
          expect(
            await fluentAsync(new ObjectReadableMock([1, 2, 3]))[func](
              (a: number) => a % 2 === 0,
            ),
          ).toBe(true));
      });
    });
    describe('contains', () => {
      it('empty', async () =>
        expect(await fluentAsync(new ObjectReadableMock([])).contains(4)).toBe(
          false,
        ));
      it('false', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 3, 5])).contains(4),
        ).toBe(false));
      it('true', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 4])).contains(4),
        ).toBe(true));
    });
    describe('toObject', () => {
      it('empty', async () =>
        expect(
          await fluentAsync(
            new ObjectReadableMock([]) as AsyncIterable<Person>,
          ).toObject(
            (x) => x.gender as string,
            (x) => x.name,
          ),
        ).toEqual({}));
      it('not empty', async () =>
        expect(
          await fluentAsync(
            new ObjectReadableMock([
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
            ]) as AsyncIterable<Person>,
          ).toObject(
            (x) => x.gender as string,
            (x) => x.name,
          ),
        ).toEqual({
          [Gender.Female]: 'name A',
          [Gender.NonBinary]: 'name B',
          [Gender.Male]: 'name C',
        }));
      it('default mapper', async () =>
        expect(
          await fluentAsync(
            new ObjectReadableMock([
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
            ]) as AsyncIterable<Person>,
          ).toObject((x) => x.gender as string),
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
    });
    describe('top', () => {
      it('should return the max number from a numeric array when no parameter is informed', async () => {
        expect(
          await fluentAsync([1, 2, 3]).top(identity, (a, b) => a - b),
        ).toBe(3);
      });
      it('should return the max number from a transformation when a parameter is informed', async () => {
        expect(
          await fluentAsync([1, 2, 3]).top(
            async (x) => 3 - x,
            (a, b) => a - b,
          ),
        ).toBe(1);
      });
    });
    describe('max', () => {
      it('should return the max number from a numeric array when no parameter is informed', async () => {
        expect(await fluentAsync([1, 2, 3]).max()).toBe(3);
      });
      it('should return the max number from a transformation when a parameter is informed', async () => {
        expect(await fluentAsync([1, 2, 3]).max(async (x) => 3 - x)).toBe(1);
      });
      it('should return the max value from an array of multiple non numeric elements', async () =>
        expect(await fluentAsync(['a', 'b', 'c', 'd', 'e']).max()).toEqual(
          'e',
        ));
      it('not assuring order', async () => {
        expect(await fluentAsync([1, 2, 3, 4, 3, 5]).max(identity)).toBe(5);
      });
      it('assuring order', async () => {
        expect(await fluentAsync([1, 2, 3, 4, 3, 5]).max(o(identity))).toBe(4);
      });
      it('assuring descending order', async () => {
        expect(await fluentAsync([1, 2, 3, 4, 3, 5]).max(od(identity))).toBe(1);
      });
    });
    describe('hasLessThan', () => {
      it('false', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasLessThan(3),
        ).toBe(false));
      it('true', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasLessThan(4),
        ).toBe(true));
    });
    describe('hasLessOrExactly', () => {
      it('false', async () =>
        expect(await fluentAsync([1, 2, 3]).hasLessOrExactly(2)).toBe(false));
      it('true', async () =>
        expect(await fluentAsync([1, 2, 3]).hasLessOrExactly(3)).toBe(true));
      it('true for less', async () =>
        expect(await fluentAsync([1, 2, 3]).hasLessOrExactly(4)).toBe(true));
    });
    describe('hasMoreThan', () => {
      it('false', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasMoreThan(3),
        ).toBe(false));
      it('true', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasMoreThan(2),
        ).toBe(true));
    });
    describe('hasMoreOrExactly', () => {
      it('false', async () =>
        expect(await fluentAsync([1, 2, 3]).hasMoreOrExactly(4)).toBe(false));
      it('true', async () =>
        expect(await fluentAsync([1, 2, 3]).hasMoreOrExactly(3)).toBe(true));
      it('true for more', async () =>
        expect(await fluentAsync([1, 2, 3]).hasMoreOrExactly(2)).toBe(true));
    });
    describe('hasExactly', () => {
      it('false', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasExactly(2),
        ).toBe(false));
      it('true', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasExactly(3),
        ).toBe(true));
    });
    describe('execute', () => {
      it('should run what is passed', async () => {
        const action = jest.fn();

        const result = await fluentAsync([1, 2, 3]).execute(action).toArray();

        expect(action).toHaveCallsLike([1], [2], [3]);
        expect(result).toEqual([1, 2, 3]);
      });
    });

    describe('merge', () => {
      it('should merge the iterables', async () => {
        const it1 = (async function* (): AsyncIterable<number> {
          await delay(10);
          yield 1;
          await delay(5);
          yield 2;
          await delay(20);
          yield 3;
        })();
        const it2 = (async function* (): AsyncIterable<string> {
          await delay(2);
          yield 'a';
          await delay(20);
          yield 'b';
          await delay(3);
          yield 'c';
        })();

        const result = await fluentAsync(it1).merge(it2).toArray();
        const sorted = result.concat().sort();

        expect(sorted).not.toEqual(result);
        expect(sorted).toEqual([1, 2, 3, 'a', 'b', 'c']);
      });
    });

    describe('mergeEmitter', () => {
      it('should merge the iterables', async () => {
        const it1 = (async function* (): AsyncIterable<number> {
          await delay(10);
          yield 1;
          await delay(5);
          yield 2;
          await delay(20);
          yield 3;
        })();
        const it2 = (async function* (): AsyncIterable<string> {
          await delay(2);
          yield 'a';
          await delay(20);
          yield 'b';
          await delay(3);
          yield 'c';
        })();

        const result = await fluentAsync(it1)
          .mergeEmitter(emitGenerator(it2))
          .toArray();
        const sorted = result.concat().sort();

        expect(sorted).not.toEqual(result);
        expect(sorted).toEqual([1, 2, 3, 'a', 'b', 'c']);
      });
    });

    describe('mergeCatching', () => {
      it('should merge the iterables', async () => {
        const testError = new Error('test');
        const it1 = (async function* (): AsyncIterable<number> {
          await delay(10);
          yield 1;
          await delay(5);
          yield 2;
          await delay(7);
          yield 3;
        })();
        const it2 = (async function* (): AsyncIterable<string> {
          await delay(2);
          yield 'a';
          throw testError;
        })();
        const callback = jest.fn();

        const result = await fluentAsync(it1)
          .mergeCatching(callback, it2)
          .toArray();

        expect(callback).toHaveCallsLike([testError, 1]);
        expect(result).toEqual(['a', 1, 2, 3]);
      });
    });

    describe('mergeEmitterCatching', () => {
      it('should merge the iterables', async () => {
        const testError = new Error('test');
        const it1 = (async function* (): AsyncIterable<number> {
          await delay(10);
          yield 1;
          await delay(5);
          yield 2;
          await delay(7);
          yield 3;
        })();
        const it2 = (async function* (): AsyncIterable<string> {
          await delay(2);
          yield 'a';
          throw testError;
        })();
        const callback = jest.fn();

        const result = await fluentAsync(it1)
          .mergeEmitterCatching(callback, emitGenerator(it2))
          .toArray();

        expect(callback).toHaveCallsLike([testError, 1]);
        expect(result.sort()).toEqual([1, 2, 3, 'a']);
      });
    });
  };

  describe(
    'on array',
    suite(() => data),
  );
  describe('on generator', suite(asyncGenerator));

  describe('waitAll', () => {
    it('should return a promises with resolves when all promises are resolved', async () => {
      let resolved = 0;

      const promise = fluentAsync(fluent(interval(1, 10)).toAsync()).waitAll(
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
  });

  it('should be identifiable as fluent async', () => {
    const result: any = fluentAsync(fluentAsync([1, 2, 3]));

    expect(result).toBeInstanceOf(FluentAsyncClass);
  });
});
