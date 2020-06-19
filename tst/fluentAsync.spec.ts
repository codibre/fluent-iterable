import { fluentAsync } from '../src';
import expect, { flatMap, pick } from './tools';
import { ObjectReadableMock } from 'stream-mock';

enum Gender {
  Male = 'Male',
  Female = 'Female',
  NonBinary = 'NonBinary',
}

interface Person {
  name: string;
  gender?: Gender;
  emails: string[];
}

const data: Person[] = [
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

const picker = (...indexes: number[]) => pick(data, ...indexes);

async function* generator(): AsyncIterable<Person> {
  yield* data;
}

const additionalPerson: Person = { name: 'name', gender: Gender.NonBinary, emails: ['name@email.com'] };

describe('fluent async iterable', () => {
  const suite = (createSubject: () => AsyncIterable<Person>) => () => {
    let subject: AsyncIterable<Person>;

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
    });
    context('takeWhile', async () => {
      it('works with initially not true statement', async () =>
        expect(
          await fluentAsync(subject)
            .takeWhile(p => p.emails.length > 0)
            .toArray()
        ).to.be.empty);
      it('works with eventually not true statement', async () => {
        expect(
          await fluentAsync(subject)
            .takeWhile(p => p.gender === undefined)
            .toArray()
        ).to.eql(data.slice(0, 3));
      });
      it('works with always true statement', async () => {
        expect(
          await fluentAsync(subject)
            .takeWhile(p => p.name.length > 0)
            .toArray()
        ).to.eql(data);
      });
    });
    context('take', async () => {
      it('works with negative count', async () =>
        expect(
          await fluentAsync(subject)
            .take(-5)
            .toArray()
        ).to.be.empty);
      it('works with zero count', async () =>
        expect(
          await fluentAsync(subject)
            .take(0)
            .toArray()
        ).to.be.empty);
      it('works with one count', async () =>
        expect(
          await fluentAsync(subject)
            .take(1)
            .toArray()
        ).to.eql(data.slice(0, 1)));
      it('works with count < length', async () =>
        expect(
          await fluentAsync(subject)
            .take(5)
            .toArray()
        ).to.eql(data.slice(0, 5)));
      it('works with count = length', async () =>
        expect(
          await fluentAsync(subject)
            .take(data.length)
            .toArray()
        ).to.eql(data));
      it('works with count > length', async () =>
        expect(
          await fluentAsync(subject)
            .take(data.length * 2)
            .toArray()
        ).to.eql(data));
    });
    context('skipWhile', async () => {
      it('works with initially not true statement', async () =>
        expect(
          await fluentAsync(subject)
            .skipWhile(p => p.emails.length > 0)
            .toArray()
        ).to.eql(data));
      it('works with eventually not true statement', async () =>
        expect(
          await fluentAsync(subject)
            .skipWhile(p => p.gender === undefined)
            .toArray()
        ).to.eql(data.slice(3)));
      it('works with always true statement', async () =>
        expect(
          await fluentAsync(subject)
            .skipWhile(p => p.name.length > 0)
            .toArray()
        ).to.be.empty);
      it('works with alternating true statement', async () =>
        expect(
          await fluentAsync(subject)
            .skipWhile(p => p.emails.length === 0)
            .toArray()
        ).to.eql(data.slice(1)));
    });
    context('skip', async () => {
      it('works with negative count', async () =>
        expect(
          await fluentAsync(subject)
            .skip(-5)
            .toArray()
        ).to.eql(data));
      it('works with zero count', async () =>
        expect(
          await fluentAsync(subject)
            .skip(0)
            .toArray()
        ).to.eql(data));
      it('works with one count', async () =>
        expect(
          await fluentAsync(subject)
            .skip(1)
            .toArray()
        ).to.eql(data.slice(1)));
      it('works with count < length', async () =>
        expect(
          await fluentAsync(subject)
            .skip(5)
            .toArray()
        ).to.eql(data.slice(5)));
      it('works with count = length', async () =>
        expect(
          await fluentAsync(subject)
            .skip(data.length)
            .toArray()
        ).to.be.empty);
      it('works with count > length', async () =>
        expect(
          await fluentAsync(subject)
            .skip(data.length * 2)
            .toArray()
        ).to.be.empty);
    });
    describe('map', () => {
      it('maps to undefined', async () => {
        const res = await fluentAsync(subject)
          .map(() => undefined)
          .toArray();
        expect(res).to.length(data.length);
        res.forEach(item => expect(item).to.be.undefined);
      });
      it('maps to projection', async () => {
        const res = await fluentAsync(subject)
          .map(p => p.name)
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
            .toArray()
        ).to.be.empty);
      it('with always true predicate', async () =>
        expect(
          await fluentAsync(subject)
            .filter(() => true)
            .toArray()
        ).to.eql(data));
      it('with alternating predicate', async () =>
        expect(
          await fluentAsync(subject)
            .filter(p => p.gender === Gender.Female)
            .toArray()
        ).to.eql(picker(4, 7, 10)));
    });
    describe('append', () => {
      it('with empty iterable', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([] as Person[]))
            .append(additionalPerson)
            .toArray()
        ).to.eql([additionalPerson]));
      it('with non-empty iterable', async () =>
        expect(
          await fluentAsync(subject)
            .append(additionalPerson)
            .toArray()
        ).to.eql([...data, additionalPerson]));
    });
    describe('prepend', () => {
      it('with empty iterable', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([] as Person[]))
            .prepend(additionalPerson)
            .toArray()
        ).to.eql([additionalPerson]));
      it('with non-empty iterable', async () =>
        expect(
          await fluentAsync(subject)
            .prepend(additionalPerson)
            .toArray()
        ).to.eql([additionalPerson, ...data]));
    });
    describe('concat', () => {
      it('one empty array', async () =>
        expect(
          await fluentAsync(subject)
            .concat(new ObjectReadableMock([]))
            .toArray()
        ).to.eql(data));
      it('two empty arrays', async () =>
        expect(
          await fluentAsync(subject)
            .concat(new ObjectReadableMock([]), new ObjectReadableMock([]))
            .toArray()
        ).to.eql(data));
      it('one non-empty arrays', async () =>
        expect(
          await fluentAsync(subject)
            .concat(new ObjectReadableMock([additionalPerson]))
            .toArray()
        ).to.eql([...data, additionalPerson]));
      it('two non-empty arrays', async () =>
        expect(
          await fluentAsync(subject)
            .concat(new ObjectReadableMock([additionalPerson]), subject)
            .toArray()
        ).to.eql([...data, additionalPerson]));
      it('one empty and one non-empty arrays', async () =>
        expect(
          await fluentAsync(subject)
            .concat(new ObjectReadableMock([]), new ObjectReadableMock([additionalPerson]))
            .toArray()
        ).to.eql([...data, additionalPerson]));
    });
    describe('repeat', () => {
      it('negative number of times', async () =>
        expect(
          await fluentAsync(subject)
            .repeat(-5)
            .toArray()
        ).to.be.empty);
      it('zero times', async () =>
        expect(
          await fluentAsync(subject)
            .repeat(0)
            .toArray()
        ).to.be.empty);
      it('once', async () =>
        expect(
          await fluentAsync(subject)
            .repeat(1)
            .toArray()
        ).to.eql(data));
      it('twice', async () =>
        expect(
          await fluentAsync(subject)
            .repeat(2)
            .toArray()
        ).to.eql([...data, ...data]));
      it('three times', async () =>
        expect(
          await fluentAsync(subject)
            .repeat(3)
            .toArray()
        ).to.eql([...data, ...data, ...data]));
    });
    describe('flatten', () => {
      it('empty array', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([]))
            .flatten()
            .toArray()
        ).to.be.empty);
      it('already flat fails', async () => {
        let error: unknown;

        try {
          await fluentAsync(subject)
            .flatten()
            .toArray();
        } catch (err) {
          error = err;
        }

        expect(error).to.exist;
      });
      it('not flat', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([[1, 2], [3, 4, 5], [], [6]]))
            .flatten()
            .toArray()
        ).to.eql([1, 2, 3, 4, 5, 6]));
      it('with mapper', async () =>
        expect(
          await fluentAsync(subject)
            .flatten(p => p.emails)
            .toArray()
        ).to.eql(flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), p => p.emails)));
    });
    describe('sort', () => {
      it('empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([]))
            .sort()
            .toArray()
        ).to.be.empty);
      it('flat numbers', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([6, 4, 5, 3, 2, 1]))
            .sort()
            .toArray()
        ).to.eql([1, 2, 3, 4, 5, 6]));
      it('flat numbers with reversed comparison', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([6, 4, 5, 3, 2, 1]))
            .sort((a, b) => b - a)
            .toArray()
        ).to.eql([6, 5, 4, 3, 2, 1]));
    });
    describe('distinct', () => {
      it('empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([]))
            .distinct()
            .toArray()
        ).to.be.empty);
      it('not distinct numbers', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 1, 1, 2, 2, 3]))
            .distinct()
            .toArray()
        ).to.eql([1, 2, 3]));
      it('already distinct collection', async () =>
        expect(
          await fluentAsync(subject)
            .distinct()
            .toArray()
        ).to.eql(data));
      it('with mapper', async () =>
        expect(
          await fluentAsync(subject)
            .distinct(p => p.gender)
            .toArray()
        ).to.eql(picker(0, 3, 4, 5)));
    });
    describe('group', () => {
      it('empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([] as Person[]))
            .group(p => p.gender)
            .toArray()
        ).to.be.empty);
      it('non-empty', async () => {
        const groups = await fluentAsync(subject)
          .group(p => p.gender)
          .toArray();
        expect(groups.length).to.eql(4);
        expect(groups.map(grp => grp.key)).to.have.members([undefined, Gender.Male, Gender.Female, Gender.NonBinary]);
        for await (const grp of groups) {
          expect(grp.values.toArray()).to.eql(data.filter(p => p.gender === grp.key));
        }
      });
    });
    describe('count', () => {
      it('empty', async () => expect(await fluentAsync(new ObjectReadableMock([])).count()).to.equal(0));
      it('one element', async () => expect(await fluentAsync(new ObjectReadableMock([0])).count()).to.equal(1));
      it('multiple elements', async () => expect(await fluentAsync(subject).count()).to.equal(data.length));
    });
    describe('hasLessThan', () => {
      it('false', async () => expect(await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasLessThan(3)).to.false);
      it('true', async () => expect(await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasLessThan(4)).to.true);
    });
    describe('hasMoreThan', () => {
      it('false', async () => expect(await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasMoreThan(3)).to.false);
      it('true', async () => expect(await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasMoreThan(2)).to.true);
    });
    describe('hasExactly', () => {
      it('false', async () => expect(await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasExactly(2)).to.false);
      it('true', async () => expect(await fluentAsync(new ObjectReadableMock([1, 2, 3])).hasExactly(3)).to.true);
    });
  };
  describe('on generator', suite(generator));
});
