import {
  mountIterableFunctions,
  mountSpecial,
  iterableFuncs,
  iterableAsyncFuncs,
  resolvingFuncs,
  special,
  getHandler,
} from '../src/mounters';
import fluent from '../src/fluent';
import fluentAsync from '../src/fluent-async';
import { interval } from '../src';
import { expect } from 'chai';

function explicitWay() {
  return Object.assign({
    ...mountIterableFunctions(iterableFuncs, fluent),
    ...mountIterableFunctions(iterableAsyncFuncs, fluentAsync),
    ...resolvingFuncs,
    ...mountSpecial(special, fluent, fluentAsync),
  });
}

const proxyReference = explicitWay();
const handler = getHandler(proxyReference);

function proxyWay() {
  return new Proxy({} as any, handler);
}

describe('proxy benchmark', () => {
  function suite(total: number) {
    it('proxy way should be faster than explicit way', () => {
      const startExplicit = process.hrtime();
      fluent(interval(1, total)).forEach((x) => {
        explicitWay();
      });
      const endExplicit = process.hrtime(startExplicit);
      const totalExplicit = endExplicit[0] + endExplicit[1] / 1e9;

      const startProxy = process.hrtime();
      fluent(interval(1, total)).forEach((x) => {
        proxyWay();
      });
      const endProxy = process.hrtime(startProxy);
      const totalProxy = endProxy[0] + endProxy[1] / 1e9;

      console.log(`Total time explicit: ${totalExplicit}`);
      console.log(`Total time proxy...: ${totalProxy}`);
      console.log(`Proportion.........: ${totalProxy / totalExplicit}`);
      expect(totalExplicit > totalProxy).to.be.true;
    });
  }

  describe('In 1 iteration', () => suite(1));
  describe('In 10 iteration', () => suite(10));
  describe('In 100 iteration', () => suite(100));
  describe('In 1000 iteration', () => suite(1000));
  describe('In 10000 iteration', () => suite(10000));
});
