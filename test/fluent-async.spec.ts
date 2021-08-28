import {
  fluentAsync,
  interval,
  fluent,
  o,
  identity,
  od,
  getGroupingDistinct,
} from '../src';
import expect, { flatMap } from './tools';
import { ObjectReadableMock } from 'stream-mock';
import { Person, data, Gender, picker } from './fluent.spec';
import delay from 'delay';
import { stub } from 'sinon';
import { AnyIterable } from 'augmentative-iterable';
import { emitGenerator } from './fluent-emit.spec';
import { fluentSymbolAsync } from '../src/types-internal';

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
    context('basics work', async () => {
      it('wrapping does not fail', async () => {
        fluentAsync(subject);
      });
      it('can iterate through', async () => {
        let idx = 0;
        for await (const person of fluentAsync(subject)) {
          expect(person).to.equal(data[idx++]);
        }
      });
      it('can convert to array', async () => {
        expect(await fluentAsync(subject).toArray()).to.eql(data);
      });
      it('iterate over a Promise of an iterable', async () => {
        expect(
          await fluentAsync(
            new Promise<any>((resolve) => resolve(subject)),
          ).toArray(),
        ).to.eql(data);
      });
      it('should iterate with forEach', async () => {
        let sum = 0;
        await fluentAsync(new ObjectReadableMock([1, 2, 3])).forEach(
          (x) => (sum += x),
        );
        expect(sum).to.be.eq(6);
      });
    });
    context('withIndex', () => {
      it('should return Indexed instances from informed array', async () => {
        expect(
          await fluentAsync(new ObjectReadableMock(['a', 'b', 'c']))
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
          await fluentAsync(subject)
            .takeWhile((p) => p.emails.length > 0)
            .toArray(),
        ).to.be.empty);
      it('works with eventually not true statement', async () => {
        expect(
          await fluentAsync(subject)
            .takeWhile((p) => p.gender === undefined)
            .toArray(),
        ).to.eql(data.slice(0, 3));
      });
      it('works with always true statement', async () => {
        expect(
          await fluentAsync(subject)
            .takeWhile((p) => p.name.length > 0)
            .toArray(),
        ).to.eql(data);
      });
    });
    context('take', async () => {
      it('works with negative count', async () =>
        expect(await fluentAsync(subject).take(-5).toArray()).to.be.empty);
      it('works with zero count', async () =>
        expect(await fluentAsync(subject).take(0).toArray()).to.be.empty);
      it('works with one count', async () =>
        expect(await fluentAsync(subject).take(1).toArray()).to.eql(
          data.slice(0, 1),
        ));
      it('works with count < length', async () =>
        expect(await fluentAsync(subject).take(5).toArray()).to.eql(
          data.slice(0, 5),
        ));
      it('works with count = length', async () =>
        expect(await fluentAsync(subject).take(data.length).toArray()).to.eql(
          data,
        ));
      it('works with count > length', async () =>
        expect(
          await fluentAsync(subject)
            .take(data.length * 2)
            .toArray(),
        ).to.eql(data));
    });
    context('skipWhile', async () => {
      it('works with initially not true statement', async () =>
        expect(
          await fluentAsync(subject)
            .skipWhile((p) => p.emails.length > 0)
            .toArray(),
        ).to.eql(data));
      it('works with eventually not true statement', async () =>
        expect(
          await fluentAsync(subject)
            .skipWhile((p) => p.gender === undefined)
            .toArray(),
        ).to.eql(data.slice(3)));
      it('works with always true statement', async () =>
        expect(
          await fluentAsync(subject)
            .skipWhile((p) => p.name.length > 0)
            .toArray(),
        ).to.be.empty);
      it('works with alternating true statement', async () =>
        expect(
          await fluentAsync(subject)
            .skipWhile((p) => p.emails.length === 0)
            .toArray(),
        ).to.eql(data.slice(1)));
    });
    context('skip', async () => {
      it('works with negative count', async () =>
        expect(await fluentAsync(subject).skip(-5).toArray()).to.eql(data));
      it('works with zero count', async () =>
        expect(await fluentAsync(subject).skip(0).toArray()).to.eql(data));
      it('works with one count', async () =>
        expect(await fluentAsync(subject).skip(1).toArray()).to.eql(
          data.slice(1),
        ));
      it('works with count < length', async () =>
        expect(await fluentAsync(subject).skip(5).toArray()).to.eql(
          data.slice(5),
        ));
      it('works with count = length', async () =>
        expect(await fluentAsync(subject).skip(data.length).toArray()).to.be
          .empty);
      it('works with count > length', async () =>
        expect(
          await fluentAsync(subject)
            .skip(data.length * 2)
            .toArray(),
        ).to.be.empty);
    });
    describe('map', () => {
      it('maps to undefined', async () => {
        const res = await fluentAsync(subject)
          .map(() => undefined)
          .toArray();
        expect(res).to.length(data.length);
        res.forEach((item) => expect(item).to.be.undefined);
      });
      it('maps to projection', async () => {
        const res = await fluentAsync(subject)
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
          await fluentAsync(subject)
            .filter(() => false)
            .toArray(),
        ).to.be.empty);
      it('with always true predicate', async () =>
        expect(
          await fluentAsync(subject)
            .filter(() => true)
            .toArray(),
        ).to.eql(data));
      it('with alternating predicate', async () =>
        expect(
          await fluentAsync(subject)
            .filter((p) => p.gender === Gender.Female)
            .toArray(),
        ).to.eql(picker(4, 7, 10)));
      it('assuring order', async () => {
        const call = stub();
        expect(
          await fluentAsync([1, 2, 3, 4, 3])
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
      it('should apply type guard properly', async () => {
        const test: (number | string)[] = [1, 'b', 2, 'c', 3];
        const result = await fluentAsync(test)
          .filter((a): a is number => typeof a === 'number')
          .toArray();

        expect(result[0] + 1).to.be.eq(2);
      });
    });
    describe('partition', () => {
      it('should divide result in blocks of the specified size', async () => {
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3, 4, 5, 6, 7, 8]))
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
          fluentAsync([]).partition(0);
        } catch (err) {
          error = err;
        }
        expect(error).to.be.instanceOf(Error);
      });
    });
    describe('append', () => {
      it('with empty iterable', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([] as Person[]))
            .append(additionalPerson)
            .toArray(),
        ).to.eql([additionalPerson]));
      it('with non-empty iterable', async () =>
        expect(
          await fluentAsync(subject).append(additionalPerson).toArray(),
        ).to.eql([...data, additionalPerson]));
    });
    describe('prepend', () => {
      it('with empty iterable', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([] as Person[]))
            .prepend(additionalPerson)
            .toArray(),
        ).to.eql([additionalPerson]));
      it('with non-empty iterable', async () =>
        expect(
          await fluentAsync(subject).prepend(additionalPerson).toArray(),
        ).to.eql([additionalPerson, ...data]));
    });

    describe('concat', () => {
      it('one empty array', async () =>
        expect(
          await fluentAsync(subject)
            .concat(new ObjectReadableMock([]))
            .toArray(),
        ).to.eql(data));
      it('two empty arrays', async () =>
        expect(
          await fluentAsync(subject)
            .concat(new ObjectReadableMock([]), new ObjectReadableMock([]))
            .toArray(),
        ).to.eql(data));
      it('one non-empty arrays', async () =>
        expect(
          await fluentAsync(subject)
            .concat(new ObjectReadableMock([additionalPerson]))
            .toArray(),
        ).to.eql([...data, additionalPerson]));
      it('two non-empty arrays', async () =>
        expect(
          await fluentAsync(subject)
            .concat(new ObjectReadableMock([additionalPerson]), createSubject())
            .toArray(),
        ).to.eql([...data, additionalPerson, ...data]));
      it('one empty and one non-empty arrays', async () =>
        expect(
          await fluentAsync(subject)
            .concat(
              new ObjectReadableMock([]),
              new ObjectReadableMock([additionalPerson]),
            )
            .toArray(),
        ).to.eql([...data, additionalPerson]));
    });

    describe('concatEmitter', () => {
      it('one empty array', async () =>
        expect(
          await fluentAsync(subject)
            .concatEmitter(new ObjectReadableMock([]))
            .toArray(),
        ).to.eql(data));
      it('one non-empty arrays', async () =>
        expect(
          await fluentAsync(subject)
            .concatEmitter(new ObjectReadableMock([additionalPerson]))
            .toArray(),
        ).to.eql([...data, additionalPerson]));
    });

    describe('repeat', () => {
      it('negative number of times', async () =>
        expect(await fluentAsync(subject).repeat(-5).toArray()).to.be.empty);
      it('zero times', async () =>
        expect(await fluentAsync(subject).repeat(0).toArray()).to.be.empty);
      it('once', async () =>
        expect(await fluentAsync(subject).repeat(1).toArray()).to.eql(data));
      it('twice', async () =>
        expect(await fluentAsync(subject).repeat(2).toArray()).to.eql([
          ...data,
          ...data,
        ]));
      it('three times', async () =>
        expect(await fluentAsync(subject).repeat(3).toArray()).to.eql([
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
          ).to.be.empty);
        it('already flat fails', async () => {
          let error: unknown;

          try {
            await fluentAsync(subject)[func]().toArray();
          } catch (err) {
            error = err;
          }

          expect(error).to.exist;
        });
        it('not flat', async () =>
          expect(
            await fluentAsync(
              new ObjectReadableMock([[1, 2], [3, 4, 5], [], [6]]),
            )
              [func]()
              .toArray(),
          ).to.eql([1, 2, 3, 4, 5, 6]));
        it('with mapper', async () =>
          expect(
            await fluentAsync(subject)
              [func]((p) => p.emails)
              .toArray(),
          ).to.eql(flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails)));
        it('with property key', async () =>
          expect(await fluentAsync(subject)[func]('emails').toArray()).to.eql(
            flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails),
          ));
        it('with no mapper and async items', async () =>
          expect(
            await fluentAsync(subject)
              .map(async (x) => x.emails)
              [func]()
              .toArray(),
          ).to.eql(flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails)));
        it('with mapper and async items', async () =>
          expect(
            await fluentAsync(subject)
              .map(async (x) => x)
              [func]((p) => p.emails)
              .toArray(),
          ).to.eql(flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails)));
        it('with property key', async () =>
          expect(await fluentAsync(subject)[func]('emails').toArray()).to.eql(
            flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), (p) => p.emails),
          ));
      });
    });
    describe('sort', () => {
      it('empty', async () =>
        expect(await fluentAsync(new ObjectReadableMock([])).sort().toArray())
          .to.be.empty);
      it('flat numbers', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([6, 4, 5, 3, 2, 1]))
            .sort()
            .toArray(),
        ).to.eql([1, 2, 3, 4, 5, 6]));
      it('flat numbers with reversed comparison', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([6, 4, 5, 3, 2, 1]))
            .sort((a, b) => b - a)
            .toArray(),
        ).to.eql([6, 5, 4, 3, 2, 1]));
    });
    describe('group', () => {
      it('empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([] as Person[]))
            .group((p) => p.gender)
            .toArray(),
        ).to.be.empty);
      it('non-empty', async () => {
        const groups = await fluentAsync(subject)
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
        expect(groups.length).to.eql(3);
        expect(groups.map((grp) => grp.key)).to.have.members([1, 2, 1]);

        groups.forEach(({ values }, i) => {
          values.withIndex().forEach(({ value, idx }) => {
            expect(value).to.be.eq(items[i * 2 + idx]);
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
        expect(groups.length).to.eql(3);
        expect(groups.map((grp) => grp.key)).to.have.members([1, 2, 1]);

        groups.forEach(({ values }, i) => {
          values.withIndex().forEach(({ value, idx }) => {
            expect(value).to.be.eql(expected[i * 2 + idx].v.toString());
          });
        });
      });
      it('should work with transformation expression', async () => {
        const groups = await fluentAsync(
          new ObjectReadableMock([1, 2, 2, 3, 4, 4, 5, 5, 5]),
        )
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
    describe('avg', () => {
      it('empty', async () =>
        expect(await fluentAsync(new ObjectReadableMock([])).avg()).to.be.eql(
          NaN,
        ));
      it('one element', async () =>
        expect(await fluentAsync(new ObjectReadableMock([2])).avg()).to.equal(
          2,
        ));
      it('multiple elements', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([2, 3, 4, 5])).avg(),
        ).to.equal(3.5));
      it('multiple elements with predicate', async () =>
        expect(await fluentAsync(subject).avg((x) => x.emails.length)).to.equal(
          1,
        ));
    });
    describe('min', () => {
      it('empty', async () =>
        expect(await fluentAsync(new ObjectReadableMock([])).min()).to.be.eql(
          undefined,
        ));
      it('one element', async () =>
        expect(await fluentAsync(new ObjectReadableMock([2])).min()).to.equal(
          2,
        ));
      it('multiple elements', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([2, 3, 4, 5])).min(),
        ).to.equal(2));
      it('multiple elements with predicate', async () =>
        expect(
          await fluentAsync(subject).min(async (x) => x.emails.length),
        ).to.eql({
          emails: [],
          name: '0: w/o gender & 0 emails',
        }));
    });
    describe('sum', () => {
      it('empty', async () =>
        expect(await fluentAsync(new ObjectReadableMock([])).sum()).to.be.eql(
          0,
        ));
      it('one element', async () =>
        expect(await fluentAsync(new ObjectReadableMock([2])).sum()).to.equal(
          2,
        ));
      it('multiple elements', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([2, 3, 4, 5])).sum(),
        ).to.equal(14));
      it('multiple elements with predicate', async () =>
        expect(await fluentAsync(subject).sum((x) => x.emails.length)).to.equal(
          12,
        ));
    });
    describe('min', () => {
      it('empty', async () =>
        expect(await fluentAsync([]).min()).to.eql(undefined));
      it('one element', async () =>
        expect(await fluentAsync([2]).min()).to.equal(2));
      it('multiple elements', async () =>
        expect(await fluentAsync([1, 3, 4, 5]).min()).to.equal(1));
      it('multiple non numeric elements', async () =>
        expect(await fluentAsync(['a', 'b', 'c', 'd', 'e']).min()).to.equal(
          'a',
        ));
      it('multiple elements with predicate', async () =>
        expect(await fluentAsync(subject).min((x) => x.emails.length)).to.eql({
          emails: [],
          name: '0: w/o gender & 0 emails',
        }));
      it('not assuring order', async () => {
        expect(await fluentAsync([5, 4, 3, 4, 1]).min()).to.be.eq(1);
      });
      it('assuring order', async () => {
        expect(await fluentAsync([5, 4, 3, 4, 1]).min(o(identity))).to.be.eq(5);
      });
      it('assuring descending order', async () => {
        expect(await fluentAsync([5, 4, 3, 4, 1]).min(od(identity))).to.be.eq(
          3,
        );
      });
    });
    describe('count', () => {
      it('empty', async () =>
        expect(await fluentAsync(new ObjectReadableMock([])).count()).to.equal(
          0,
        ));
      it('one element', async () =>
        expect(await fluentAsync(new ObjectReadableMock([0])).count()).to.equal(
          1,
        ));
      it('multiple elements', async () =>
        expect(await fluentAsync(subject).count()).to.equal(data.length));
      it('multiple elements with predicate', async () =>
        expect(
          await fluentAsync(subject).count((x) => x.emails.length > 0),
        ).to.equal(8));
      it('not assuring order', async () =>
        expect(
          await fluentAsync([1, 2, 4, 5, 6]).count((x) => x % 2 === 0),
        ).to.equal(3));
      it('assuring order', async () =>
        expect(
          await fluentAsync([1, 2, 4, 5, 6]).count(o((x) => x % 2 === 0)),
        ).to.equal(2));
      it('assuring descending order', async () =>
        expect(
          await fluentAsync([1, 2, 4, 5, 6]).count(o((x) => x % 2 === 0)),
        ).to.equal(2));
    });
    describe('first', () => {
      it('empty', async () =>
        expect(await fluentAsync(new ObjectReadableMock([])).first()).to.be
          .undefined);
      it('not empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([3, 1])).first(),
        ).to.be.equal(3));
      it('with predicate', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([3, 1, 2, 6])).first(
            (x) => x % 2 === 0,
          ),
        ).to.be.equal(2));
    });
    describe('last', () => {
      it('empty', async () =>
        expect(await fluentAsync(new ObjectReadableMock([])).last()).to.be
          .undefined);
      it('not empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([3, 1])).last(),
        ).to.be.equal(1));
      it('with predicate', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([3, 1, 2, 6, 3, 8])).last(
            (x) => x % 2 === 0,
          ),
        ).to.be.equal(8));
      it('assuring order', async () =>
        expect(
          await fluentAsync([3, 1, 2, 6, 3, 8]).last(o((x) => x % 2 === 0)),
        ).to.be.equal(6));
    });
    describe('reduceAndMap', () => {
      it('empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([])).reduceAndMap(
            (a, b) => (a += b),
            0,
            (a) => a * 10 + 1,
          ),
        ).to.be.equal(1));
      it('not empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).reduceAndMap(
            (a, b) => (a += b),
            0,
            (a) => a * 10 + 1,
          ),
        ).to.be.equals(61));
    });
    describe('reduce', () => {
      it('empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([])).reduce(
            (a, b) => (a += b),
            0,
          ),
        ).to.be.equal(0));
      it('not empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).reduce(
            (a, b) => (a += b),
            0,
          ),
        ).to.be.equals(6));
    });
    const all: ['all', 'every'] = ['all', 'every'];
    all.forEach((func) => {
      describe(func, () => {
        it('empty', async () =>
          expect(
            await fluentAsync(new ObjectReadableMock([]))[func](
              (a: number) => a % 2 === 0,
            ),
          ).to.be.true);
        it('false', async () =>
          expect(
            await fluentAsync(new ObjectReadableMock([1, 2, 3]))[func](
              (a: number) => a % 2 === 0,
            ),
          ).to.be.false);
        it('true', async () =>
          expect(
            await fluentAsync(new ObjectReadableMock([2, 4, 6]))[func](
              (a: number) => a % 2 === 0,
            ),
          ).to.be.true);
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
          ).to.be.false);
        it('false', async () =>
          expect(
            await fluentAsync(new ObjectReadableMock([1, 3, 5]))[func](
              (a: number) => a % 2 === 0,
            ),
          ).to.be.false);
        it('true', async () =>
          expect(
            await fluentAsync(new ObjectReadableMock([1, 2, 3]))[func](
              (a: number) => a % 2 === 0,
            ),
          ).to.be.true);
      });
    });
    describe('contains', () => {
      it('empty', async () =>
        expect(await fluentAsync(new ObjectReadableMock([])).contains(4)).to.be
          .false);
      it('false', async () =>
        expect(await fluentAsync(new ObjectReadableMock([1, 3, 5])).contains(4))
          .to.be.false);
      it('true', async () =>
        expect(await fluentAsync(new ObjectReadableMock([1, 2, 4])).contains(4))
          .to.be.true);
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
        ).to.be.deep.equal({}));
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
        ).to.be.deep.equal({
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
    });
    describe('top', () => {
      it('should return the max number from a numeric array when no parameter is informed', async () => {
        expect(
          await fluentAsync([1, 2, 3]).top(identity, (a, b) => a - b),
        ).to.be.eq(3);
      });
      it('should return the max number from a transformation when a parameter is informed', async () => {
        expect(
          await fluentAsync([1, 2, 3]).top(
            async (x) => 3 - x,
            (a, b) => a - b,
          ),
        ).to.be.eq(1);
      });
    });
    describe('max', () => {
      it('should return the max number from a numeric array when no parameter is informed', async () => {
        expect(await fluentAsync([1, 2, 3]).max()).to.be.eq(3);
      });
      it('should return the max number from a transformation when a parameter is informed', async () => {
        expect(await fluentAsync([1, 2, 3]).max(async (x) => 3 - x)).to.be.eq(
          1,
        );
      });
      it('should return the max value from an array of multiple non numeric elements', async () =>
        expect(await fluentAsync(['a', 'b', 'c', 'd', 'e']).max()).to.equal(
          'e',
        ));
      it('not assuring order', async () => {
        expect(await fluentAsync([1, 2, 3, 4, 3, 5]).max(identity)).to.be.eq(5);
      });
      it('assuring order', async () => {
        expect(await fluentAsync([1, 2, 3, 4, 3, 5]).max(o(identity))).to.be.eq(
          4,
        );
      });
      it('assuring descending order', async () => {
        expect(
          await fluentAsync([1, 2, 3, 4, 3, 5]).max(od(identity)),
        ).to.be.eq(1);
      });
    });
    describe('hasLessThan', () => {
      it('false', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasLessThan(3),
        ).to.false);
      it('true', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasLessThan(4),
        ).to.true);
    });
    describe('hasLessOrExactly', () => {
      it('false', async () =>
        expect(await fluentAsync([1, 2, 3]).hasLessOrExactly(2)).to.false);
      it('true', async () =>
        expect(await fluentAsync([1, 2, 3]).hasLessOrExactly(3)).to.true);
      it('true for less', async () =>
        expect(await fluentAsync([1, 2, 3]).hasLessOrExactly(4)).to.true);
    });
    describe('hasMoreThan', () => {
      it('false', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasMoreThan(3),
        ).to.false);
      it('true', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasMoreThan(2),
        ).to.true);
    });
    describe('hasMoreOrExactly', () => {
      it('false', async () =>
        expect(await fluentAsync([1, 2, 3]).hasMoreOrExactly(4)).to.false);
      it('true', async () =>
        expect(await fluentAsync([1, 2, 3]).hasMoreOrExactly(3)).to.true);
      it('true for more', async () =>
        expect(await fluentAsync([1, 2, 3]).hasMoreOrExactly(2)).to.true);
    });
    describe('hasExactly', () => {
      it('false', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasExactly(2),
        ).to.false);
      it('true', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasExactly(3),
        ).to.true);
    });
    describe('execute', () => {
      it('should run what is passed', async () => {
        const action = stub();

        const result = await fluentAsync([1, 2, 3]).execute(action).toArray();

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

        const result = await fluentAsync(it1).merge(it2).toArray();
        const sorted = result.concat().sort();

        expect(sorted).to.be.not.eql(result);
        expect(sorted).to.be.deep.equal([1, 2, 3, 'a', 'b', 'c']);
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

        expect(sorted).to.be.not.eql(result);
        expect(sorted).to.be.deep.equal([1, 2, 3, 'a', 'b', 'c']);
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
        const callback = stub();

        const result = await fluentAsync(it1)
          .mergeCatching(callback, it2)
          .toArray();

        expect(callback).to.have.been.calledOnceWithExactly(testError, 1);
        expect(result).to.be.deep.equal(['a', 1, 2, 3]);
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
        const callback = stub();

        const result = await fluentAsync(it1)
          .mergeEmitterCatching(callback, emitGenerator(it2))
          .toArray();

        expect(callback).to.have.been.calledOnceWithExactly(testError, 1);
        expect(result.sort()).to.be.deep.equal([1, 2, 3, 'a']);
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

      expect(resolved).to.be.eq(0);
      const result = await promise;
      expect(resolved).to.be.eq(10);
      expect(result).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  it('should be identifiable as fluent async', () => {
    const result: any = fluentAsync(fluentAsync([1, 2, 3]));

    expect(result.fluent).to.be.eq(fluentSymbolAsync);
  });
});
