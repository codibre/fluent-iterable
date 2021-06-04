import { AnyIterable } from 'augmentative-iterable';
import { expect } from 'chai';
import { ObjectReadableMock } from 'stream-mock';
import { fluent, fluentAsync } from '../src';
import { asyncGenerator } from './fluent-async.spec';
import { data, generator, Person, picker } from './fluent.spec';

describe('distinct', () => {
  describe('iterable', () => {
    const suite = (createSubject: () => Iterable<Person>) => () => {
      let subject: Iterable<Person>;

      beforeEach(() => (subject = createSubject()));
      describe('sync', () => {
        it('empty', () => expect(fluent([]).distinct().toArray()).to.be.empty);
        it('not distinct numbers', () =>
          expect(fluent([1, 1, 1, 2, 2, 3]).distinct().toArray()).to.eql([
            1,
            2,
            3,
          ]));
        it('already distinct collection', () =>
          expect(fluent(subject).distinct().toArray()).to.eql(data));
        it('with mapper', () =>
          expect(
            fluent(subject)
              .distinct((p) => p.gender)
              .toArray(),
          ).to.eql(picker(0, 3, 4, 5)));
        it('should work with key string', () =>
          expect(fluent(subject).distinct('gender').toArray()).to.eql(
            picker(0, 3, 4, 5),
          ));
        it('should keep only the chosen values when choose is used', () => {
          expect(
            fluent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
              .distinct(
                (x) => x % 3,
                (a, b) => (a > b ? a : b),
              )
              .toArray(),
          ).to.be.eql([10, 8, 9]);
        });
        it('should keep only the chosen values when choose is used, with order assured', () => {
          expect(
            fluent([1, 4, 10, 7, 2, 5, 8, 11, 13, 1, 19])
              .o()
              .distinct(
                (x) => x % 3,
                (a, b) => (a > b ? a : b),
              )
              .toArray(),
          ).to.be.eql([10, 11, 19]);
        });
      });
      describe('async', () => {
        it('empty', async () =>
          expect(
            await fluent([])
              .distinctAsync(async (x) => x)
              .toArray(),
          ).to.be.empty);
        it('not distinct numbers', async () =>
          expect(
            await fluent([1, 1, 1, 2, 2, 3])
              .distinctAsync(async (x) => x)
              .toArray(),
          ).to.eql([1, 2, 3]));
        it('already distinct collection', async () =>
          expect(
            await fluent(subject)
              .distinctAsync(async (x) => x)
              .toArray(),
          ).to.eql(data));
        it('should work with key string', async () =>
          expect(
            await fluent(subject).distinctAsync('gender').toArray(),
          ).to.eql(picker(0, 3, 4, 5)));
        it('should keep only the chosen values when choose is used', async () => {
          expect(
            await fluent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
              .distinctAsync(
                (x) => x % 3,
                (a, b) => (a > b ? a : b),
              )
              .toArray(),
          ).to.be.eql([10, 8, 9]);
        });
        it('should keep only the chosen values when choose is used, with order assured', async () => {
          expect(
            await fluent([1, 4, 10, 7, 2, 5, 8, 11, 13, 1, 19])
              .o()
              .distinctAsync(
                (x) => x % 3,
                (a, b) => (a > b ? a : b),
              )
              .toArray(),
          ).to.be.eql([10, 11, 19]);
        });
      });
    };
    describe(
      'on array',
      suite(() => data),
    );
    describe('on generator', suite(generator));
  });

  describe('asyncIterable', () => {
    const suite = (createSubject: () => AnyIterable<Person>) => () => {
      let subject: AnyIterable<Person>;

      beforeEach(() => (subject = createSubject()));

      it('empty', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([])).distinct().toArray(),
        ).to.be.empty);
      it('not distinct numbers', async () =>
        expect(
          await fluentAsync(new ObjectReadableMock([1, 1, 1, 2, 2, 3]))
            .distinct()
            .toArray(),
        ).to.eql([1, 2, 3]));
      it('already distinct collection', async () =>
        expect(await fluentAsync(subject).distinct().toArray()).to.eql(data));
      it('with mapper', async () =>
        expect(
          await fluentAsync(subject)
            .distinct((p) => p.gender)
            .toArray(),
        ).to.eql(picker(0, 3, 4, 5)));
      it('should keep only the chosen values when choose is used', async () => {
        expect(
          await fluentAsync([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            .distinct(
              (x) => x % 3,
              (a, b) => (a > b ? a : b),
            )
            .toArray(),
        ).to.be.eql([10, 8, 9]);
      });
      it('should keep only the chosen values when choose is used, with order assured', async () => {
        expect(
          await fluentAsync([1, 4, 10, 7, 2, 5, 8, 11, 13, 1, 19])
            .o()
            .distinct(
              (x) => x % 3,
              (a, b) => (a > b ? a : b),
            )
            .toArray(),
        ).to.be.eql([10, 11, 19]);
      });
    };

    describe(
      'on array',
      suite(() => data),
    );
    describe('on generator', suite(asyncGenerator));
  });
});
