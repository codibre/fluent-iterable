import { expect } from 'chai';
import { fluent, fluentAsync } from '../src';

describe('.sum()', () => {
  context('sync', () => {
    it('should work with empty', () =>
    expect(fluent([] as number[]).sum()).to.be.eq(0));
  it('should work with no params', () =>
    expect(fluent([1, 2, 3]).sum()).to.be.eq(6));
  it('should work with params', () =>
    expect(fluent([1, 2, 3]).sum((x) => x * 3)).to.be.eq(18));
  it('should work with iterable params', () =>
    expect(fluent([1, 2, 3].values()).sum((x) => x * 3)).to.be.eq(18));
  it('should work with string property name', () =>
    expect(fluent([{ a: 1 }, { a: 2 }, { a: 3 }]).sum('a')).to.be.eq(6));
  });
  context('fluent async', () => {
    it('should work with empty', async () =>
    expect(await fluent([] as number[]).sumAsync()).to.be.eq(0));
  it('should work with no params', async () =>
    expect(await fluent([1, 2, 3]).sumAsync()).to.be.eq(6));
  it('should work with params', async () =>
    expect(await fluent([1, 2, 3]).sumAsync(async (x) => x * 3)).to.be.eq(18));
  it('should work with iterable params', async () =>
    expect(await fluent([1, 2, 3].values()).sumAsync(async (x) => x * 3)).to.be.eq(18));
  it('should work with string property name', async () =>
    expect(await fluent([{ a: 1 }, { a: 2 }, { a: 3 }]).sumAsync('a')).to.be.eq(6));
  });
  context('fluentAsync', () => {
    it('should work with empty', async () =>
    expect(await fluentAsync([] as number[]).sum()).to.be.eq(0));
  it('should work with no params', async () =>
    expect(await fluentAsync([1, 2, 3]).sum()).to.be.eq(6));
  it('should work with params', async () =>
    expect(await fluentAsync([1, 2, 3]).sum(async (x) => x * 3)).to.be.eq(18));
  it('should work with iterable params', async () =>
    expect(await fluentAsync([1, 2, 3].values()).sum(async (x) => x * 3)).to.be.eq(18));
  it('should work with string property name', async () =>
    expect(await fluentAsync([{ a: 1 }, { a: 2 }, { a: 3 }]).sum('a')).to.be.eq(6));
  });
});
