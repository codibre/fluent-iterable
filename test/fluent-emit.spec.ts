import { fluentEmit, interval, fluent } from '../src';
import expect, { flatMap } from './tools';
import { Person, data, Gender, picker } from './fluent.spec';
import delay from 'delay';
import { stub } from 'sinon';
import { EventEmitter } from 'events';
import { promisify } from 'util';
import { AnyIterable } from 'augmentative-iterable';
import { ObjectReadableMock } from 'stream-mock';
import { forEmitOf } from '../src/for-emit-of';

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
    context('basics work', async () => {
      it('wrapping does not fail', async () => {
        fluentEmit(subject);
      });
      it('can iterate through', async () => {
        let idx = 0;
        for await (const person of fluentEmit(subject)) {
          expect(person).to.equal(data[idx++]);
        }
      });
      it('can convert to array', async () => {
        expect(await fluentEmit(subject).toArray()).to.eql(data);
      });
    });
    context('withIndex', () => {
      it('should return Indexed instances from informed array', async () => {
        expect(
          await fluentEmit(emitGenerator(['a', 'b', 'c']))
            .withIndex()
            .toArray(),
        ).to.be.eql([
          { idx: 0, value: 'a' },
          { idx: 1, value: 'b' },
          { idx: 2, value: 'c' },
        ]);
      });
    });
    context('takeWhile', async () => {
      it('works with initially not true statement', async () =>
        expect(
          await fluentEmit(subject)
            .takeWhile((p) => p.emails.length > 0)
            .toArray(),
        ).to.be.empty);
      it('works with eventually not true statement', async () => {
        expect(
          await fluentEmit(subject)
            .takeWhile((p) => p.gender === undefined)
            .toArray(),
        ).to.eql(data.slice(0, 3));
      });
      it('works with always true statement', async () => {
        expect(
          await fluentEmit(subject)
            .takeWhile((p) => p.name.length > 0)
            .toArray(),
        ).to.eql(data);
      });
    });
    context('take', async () => {
      it('works with negative count', async () =>
        expect(await fluentEmit(subject).take(-5).toArray()).to.be.empty);
      it('works with zero count', async () =>
        expect(await fluentEmit(subject).take(0).toArray()).to.be.empty);
      it('works with one count', async () =>
        expect(await fluentEmit(subject).take(1).toArray()).to.eql(
          data.slice(0, 1),
        ));
      it('works with count < length', async () =>
        expect(await fluentEmit(subject).take(5).toArray()).to.eql(
          data.slice(0, 5),
        ));
      it('works with count = length', async () =>
        expect(await fluentEmit(subject).take(data.length).toArray()).to.eql(
          data,
        ));
      it('works with count > length', async () =>
        expect(
          await fluentEmit(subject)
            .take(data.length * 2)
            .toArray(),
        ).to.eql(data));
    });
    context('skipWhile', async () => {
      it('works with initially not true statement', async () =>
        expect(
          await fluentEmit(subject)
            .skipWhile((p) => p.emails.length > 0)
            .toArray(),
        ).to.eql(data));
      it('works with eventually not true statement', async () =>
        expect(
          await fluentEmit(subject)
            .skipWhile((p) => p.gender === undefined)
            .toArray(),
        ).to.eql(data.slice(3)));
      it('works with always true statement', async () =>
        expect(
          await fluentEmit(subject)
            .skipWhile((p) => p.name.length > 0)
            .toArray(),
        ).to.be.empty);
      it('works with alternating true statement', async () =>
        expect(
          await fluentEmit(subject)
            .skipWhile((p) => p.emails.length === 0)
            .toArray(),
        ).to.eql(data.slice(1)));
    });
    context('skip', async () => {
      it('works with negative count', async () =>
        expect(await fluentEmit(subject).skip(-5).toArray()).to.eql(data));
      it('works with zero count', async () =>
        expect(await fluentEmit(subject).skip(0).toArray()).to.eql(data));
      it('works with one count', async () =>
        expect(await fluentEmit(subject).skip(1).toArray()).to.eql(
          data.slice(1),
        ));
      it('works with count < length', async () =>
        expect(await fluentEmit(subject).skip(5).toArray()).to.eql(
          data.slice(5),
        ));
      it('works with count = length', async () =>
        expect(await fluentEmit(subject).skip(data.length).toArray()).to.be
          .empty);
      it('works with count > length', async () =>
        expect(
          await fluentEmit(subject)
            .skip(data.length * 2)
            .toArray(),
        ).to.be.empty);
    });
    describe('map', () => {
      it('maps to undefined', async () => {
        const res = await fluentEmit(subject)
          .map(() => undefined)
          .toArray();
        expect(res).to.length(data.length);
        res.forEach((item) => expect(item).to.be.undefined);
      });
      it('maps to projection', async () => {
        const res = await fluentEmit(subject)
          .map((p) => p.name)
          .toArray();
        expect(res).to.length(data.length);
        let idx = 0;
        for await (const item of res) {
          expect(item).to.equal(data[idx++].name);
        }
      });
    });
    describe('filter', () => {
      it('with always false predicate', async () =>
        expect(
          await fluentEmit(subject)
            .filter(() => false)
            .toArray(),
        ).to.be.empty);
      it('with always true predicate', async () =>
        expect(
          await fluentEmit(subject)
            .filter(() => true)
            .toArray(),
        ).to.eql(data));
      it('with alternating predicate', async () =>
        expect(
          await fluentEmit(subject)
            .filter((p) => p.gender === Gender.Female)
            .toArray(),
        ).to.eql(picker(4, 7, 10)));
    });
    describe('partition', () => {
      it('should divide result in blocks of the specified size', async () => {
        expect(
          await fluentEmit(emitGenerator([1, 2, 3, 4, 5, 6, 7, 8]))
            .partition(3)
            .map((x) => x.toArray())
            .toArray(),
        ).to.be.eql([
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
        ).to.eql([additionalPerson]));
      it('with non-empty iterable', async () =>
        expect(
          await fluentEmit(subject).append(additionalPerson).toArray(),
        ).to.eql([...data, additionalPerson]));
    });
    describe('prepend', () => {
      it('with empty iterable', async () =>
        expect(
          await fluentEmit(emitGenerator([] as Person[]))
            .prepend(additionalPerson)
            .toArray(),
        ).to.eql([additionalPerson]));
      it('with non-empty iterable', async () =>
        expect(
          await fluentEmit(subject).prepend(additionalPerson).toArray(),
        ).to.eql([additionalPerson, ...data]));
    });
    describe('concat', () => {
      it('one empty array', async () =>
        expect(
          await fluentEmit(subject)
            .concat(new ObjectReadableMock([]))
            .toArray(),
        ).to.eql(data));
      it('two empty arrays', async () =>
        expect(
          await fluentEmit(subject)
            .concat(new ObjectReadableMock([]), [])
            .toArray(),
        ).to.eql(data));
      it('one non-empty arrays', async () =>
        expect(
          await fluentEmit(subject)
            .concat(new ObjectReadableMock([additionalPerson]))
            .toArray(),
        ).to.eql([...data, additionalPerson]));
      it('two non-empty arrays', async () =>
        expect(
          await fluentEmit(subject)
            .concat(
              new ObjectReadableMock([additionalPerson]),
              forEmitOf(createSubject()),
            )
            .toArray(),
        ).to.eql([...data, additionalPerson, ...data]));
      it('one empty and one non-empty arrays', async () =>
        expect(
          await fluentEmit(subject)
            .concat(new ObjectReadableMock([]), [additionalPerson])
            .toArray(),
        ).to.eql([...data, additionalPerson]));
    });
    describe('repeat', () => {
      it('negative number of times', async () =>
        expect(await fluentEmit(subject).repeat(-5).toArray()).to.be.empty);
      it('zero times', async () =>
        expect(await fluentEmit(subject).repeat(0).toArray()).to.be.empty);
      it('once', async () =>
        expect(await fluentEmit(subject).repeat(1).toArray()).to.eql(data));
      it('twice', async () =>
        expect(await fluentEmit(subject).repeat(2).toArray()).to.eql([
          ...data,
          ...data,
        ]));
      it('three times', async () =>
        expect(await fluentEmit(subject).repeat(3).toArray()).to.eql([
          ...data,
          ...data,
          ...data,
        ]));
    });
    describe('flatten', () => {
      it('empty array', async () =>
        expect(await fluentEmit(emitGenerator([])).flatten().toArray()).to.be
          .empty);
      it('already flat fails', async () => {
        let error: unknown;

        try {
          await fluentEmit(subject).flatten().toArray();
        } catch (err) {
          error = err;
        }

        expect(error).to.exist;
      });
      it('not flat', async () =>
        expect(
          await fluentEmit(emitGenerator([[1, 2], [3, 4, 5], [], [6]]))
            .flatten()
            .toArray(),
        ).to.eql([1, 2, 3, 4, 5, 6]));
      it('with mapper', async () =>
        expect(
          await fluentEmit(subject)
            .flatten((p) => p.emails)
            .toArray(),
        ).to.eql(flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails)));
    });
    describe('sort', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).sort().toArray()).to.be
          .empty);
      it('flat numbers', async () =>
        expect(
          await fluentEmit(emitGenerator([6, 4, 5, 3, 2, 1]))
            .sort()
            .toArray(),
        ).to.eql([1, 2, 3, 4, 5, 6]));
      it('flat numbers with reversed comparison', async () =>
        expect(
          await fluentEmit(emitGenerator([6, 4, 5, 3, 2, 1]))
            .sort((a, b) => b - a)
            .toArray(),
        ).to.eql([6, 5, 4, 3, 2, 1]));
    });
    describe('distinct', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).distinct().toArray()).to.be
          .empty);
      it('not distinct numbers', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 1, 1, 2, 2, 3]))
            .distinct()
            .toArray(),
        ).to.eql([1, 2, 3]));
      it('already distinct collection', async () =>
        expect(await fluentEmit(subject).distinct().toArray()).to.eql(data));
      it('with mapper', async () =>
        expect(
          await fluentEmit(subject)
            .distinct((p) => p.gender)
            .toArray(),
        ).to.eql(picker(0, 3, 4, 5)));
    });
    describe('group', () => {
      it('empty', async () =>
        expect(
          await fluentEmit(emitGenerator([] as Person[]))
            .group((p) => p.gender)
            .toArray(),
        ).to.be.empty);
      it('non-empty', async () => {
        const groups = await fluentEmit(subject)
          .group((p) => p.gender)
          .toArray();
        expect(groups.length).to.eql(4);
        expect(groups.map((grp) => grp.key)).to.have.members([
          undefined,
          Gender.Male,
          Gender.Female,
          Gender.NonBinary,
        ]);
        for await (const grp of groups) {
          expect(grp.values.toArray()).to.eql(
            data.filter((p) => p.gender === grp.key),
          );
        }
      });
    });
    describe('avg', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).avg()).to.be.eql(NaN));
      it('one element', async () =>
        expect(await fluentEmit(emitGenerator([2])).avg()).to.equal(2));
      it('multiple elements', async () =>
        expect(await fluentEmit(emitGenerator([2, 3, 4, 5])).avg()).to.equal(
          3.5,
        ));
      it('multiple elements with predicate', async () =>
        expect(await fluentEmit(subject).avg((x) => x.emails.length)).to.equal(
          1,
        ));
    });
    describe('min', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).min()).to.be.eql(undefined));
      it('one element', async () =>
        expect(await fluentEmit(emitGenerator([2])).min()).to.equal(2));
      it('multiple elements', async () =>
        expect(await fluentEmit(emitGenerator([2, 3, 4, 5])).min()).to.equal(
          2,
        ));
      it('multiple elements with predicate', async () =>
        expect(await fluentEmit(subject).min((x) => x.emails.length)).to.eql({
          emails: [],
          name: '0: w/o gender & 0 emails',
        }));
    });
    describe('sum', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).sum()).to.be.eql(0));
      it('one element', async () =>
        expect(await fluentEmit(emitGenerator([2])).sum()).to.equal(2));
      it('multiple elements', async () =>
        expect(await fluentEmit(emitGenerator([2, 3, 4, 5])).sum()).to.equal(
          14,
        ));
      it('multiple elements with predicate', async () =>
        expect(await fluentEmit(subject).sum((x) => x.emails.length)).to.equal(
          12,
        ));
    });
    describe('count', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).count()).to.equal(0));
      it('one element', async () =>
        expect(await fluentEmit(emitGenerator([0])).count()).to.equal(1));
      it('multiple elements', async () =>
        expect(await fluentEmit(subject).count()).to.equal(data.length));
      it('multiple elements with predicate', async () =>
        expect(
          await fluentEmit(subject).count((x) => x.emails.length > 0),
        ).to.equal(8));
    });
    describe('first', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).first()).to.be.undefined);
      it('not empty', async () =>
        expect(await fluentEmit(emitGenerator([3, 1])).first()).to.be.equal(3));
      it('with predicate', async () =>
        expect(
          await fluentEmit(emitGenerator([3, 1, 2, 6])).first(
            (x) => x % 2 === 0,
          ),
        ).to.be.equal(2));
    });
    describe('last', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).last()).to.be.undefined);
      it('not empty', async () =>
        expect(await fluentEmit(emitGenerator([3, 1])).last()).to.be.equal(1));
      it('with predicate', async () =>
        expect(
          await fluentEmit(emitGenerator([3, 1, 2, 6])).last(
            (x) => x % 2 === 0,
          ),
        ).to.be.equal(6));
    });
    describe('reduceAndMap', () => {
      it('empty', async () =>
        expect(
          await fluentEmit(emitGenerator([])).reduceAndMap(
            (a, b) => (a += b),
            0,
            (a) => a * 10 + 1,
          ),
        ).to.be.equal(1));
      it('not empty', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 2, 3])).reduceAndMap(
            (a, b) => (a += b),
            0,
            (a) => a * 10 + 1,
          ),
        ).to.be.equals(61));
    });
    describe('reduce', () => {
      it('empty', async () =>
        expect(
          await fluentEmit(emitGenerator([])).reduce((a, b) => (a += b), 0),
        ).to.be.equal(0));
      it('not empty', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 2, 3])).reduce(
            (a, b) => (a += b),
            0,
          ),
        ).to.be.equals(6));
    });
    describe('all', () => {
      it('empty', async () =>
        expect(
          await fluentEmit(emitGenerator([])).all((a: number) => a % 2 === 0),
        ).to.be.true);
      it('false', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 2, 3])).all(
            (a: number) => a % 2 === 0,
          ),
        ).to.be.false);
      it('true', async () =>
        expect(
          await fluentEmit(emitGenerator([2, 4, 6])).all(
            (a: number) => a % 2 === 0,
          ),
        ).to.be.true);
    });
    describe('any', () => {
      it('empty', async () =>
        expect(
          await fluentEmit(emitGenerator([])).any((a: number) => a % 2 === 0),
        ).to.be.false);
      it('false', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 3, 5])).any(
            (a: number) => a % 2 === 0,
          ),
        ).to.be.false);
      it('true', async () =>
        expect(
          await fluentEmit(emitGenerator([1, 2, 3])).any(
            (a: number) => a % 2 === 0,
          ),
        ).to.be.true);
    });
    describe('contains', () => {
      it('empty', async () =>
        expect(await fluentEmit(emitGenerator([])).contains(4)).to.be.false);
      it('false', async () =>
        expect(await fluentEmit(emitGenerator([1, 3, 5])).contains(4)).to.be
          .false);
      it('true', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 4])).contains(4)).to.be
          .true);
    });
    describe('toObject', () => {
      it('empty', async () =>
        expect(
          await fluentEmit(emitGenerator([])).toObject(
            (x) => x.gender as string,
            (x) => x.name,
          ),
        ).to.be.deep.equal({}));
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
        ).to.be.deep.equal({
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
    });
    describe('hasLessThan', () => {
      it('false', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasLessThan(3)).to
          .false);
      it('true', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasLessThan(4)).to
          .true);
    });
    describe('hasLessOrExactly', () => {
      it('false', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasLessOrExactly(2))
          .to.false);
      it('true', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasLessOrExactly(3))
          .to.true);
      it('true for less', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasLessOrExactly(4))
          .to.true);
    });
    describe('hasMoreThan', () => {
      it('false', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasMoreThan(3)).to
          .false);
      it('true', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasMoreThan(2)).to
          .true);
    });
    describe('hasMoreOrExactly', () => {
      it('false', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasMoreOrExactly(4))
          .to.false);
      it('true', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasMoreOrExactly(3))
          .to.true);
      it('true for more', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasMoreOrExactly(2))
          .to.true);
    });
    describe('hasExactly', () => {
      it('false', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasExactly(2)).to
          .false);
      it('true', async () =>
        expect(await fluentEmit(emitGenerator([1, 2, 3])).hasExactly(3)).to
          .true);
    });
    describe('execute', () => {
      it('should run what is passed', async () => {
        const action = stub();

        const result = await fluentEmit(emitGenerator([1, 2, 3]))
          .execute(action)
          .toArray();

        expect(action).to.have.callsLike([1], [2], [3]);
        expect(result).to.be.eql([1, 2, 3]);
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

        expect(sorted).to.be.not.eql(result);
        expect(sorted).to.be.deep.equal([1, 2, 3, 'a', 'b', 'c']);
      });
    });
    it('should thrown an error when partition size is not valid', () => {
      let error: any;
      try {
        fluentEmit(emitGenerator([])).partition(0);
      } catch (err) {
        error = err;
      }
      expect(error).to.be.instanceOf(Error);
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
        const callback = stub();

        const result = await fluentEmit(emitGenerator(it1))
          .mergeCatching(callback, it2)
          .toArray();

        expect(callback).to.have.been.calledOnceWithExactly(testError, 1);
        expect(result).to.be.deep.equal(['a', 1, 2, 3]);
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

      expect(resolved).to.be.eq(0);
      const result = await promise;
      expect(resolved).to.be.eq(10);
      expect(result).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });
});
