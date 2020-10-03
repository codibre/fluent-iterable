import { expect } from 'chai';
import { fluent } from '../src';

describe('.sum()', () => {
  it('should work with empty', () =>
    expect(fluent([] as number[]).sum()).to.be.eq(0));
  it('should work with no params', () =>
    expect(fluent([1, 2, 3]).sum()).to.be.eq(6));
  it('should work with params', () =>
    expect(fluent([1, 2, 3]).sum((x) => 2 * 3)).to.be.eq(18));
  it('should work with iterable params', () =>
    expect(fluent([1, 2, 3].values()).sum((x) => 2 * 3)).to.be.eq(18));
  it('should work with string property name', () =>
    expect(fluent([{ a: 1 }, { a: 2 }, { a: 3 }]).sum('a')).to.be.eq(6));
});
