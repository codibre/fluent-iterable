import fluent from '../src';
import expect, { flatMap, pick } from './tools';

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

export const picker = (...indexes: number[]) => pick(data, ...indexes);

function* generator(): Iterable<Person> {
  yield* data;
}

const additionalPerson: Person = { name: 'name', gender: Gender.NonBinary, emails: ['name@email.com'] };

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
      });
      context('withIndex', () => {
        it('should return Indexed instances from informed array', () => {
          expect(
            fluent(['a', 'b', 'c'])
              .withIndex()
              .toArray()
          ).to.be.eql([
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
              .takeWhile(p => p.emails.length > 0)
              .toArray()
          ).to.be.empty);
        it('works with eventually not true statement', () => {
          expect(
            fluent(subject)
              .takeWhile(p => p.gender === undefined)
              .toArray()
          ).to.eql(data.slice(0, 3));
        });
        it('works with always true statement', () => {
          expect(
            fluent(subject)
              .takeWhile(p => p.name.length > 0)
              .toArray()
          ).to.eql(data);
        });
      });
      context('takeWhileAsync', () => {
        it('works with initially not true statement', async () =>
          expect(
            await fluent(subject)
              .takeWhileAsync(async p => p.emails.length > 0)
              .toArray()
          ).to.be.empty);
        it('works with eventually not true statement', async () => {
          expect(
            await fluent(subject)
              .takeWhileAsync(async p => p.gender === undefined)
              .toArray()
          ).to.eql(data.slice(0, 3));
        });
        it('works with always true statement', async () => {
          expect(
            await fluent(subject)
              .takeWhileAsync(async p => p.name.length > 0)
              .toArray()
          ).to.eql(data);
        });
      });
      context('take', () => {
        it('works with negative count', () =>
          expect(
            fluent(subject)
              .take(-5)
              .toArray()
          ).to.be.empty);
        it('works with zero count', () =>
          expect(
            fluent(subject)
              .take(0)
              .toArray()
          ).to.be.empty);
        it('works with one count', () =>
          expect(
            fluent(subject)
              .take(1)
              .toArray()
          ).to.eql(data.slice(0, 1)));
        it('works with count < length', () =>
          expect(
            fluent(subject)
              .take(5)
              .toArray()
          ).to.eql(data.slice(0, 5)));
        it('works with count = length', () =>
          expect(
            fluent(subject)
              .take(data.length)
              .toArray()
          ).to.eql(data));
        it('works with count > length', () =>
          expect(
            fluent(subject)
              .take(data.length * 2)
              .toArray()
          ).to.eql(data));
      });
      context('skipWhile', () => {
        it('works with initially not true statement', () =>
          expect(
            fluent(subject)
              .skipWhile(p => p.emails.length > 0)
              .toArray()
          ).to.eql(data));
        it('works with eventually not true statement', () =>
          expect(
            fluent(subject)
              .skipWhile(p => p.gender === undefined)
              .toArray()
          ).to.eql(data.slice(3)));
        it('works with always true statement', () =>
          expect(
            fluent(subject)
              .skipWhile(p => p.name.length > 0)
              .toArray()
          ).to.be.empty);
        it('works with alternating true statement', () =>
          expect(
            fluent(subject)
              .skipWhile(p => p.emails.length === 0)
              .toArray()
          ).to.eql(data.slice(1)));
      });
      context('skipWhileAsync', () => {
        it('works with initially not true statement', async () =>
          expect(
            await fluent(subject)
              .skipWhileAsync(async p => p.emails.length > 0)
              .toArray()
          ).to.eql(data));
        it('works with eventually not true statement', async () =>
          expect(
            await fluent(subject)
              .skipWhileAsync(async p => p.gender === undefined)
              .toArray()
          ).to.eql(data.slice(3)));
        it('works with always true statement', async () =>
          expect(
            await fluent(subject)
              .skipWhileAsync(async p => p.name.length > 0)
              .toArray()
          ).to.be.empty);
        it('works with alternating true statement', async () =>
          expect(
            await fluent(subject)
              .skipWhileAsync(async p => p.emails.length === 0)
              .toArray()
          ).to.eql(data.slice(1)));
      });
      context('skip', () => {
        it('works with negative count', () =>
          expect(
            fluent(subject)
              .skip(-5)
              .toArray()
          ).to.eql(data));
        it('works with zero count', () =>
          expect(
            fluent(subject)
              .skip(0)
              .toArray()
          ).to.eql(data));
        it('works with one count', () =>
          expect(
            fluent(subject)
              .skip(1)
              .toArray()
          ).to.eql(data.slice(1)));
        it('works with count < length', () =>
          expect(
            fluent(subject)
              .skip(5)
              .toArray()
          ).to.eql(data.slice(5)));
        it('works with count = length', () =>
          expect(
            fluent(subject)
              .skip(data.length)
              .toArray()
          ).to.be.empty);
        it('works with count > length', () =>
          expect(
            fluent(subject)
              .skip(data.length * 2)
              .toArray()
          ).to.be.empty);
      });
      describe('map', () => {
        it('maps to undefined', () => {
          const res = fluent(subject)
            .map(() => undefined)
            .toArray();
          expect(res).to.length(data.length);
          res.forEach(item => expect(item).to.be.undefined);
        });
        it('maps to projection', () => {
          const res = fluent(subject)
            .map(p => p.name)
            .toArray();
          expect(res).to.length(data.length);
          let idx = 0;
          for (const item of res) {
            expect(item).to.equal(data[idx++].name);
          }
        });
      });
      describe('mapAsync', () => {
        it('maps to undefined', async () => {
          const res = await fluent(subject)
            .mapAsync(async () => undefined)
            .toArray();
          expect(res).to.length(data.length);
          res.forEach(item => expect(item).to.be.undefined);
        });
        it('maps to projection', async () => {
          const res = await fluent(subject)
            .mapAsync(async p => p.name)
            .toArray();
          expect(res).to.length(data.length);
          let idx = 0;
          for (const item of res) {
            expect(item).to.equal(data[idx++].name);
          }
        });
      });
      describe('filter', () => {
        it('with always false predicate', () =>
          expect(
            fluent(subject)
              .filter(() => false)
              .toArray()
          ).to.be.empty);
        it('with always true predicate', () =>
          expect(
            fluent(subject)
              .filter(() => true)
              .toArray()
          ).to.eql(data));
        it('with alternating predicate', () =>
          expect(
            fluent(subject)
              .filter(p => p.gender === Gender.Female)
              .toArray()
          ).to.eql(picker(4, 7, 10)));
      });
      describe('filterAsync', () => {
        it('with always false predicate', async () =>
          expect(
            await fluent(subject)
              .filterAsync(async () => false)
              .toArray()
          ).to.be.empty);
        it('with always true predicate', async () =>
          expect(
            await fluent(subject)
              .filterAsync(async () => true)
              .toArray()
          ).to.eql(data));
        it('with alternating predicate', async () =>
          expect(
            await fluent(subject)
              .filterAsync(async p => p.gender === Gender.Female)
              .toArray()
          ).to.eql(picker(4, 7, 10)));
      });
      describe('partition', () => {
        it('should divide result in blocks of the specified size', () => {
          expect(
            fluent([1, 2, 3, 4, 5, 6, 7, 8])
              .partition(3)
              .map(x => x.toArray())
              .toArray()
          ).to.be.eql([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8],
          ]);
        });
      });
      describe('append', () => {
        it('with empty iterable', () =>
          expect(
            fluent([] as Person[])
              .append(additionalPerson)
              .toArray()
          ).to.eql([additionalPerson]));
        it('with non-empty iterable', () =>
          expect(
            fluent(subject)
              .append(additionalPerson)
              .toArray()
          ).to.eql([...data, additionalPerson]));
      });
      describe('prepend', () => {
        it('with empty iterable', () =>
          expect(
            fluent([] as Person[])
              .prepend(additionalPerson)
              .toArray()
          ).to.eql([additionalPerson]));
        it('with non-empty iterable', () =>
          expect(
            fluent(subject)
              .prepend(additionalPerson)
              .toArray()
          ).to.eql([additionalPerson, ...data]));
      });
      describe('concat', () => {
        it('one empty array', () =>
          expect(
            fluent(subject)
              .concat([])
              .toArray()
          ).to.eql(data));
        it('two empty arrays', () =>
          expect(
            fluent(subject)
              .concat([], [])
              .toArray()
          ).to.eql(data));
        it('one non-empty arrays', () =>
          expect(
            fluent(subject)
              .concat([additionalPerson])
              .toArray()
          ).to.eql([...data, additionalPerson]));
        it('two non-empty arrays', () =>
          expect(
            fluent(subject)
              .concat([additionalPerson], data)
              .toArray()
          ).to.eql([...data, additionalPerson, ...data]));
        it('one empty and one non-empty arrays', () =>
          expect(
            fluent(subject)
              .concat([], [additionalPerson])
              .toArray()
          ).to.eql([...data, additionalPerson]));
      });
      describe('repeat', () => {
        it('negative number of times', () =>
          expect(
            fluent(subject)
              .repeat(-5)
              .toArray()
          ).to.be.empty);
        it('zero times', () =>
          expect(
            fluent(subject)
              .repeat(0)
              .toArray()
          ).to.be.empty);
        it('once', () =>
          expect(
            fluent(subject)
              .repeat(1)
              .toArray()
          ).to.eql(data));
        it('twice', () =>
          expect(
            fluent(subject)
              .repeat(2)
              .toArray()
          ).to.eql([...data, ...data]));
        it('three times', () =>
          expect(
            fluent(subject)
              .repeat(3)
              .toArray()
          ).to.eql([...data, ...data, ...data]));
      });
      describe('flatten', () => {
        it('empty array', () =>
          expect(
            fluent([])
              .flatten()
              .toArray()
          ).to.be.empty);
        it('already flat fails', () =>
          expect(() =>
            fluent(subject)
              .flatten()
              .toArray()
          ).to.throw());
        it('not flat', () =>
          expect(
            fluent([[1, 2], [3, 4, 5], [], [6]])
              .flatten()
              .toArray()
          ).to.eql([1, 2, 3, 4, 5, 6]));
        it('with mapper', () =>
          expect(
            fluent(subject)
              .flatten(p => p.emails)
              .toArray()
          ).to.eql(flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), p => p.emails)));
      });
      describe('flattenAsync', () => {
        it('empty array', async () =>
          expect(
            await fluent([])
              .flattenAsync(x => x)
              .toArray()
          ).to.be.empty);
        it('not flat', async () =>
          expect(
            await fluent([[1, 2], [3, 4, 5], [], [6]])
              .flattenAsync(async x => x)
              .toArray()
          ).to.eql([1, 2, 3, 4, 5, 6]));
      });
      describe('sort', () => {
        it('empty', () =>
          expect(
            fluent([])
              .sort()
              .toArray()
          ).to.be.empty);
        it('flat numbers', () =>
          expect(
            fluent([6, 4, 5, 3, 2, 1])
              .sort()
              .toArray()
          ).to.eql([1, 2, 3, 4, 5, 6]));
        it('flat numbers with reversed comparison', () =>
          expect(
            fluent([6, 4, 5, 3, 2, 1])
              .sort((a, b) => b - a)
              .toArray()
          ).to.eql([6, 5, 4, 3, 2, 1]));
      });
      describe('distinct', () => {
        it('empty', () =>
          expect(
            fluent([])
              .distinct()
              .toArray()
          ).to.be.empty);
        it('not distinct numbers', () =>
          expect(
            fluent([1, 1, 1, 2, 2, 3])
              .distinct()
              .toArray()
          ).to.eql([1, 2, 3]));
        it('already distinct collection', () =>
          expect(
            fluent(subject)
              .distinct()
              .toArray()
          ).to.eql(data));
        it('with mapper', () =>
          expect(
            fluent(subject)
              .distinct(p => p.gender)
              .toArray()
          ).to.eql(picker(0, 3, 4, 5)));
      });
      describe('distinctAsync', () => {
        it('empty', async () =>
          expect(
            await fluent([])
              .distinctAsync(async x => x)
              .toArray()
          ).to.be.empty);
        it('not distinct numbers', async () =>
          expect(
            await fluent([1, 1, 1, 2, 2, 3])
              .distinctAsync(async x => x)
              .toArray()
          ).to.eql([1, 2, 3]));
        it('already distinct collection', async () =>
          expect(
            await fluent(subject)
              .distinctAsync(async x => x)
              .toArray()
          ).to.eql(data));
      });
      describe('group', () => {
        it('empty', () =>
          expect(
            fluent([] as Person[])
              .group(p => p.gender)
              .toArray()
          ).to.be.empty);
        it('non-empty', () => {
          const groups = fluent(subject)
            .group(p => p.gender)
            .toArray();
          expect(groups.length).to.eql(4);
          expect(groups.map(grp => grp.key)).to.have.members([undefined, Gender.Male, Gender.Female, Gender.NonBinary]);
          for (const grp of groups) {
            expect(grp.values.toArray()).to.eql(data.filter(p => p.gender === grp.key));
          }
        });
      });
      describe('groupAsync', () => {
        it('empty', async () =>
          expect(
            await fluent([] as Person[])
              .groupAsync(async p => p.gender)
              .toArray()
          ).to.be.empty);
        it('non-empty', async () => {
          const groups = await fluent(subject)
            .groupAsync(async p => p.gender)
            .toArray();
          expect(groups.length).to.eql(4);
          expect(groups.map(grp => grp.key)).to.have.members([undefined, Gender.Male, Gender.Female, Gender.NonBinary]);
          for (const grp of groups) {
            expect(grp.values.toArray()).to.eql(data.filter(p => p.gender === grp.key));
          }
        });
      });
      describe('count', () => {
        it('empty', () => expect(fluent([]).count()).to.equal(0));
        it('one element', () => expect(fluent([0]).count()).to.equal(1));
        it('multiple elements', () => expect(fluent(subject).count()).to.equal(data.length));
        it('multiple elements with predicate', () =>
          expect(fluent(subject).count(x => x.emails.length > 0)).to.equal(8));
      });
      describe('countAsync', () => {
        it('empty', async () => expect(await fluent([]).countAsync(async () => true)).to.equal(0));
        it('one element', async () => expect(await fluent([0]).countAsync(async x => x === 0)).to.equal(1));
        it('multiple elements', async () =>
          expect(await fluent(subject).countAsync(async x => x.emails.length > 0)).to.equal(8));
      });
      describe('first', () => {
        it('empty', () => expect(fluent([]).first()).to.be.undefined);
        it('not empty', () => expect(fluent([3, 1]).first()).to.be.equal(3));
        it('with predicate', () => expect(fluent([3, 1, 2, 6]).first(x => x % 2 === 0)).to.be.equal(2));
      });
      describe('firstAsync', () => {
        it('empty', async () => expect(await fluent([]).firstAsync(async x => x)).to.be.undefined);
        it('not empty', async () =>
          expect(await fluent([3, 1, 2, 6]).firstAsync(async x => x % 2 === 0)).to.be.equal(2));
      });
      describe('last', () => {
        it('empty', () => expect(fluent([]).last()).to.be.undefined);
        it('not empty', () => expect(fluent([3, 1]).last()).to.be.equal(1));
        it('with predicate', () => expect(fluent([3, 1, 2, 6]).last(x => x % 2 === 0)).to.be.equal(6));
      });

      describe('lastAsync', () => {
        it('empty', async () => expect(await fluent([]).lastAsync(async x => x)).to.be.undefined);
        it('not empty', async () =>
          expect(await fluent([3, 1, 2, 6, 7]).lastAsync(async x => x % 2 === 0)).to.be.equal(6));
      });
      describe('reduceAndMap', () => {
        it('empty', async () =>
          expect(
            fluent([]).reduceAndMap(
              (a, b) => (a += b),
              0,
              a => a * 10 + 1
            )
          ).to.be.equal(1));
        it('not empty', async () =>
          expect(
            fluent([1, 2, 3]).reduceAndMap(
              (a, b) => (a += b),
              0,
              a => a * 10 + 1
            )
          ).to.be.equals(61));
      });
      describe('reduceAndMapAsync', () => {
        it('empty', async () =>
          expect(
            await fluent([]).reduceAndMapAsync(
              async (a, b) => (a += b),
              0,
              async a => a * 10 + 1
            )
          ).to.be.equal(1));
        it('not empty', async () =>
          expect(
            await fluent([1, 2, 3]).reduceAndMapAsync(
              async (a, b) => (a += b),
              0,
              async a => a * 10 + 1
            )
          ).to.be.equals(61));
      });
      describe('reduce', () => {
        it('empty', async () => expect(fluent([]).reduce((a, b) => (a += b), 0)).to.be.equal(0));
        it('not empty', async () => expect(fluent([1, 2, 3]).reduce((a, b) => (a += b), 0)).to.be.equals(6));
      });
      describe('reduceAsync', () => {
        it('empty', async () => expect(await fluent([]).reduceAsync(async (a, b) => (a += b), 0)).to.be.equal(0));
        it('not empty', async () =>
          expect(await fluent([1, 2, 3]).reduceAsync(async (a, b) => (a += b), 0)).to.be.equals(6));
      });
      describe('all', () => {
        it('empty', async () => expect(fluent([]).all((a: number) => a % 2 === 0)).to.be.false);
        it('false', async () => expect(fluent([1, 2, 3]).all((a: number) => a % 2 === 0)).to.be.false);
        it('true', async () => expect(fluent([2, 4, 6]).all((a: number) => a % 2 === 0)).to.be.true);
      });
      describe('allAsync', () => {
        it('empty', async () => expect(await fluent([]).allAsync(async (a: number) => a % 2 === 0)).to.be.false);
        it('false', async () => expect(await fluent([1, 2, 3]).allAsync(async (a: number) => a % 2 === 0)).to.be.false);
        it('true', async () => expect(await fluent([2, 4, 6]).allAsync(async (a: number) => a % 2 === 0)).to.be.true);
      });
      describe('any', () => {
        it('empty', async () => expect(fluent([]).any((a: number) => a % 2 === 0)).to.be.false);
        it('false', async () => expect(fluent([1, 3, 5]).any((a: number) => a % 2 === 0)).to.be.false);
        it('true', async () => expect(fluent([1, 2, 3]).any((a: number) => a % 2 === 0)).to.be.true);
      });
      describe('allAsync', () => {
        it('empty', async () => expect(await fluent([]).anyAsync(async (a: number) => a % 2 === 0)).to.be.false);
        it('false', async () => expect(await fluent([1, 3, 5]).anyAsync(async (a: number) => a % 2 === 0)).to.be.false);
        it('true', async () => expect(await fluent([1, 2, 3]).anyAsync(async (a: number) => a % 2 === 0)).to.be.true);
      });
      describe('contains', () => {
        it('empty', async () => expect(fluent([] as number[]).contains(4)).to.be.false);
        it('false', async () => expect(fluent([1, 3, 5]).contains(4)).to.be.false);
        it('true', async () => expect(fluent([1, 2, 4]).contains(4)).to.be.true);
      });
      describe('toObject', () => {
        it('empty', async () =>
          expect(
            await fluent([] as Iterable<Person>).toObject(
              x => x.gender as string,
              x => x.name
            )
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
            ]).toObject(
              x => x.gender as string,
              x => x.name
            )
          ).to.be.deep.equal({
            [Gender.Female]: 'name A',
            [Gender.NonBinary]: 'name B',
            [Gender.Male]: 'name C',
          }));
      });
      describe('toObjectAsync', () => {
        it('empty', async () =>
          expect(
            await fluent([] as Iterable<Person>).toObjectAsync(
              async x => x.gender as string,
              async x => x.name
            )
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
              async x => x.gender as string,
              async x => x.name
            )
          ).to.be.deep.equal({
            [Gender.Female]: 'name A',
            [Gender.NonBinary]: 'name B',
            [Gender.Male]: 'name C',
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
      describe('hasMoreThan', () => {
        it('false', () => expect(fluent([1, 2, 3]).hasMoreThan(3)).to.false);
        it('true', () => expect(fluent([1, 2, 3]).hasMoreThan(2)).to.true);
      });
    });

    describe('asynchronous', () => {
      context('basics work', () => {
        it('can convert to fluent', async () =>
          expect(
            await fluent(subject)
              .toAsync()
              .toArray()
          ).to.eql(data));
      });
    });
  };
  describe(
    'on array',
    suite(() => data)
  );
  describe('on generator', suite(generator));
});
