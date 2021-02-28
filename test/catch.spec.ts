import { expect } from 'chai';
import { stub } from 'sinon';
import { fluent, fluentAsync } from '../src';
import 'chai-callslike';

describe('catch', () => {
  describe('sync', () => {
    it('should get all items until an error is thrown', () => {
      const myError = new Error('my error');
      function* getIterable() {
        yield 1;
        yield 2;
        throw myError;
        yield 3;
      }
      const callback = stub();

      const result = fluent(getIterable()).catch(callback).toArray();

      expect(callback).to.have.callsLike([myError]);
      expect(result).to.be.eql([1, 2]);
    });

    it('should get all items until an error is thrown using async variant', async () => {
      const myError = new Error('my error');
      function* getIterable() {
        yield 1;
        yield 2;
        throw myError;
        yield 3;
      }
      const callback = stub();

      const result = await fluent(getIterable()).catchAsync(callback).toArray();

      expect(callback).to.have.callsLike([myError]);
      expect(result).to.be.eql([1, 2]);
    });
  });
  describe('async', () => {
    it('should get all items until an error is thrown', async () => {
      const myError = new Error('my error');
      async function* getIterable() {
        yield 1;
        yield 2;
        throw myError;
        yield 3;
      }
      const callback = stub();

      const result = await fluentAsync(getIterable()).catch(callback).toArray();

      expect(callback).to.have.callsLike([myError]);
      expect(result).to.be.eql([1, 2]);
    });
  });
});
