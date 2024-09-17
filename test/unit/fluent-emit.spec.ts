import { fluentEmit, interval, fluent } from '../../src';
import { flatMap } from './tools';
import { Person, data, Gender, picker } from './tools';
import delay from 'delay';
import { EventEmitter } from 'events';
import { promisify } from 'util';
import { AnyIterable } from 'augmentative-iterable';
import { ObjectReadableMock } from 'stream-mock';
import forEmitOf = require('for-emit-of');

const sleep = promisify(setTimeout);
export function emitGenerator(items: AnyIterable<any> = data): EventEmitter {
  const eventEmitter = new EventEmitter();

  setTimeout(async () => {
    try {
      for await (const item of items) {
        eventEmitter.emit('data', item);
        sleep(1);
      }
      eventEmitter.emit('end');
    } catch (err) {
      eventEmitter.emit('error', err);
    }
  }, 10);

  return eventEmitter;
}

const additionalPerson: Person = {
  name: 'name',
  gender: Gender.NonBinary,
  emails: ['name@email.com'],
};

describe('fluent emit iterable', () => {
  const suite = (createSubject: () => EventEmitter) => () => {
    let subject: EventEmitter;

    beforeEach(() => (subject = createSubject()));
    describe('basics work', () => {
      it('wrapping does not fail', async () => {
        fluentEmit(subject);
      });
      it('can iterate through', async () => {
        let idx = 0;
        for await (const person of fluentEmit(subject)) {
          expect(person).toEqual(data[idx++]);
        }
      });
      it('can convert to array', async () => {
        expect(await fluentEmit(subject).toArray()).toEqual(data);
      });
    });
    describe('withIndex', () => {
      it('should return Indexed instances from informed array', async () => {
        expect(
          await fluentEmit(emitGenerator(['a', 'b', 'c']))
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
          await fluentEmit(subject)
            .takeWhile((p) => p.emails.length > 0)
            .toArray(),
        ).toBeEmpty());
      it('works with eventually not true statement', async () => {
        expect(
          await fluentEmit(subject)
            .takeWhile((p) => p.gender === undefined)
            .toArray(),
        ).toEqual(data.slice(0, 3));
      });
      it('works with always true statement', async () => {
        expect(
          await fluentEmit(subject)
            .takeWhile((p) => p.name.length > 0)
            .toArray(),
        ).toEqual(data);
      });
    });
    describe('take', () => {
      it('works with negative count', async () =>
        expect(await fluentEmit(subject).take(-5).toArray()).toBeEmpty());
      it('works with zero count', async () =>
        expect(await fluentEmit(subject).take(0).toArray()).toBeEmpty());
      it('works with one count', async () =>
        expect(await fluentEmit(subject).take(1).toArray()).toEqual(
          data.slice(0, 1),
        ));
      it('works with count < length', async () =>
        expect(await fluentEmit(subject).take(5).toArray()).toEqual(
          data.slice(0, 5),
        ));
      it('works with count = length', async () =>
        expect(await fluentEmit(subject).take(data.length).toArray()).toEqual(
          data,
        ));
      it('works with count > length', async () =>
        expect(
          await fluentEmit(subject)
            .take(data.length * 2)
            .toArray(),
        ).toEqual(data));
    });
    describe('skipWhile', () => {
      it('works with initially not true statement', async () =>
        expect(
          await fluentEmit(subject)
            .skipWhile((p) => p.emails.length > 0)
            .toArray(),
        ).toEqual(data));
      it('works with eventually not true statement', async () =>
        expect(
          await fluentEmit(subject)
            .skipWhile((p) => p.gender === undefined)
            .toArray(),
        ).toEqual(data.slice(3)));
      it('works with always true statement', async () =>
        expect(
          await fluentEmit(subject)
            .skipWhile((p) => p.name.length > 0)
            .toArray(),
        ).toBeEmpty());
      it('works with alternating true statement', async () =>
        expect(
          await fluentEmit(subject)
            .skipWhile((p) => p.emails.length === 0)
            .toArray(),
        ).toEqual(data.slice(1)));
    });
    describe('skip', () => {
      it('works with negative count', async () =>
        expect(await fluentEmit(subject).skip(-5).toArray()).toEqual(data));
      it('works with zero count', async () =>
        expect(await fluentEmit(subject).skip(0).toArray()).toEqual(data));
      it('works with one count', async () =>
        expect(await fluentEmit(subject).skip(1).toArray()).toEqual(
          data.slice(1),
        ));
      it('works with count < length', async () =>
        expect(await fluentEmit(subject).skip(5).toArray()).toEqual(
          data.slice(5),
        ));
      it('works with count = length', async () =>
        expect(
          await fluentEmit(subject).skip(data.length).toArray(),
        ).toBeEmpty());
      it('works with count > length', async () =>
        expect(
          await fluentEmit(subject)
            .skip(data.length * 2)
            .toArray(),
        ).toBeEmpty());
    });
    describe('map', () => {
      it('maps to undefined', async () => {
        const res = await fluentEmit(subject)
          .map(() => undefined)
          .toArray();
        expect(res).toHaveLength(data.length);
        res.forEach((item) => expect(item).toBeUndefined());
      });
      it('maps to projection', async () => {
        const res = await fluentEmit(subject)
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
          await fluentEmit(subject)
            .filter(() => false)
            .toArray(),
        ).toBeEmpty());
      it('with always true predicate', async () =>
        expect(
          await fluentEmit(subject)
            .filter(() => true)
            .toArray(),
        ).toEqual(data));
      it('with alternating predicate', async () =>
        expect(
          await fluentEmit(subject)
            .filter((p) => p.gender === Gender.Female)
            .toArray(),
        ).toEqual(picker(4, 7, 10)));
    });
    describe('partition', () => {
      it('should divide result in blocks of the specified size', async () => {
        expect(
          await fluentEmit(emitGenerator([1, 2, 3, 4, 5, 6, 7, 8]))
            .partition(3)
            .map((x) => x.toArray())
            .toArray(),
        ).toEqual([
          [1, 2, 3],
          [4, 5, 6],
          [7, 8],
        ]);
      });
    });
    describe('append', () => {
      it('with empty iterable', async () =>
        expect(
          await fluentEmit(emitGenerator([] as Person[]))
            .append(additionalPerson)
            .toArray(),
        ).toEqual([additionalPerson]));
      it('with non-empty iterable', async () =>
        expect(
          await fluentEmit(subject).append(additionalPerson).toArray(),
        ).toEqual([...data, additionalPerson]));
    });
    describe('prepend', () => {
      it('with empty iterable', async () =>
        expect(
          await fluentEmit(emitGenerator([] as Person[]))
            .prepend(additionalPerson)
            .toArray(),
        ).toEqual([additionalPerson]));
      it('with non-empty iterable', async () =>
        expect(
          await fluentEmit(subject).prepend(additionalPerson).toArray(),
        ).toEqual([additionalPerson, ...data]));
    });
    describe('concat', () => {
      it('one empty array', async () =>
        expect(
          await fluentEmit(subject)
            .concat(new ObjectReadableMock([]))
            .toArray(),
        ).toEqual(data));
      it('two empty arrays', async () =>
        expect(
          await fluentEmit(subject)
            .concat(new ObjectReadableMock([]), [])
            .toArray(),
        ).toEqual(data));
      it('one non-empty arrays', async () =>
        expect(
          await fluentEmit(subject)
            .concat(new ObjectReadableMock([additionalPerson]))
            .toArray(),
        ).toEqual([...data, additionalPerson]));
      it('two non-empty arrays', async () =>
        expect(
          await fluentEmit(subject)
            .concat(
              new ObjectReadableMock([additionalPerson]),
              forEmitOf(createSubject()),
            )
            .toArray(),
        ).toEqual([...data, additionalPerson, ...data]));
      it('one empty and one non-empty arrays', async () =>
        expect(
          await fluentEmit(subject)
            .concat(new ObjectReadableMock([]), [additionalPerson])
            .toArray(),
        ).toEqual([...data, additionalPerson]));
    });
    describe('repeat', () => {
      it('negative number of times', async () =>
        expect(await fluentEmit(subject).repeat(-5).toArray()).toBeEmpty());
      it('zero times', async () =>
        expect(await fluentEmit(subject).repeat(0).toArray()).toBeEmpty());
      it('once', async () =>
        expect(await fluentEmit(subject).repeat(1).toArray()).toEqual(data));
      it('twice', async () =>
        expect(await fluentEmit(subject).repeat(2).toArray()).toEqual([
          ...data,
          ...data,
        ]));
      it('three times', async () =>
        expect(await fluentEmit(subject).repeat(3).toArray()).toEqual([
          ...data,
          ...data,
          ...data,
        ]));
    });
    describe('flatten', () => {
      it('empty array', async () =>
        expect(
          await fluentEmit(emitGenerator([])).flatten().toArray(),
        ).toBeEmpty());
      it('already flat fails', async () => {
        let error: unknown;

        try {
          await fluentEmit(subject).flatten().toArray();
        } catch (err) {
          error = err;
        }

        expect(error).toBeDefined();
      });
      it('not flat', async () =>
        expect(
          await fluentEmit(emitGenerator([[1, 2], [3, 4, 5], [], [6]]))
            .flatten()
            .toArray(),
        ).toEqual([1, 2, 3, 4, 5, 6]));
      it('with mapper', async () =>
        expect(
          await fluentEmit(subject)
            .flatten((p) => p.emails)
            .toArray(),
        ).toEqual(flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails)));
    });
    describe('sort', () => {
      it('empty', async () =>
        expect(
          await fluentEmit(emitGenerator([])).sort().toArray(),
        ).toBeEmpty());
      it('flat numbers', async () =>
        expect(
          await fluentEmit(emitGenerator([6, 4, 5, 3, 2, 1]))
            .sort()
            .toArray(),
        ).toEqual([1, 2, 3, 4, 5, 6]));
      it('flat numbers with reversed comparison', async () =>
        expect(
          await fluentEmit(emitGenerator([6, 4, 5, 3, 2, 1]))
            .sort((a, b) => b - a)
            .toArray(),
        ).toEqual([6, 5, 4, 3, 2, 1]));
    });
    describe('distinct', () => {
      it('empty', async () =>
        expect(
          await fluentEmit(emitGenerator([])).distinct().toArray(),
        ).toBeEmpty());
      it('not distinct numbers', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 1, 1, 2, 2, 3]))
            .distinct()
            .toArray(),
        ).toEqual([1, 2, 3]));
      it('already distinct collection', async () =>
        expect(await fluentEmit(subject).distinct().toArray()).toEqual(data));
      it('with mapper', async () =>
        expect(
          await fluentEmit(subject)
            .distinct((p) => p.gender)
            .toArray(),
        ).toEqual(picker(0, 3, 4, 5)));
    });
    describe('group', () => {
      it('empty', async () =>
        expect(
          await fluentEmit(emitGenerator([] as Person[]))
            .group((p) => p.gender)
            .toArray(),
        ).toBeEmpty());
      it('non-empty', async () => {
        const groups = await fluentEmit(subject)
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
    });
    describe('avg', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).avg()).toEqual(NaN));
      it('one element', async () =>
        expect(await fluentEmit(emitGenerator([2])).avg()).toEqual(2));
      it('multiple elements', async () =>
        expect(await fluentEmit(emitGenerator([2, 3, 4, 5])).avg()).toEqual(
          3.5,
        ));
      it('multiple elements with predicate', async () =>
        expect(await fluentEmit(subject).avg((x) => x.emails.length)).toEqual(
          1,
        ));
    });
    describe('min', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).min()).toEqual(undefined));
      it('one element', async () =>
        expect(await fluentEmit(emitGenerator([2])).min()).toEqual(2));
      it('multiple elements', async () =>
        expect(await fluentEmit(emitGenerator([2, 3, 4, 5])).min()).toEqual(2));
      it('multiple elements with predicate', async () =>
        expect(await fluentEmit(subject).min((x) => x.emails.length)).toEqual({
          emails: [],
          name: '0: w/o gender & 0 emails',
        }));
    });
    describe('sum', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).sum()).toEqual(0));
      it('one element', async () =>
        expect(await fluentEmit(emitGenerator([2])).sum()).toEqual(2));
      it('multiple elements', async () =>
        expect(await fluentEmit(emitGenerator([2, 3, 4, 5])).sum()).toEqual(
          14,
        ));
      it('multiple elements with predicate', async () =>
        expect(await fluentEmit(subject).sum((x) => x.emails.length)).toEqual(
          12,
        ));
    });
    describe('count', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).count()).toEqual(0));
      it('one element', async () =>
        expect(await fluentEmit(emitGenerator([0])).count()).toEqual(1));
      it('multiple elements', async () =>
        expect(await fluentEmit(subject).count()).toEqual(data.length));
      it('multiple elements with predicate', async () =>
        expect(
          await fluentEmit(subject).count((x) => x.emails.length > 0),
        ).toEqual(8));
    });
    describe('first', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).first()).toBeUndefined());
      it('not empty', async () =>
        expect(await fluentEmit(emitGenerator([3, 1])).first()).toEqual(3));
      it('with predicate', async () =>
        expect(
          await fluentEmit(emitGenerator([3, 1, 2, 6])).first(
            (x) => x % 2 === 0,
          ),
        ).toEqual(2));
    });
    describe('last', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).last()).toBeUndefined());
      it('not empty', async () =>
        expect(await fluentEmit(emitGenerator([3, 1])).last()).toEqual(1));
      it('with predicate', async () =>
        expect(
          await fluentEmit(emitGenerator([3, 1, 2, 6])).last(
            (x) => x % 2 === 0,
          ),
        ).toEqual(6));
    });
    describe('reduceAndMap', () => {
      it('empty', async () =>
        expect(
          await fluentEmit(emitGenerator([])).reduceAndMap(
            (a, b) => (a += b),
            0,
            (a) => a * 10 + 1,
          ),
        ).toEqual(1));
      it('not empty', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 2, 3])).reduceAndMap(
            (a, b) => (a += b),
            0,
            (a) => a * 10 + 1,
          ),
        ).toEqual(61));
    });
    describe('reduce', () => {
      it('empty', async () =>
        expect(
          await fluentEmit(emitGenerator([])).reduce((a, b) => (a += b), 0),
        ).toEqual(0));
      it('not empty', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 2, 3])).reduce(
            (a, b) => (a += b),
            0,
          ),
        ).toEqual(6));
    });
    describe('all', () => {
      it('empty', async () =>
        expect(
          await fluentEmit(emitGenerator([])).all((a: number) => a % 2 === 0),
        ).toBe(true));
      it('false', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 2, 3])).all(
            (a: number) => a % 2 === 0,
          ),
        ).toBe(false));
      it('true', async () =>
        expect(
          await fluentEmit(emitGenerator([2, 4, 6])).all(
            (a: number) => a % 2 === 0,
          ),
        ).toBe(true));
    });
    describe('any', () => {
      it('empty', async () =>
        expect(
          await fluentEmit(emitGenerator([])).any((a: number) => a % 2 === 0),
        ).toBe(false));
      it('false', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 3, 5])).any(
            (a: number) => a % 2 === 0,
          ),
        ).toBe(false));
      it('true', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 2, 3])).any(
            (a: number) => a % 2 === 0,
          ),
        ).toBe(true));
    });
    describe('contains', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).contains(4)).toBe(false));
      it('false', async () =>
        expect(await fluentEmit(emitGenerator([1, 3, 5])).contains(4)).toBe(
          false,
        ));
      it('true', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 4])).contains(4)).toBe(
          true,
        ));
    });
    describe('toObject', () => {
      it('empty', async () =>
        expect(
          await fluentEmit(emitGenerator([])).toObject(
            (x) => x.gender as string,
            (x) => x.name,
          ),
        ).toEqual({}));
      it('not empty', async () =>
        expect(
          await fluentEmit(
            emitGenerator([
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
            ]),
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
          await fluentEmit(
            emitGenerator([
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
            ]),
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
    describe('hasLessThan', () => {
      it('false', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasLessThan(3)).toBe(
          false,
        ));
      it('true', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasLessThan(4)).toBe(
          true,
        ));
    });
    describe('hasLessOrExactly', () => {
      it('false', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 2, 3])).hasLessOrExactly(2),
        ).toBe(false));
      it('true', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 2, 3])).hasLessOrExactly(3),
        ).toBe(true));
      it('true for less', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 2, 3])).hasLessOrExactly(4),
        ).toBe(true));
    });
    describe('hasMoreThan', () => {
      it('false', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasMoreThan(3)).toBe(
          false,
        ));
      it('true', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasMoreThan(2)).toBe(
          true,
        ));
    });
    describe('hasMoreOrExactly', () => {
      it('false', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 2, 3])).hasMoreOrExactly(4),
        ).toBe(false));
      it('true', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 2, 3])).hasMoreOrExactly(3),
        ).toBe(true));
      it('true for more', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 2, 3])).hasMoreOrExactly(2),
        ).toBe(true));
    });
    describe('hasExactly', () => {
      it('false', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasExactly(2)).toBe(
          false,
        ));
      it('true', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasExactly(3)).toBe(
          true,
        ));
    });
    describe('execute', () => {
      it('should run what is passed', async () => {
        const action = jest.fn();

        const result = await fluentEmit(emitGenerator([1, 2, 3]))
          .execute(action)
          .toArray();

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

        const result = await fluentEmit(emitGenerator(it1))
          .merge(it2)
          .toArray();
        const sorted = result.concat().sort();

        expect(sorted).not.toEqual(result);
        expect(sorted).toEqual([1, 2, 3, 'a', 'b', 'c']);
      });
    });
    it('should thrown an error when partition size is not valid', () => {
      let error: any;
      try {
        fluentEmit(emitGenerator([])).partition(0);
      } catch (err) {
        error = err;
      }
      expect(error).toBeInstanceOf(Error);
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

        const result = await fluentEmit(emitGenerator(it1))
          .mergeCatching(callback, it2)
          .toArray();

        expect(callback).toHaveCallsLike([testError, 1]);
        expect(result).toEqual(['a', 1, 2, 3]);
      });
    });
  };
  describe('on EventEmitter', suite(emitGenerator));

  describe('waitAll', () => {
    it('should return a promises with resolves when all promises are resolved', async () => {
      let resolved = 0;

      const promise = fluentEmit(
        emitGenerator(fluent(interval(1, 10)).toAsync()),
      ).waitAll(
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
});
