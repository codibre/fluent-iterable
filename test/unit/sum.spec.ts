import { fluent, fluentAsync } from '../../src';

describe('.sum()', () => {
  describe('sync', () => {
    it('should work with empty', () => {
      expect(fluent([] as number[]).sum()).toBe(0);
    });
    it('should work with no params', () => {
      expect(fluent([1, 2, 3]).sum()).toBe(6);
    });
    it('should work with params', () => {
      expect(fluent([1, 2, 3]).sum((x) => x * 3)).toBe(18);
    });
    it('should work with iterable params', () => {
      expect(fluent([1, 2, 3].values()).sum((x) => x * 3)).toBe(18);
    });
    it('should work with string property name', () => {
      expect(fluent([{ a: 1 }, { a: 2 }, { a: 3 }]).sum('a')).toBe(6);
    });
    it('should sum numeric strings', () => {
      expect(fluent(['1', '2', '3']).sum()).toBe(6);
    });
  });
  describe('fluent async', () => {
    it('should work with empty', async () =>
      expect(await fluent([] as number[]).sumAsync()).toBe(0));
    it('should work with no params', async () =>
      expect(await fluent([1, 2, 3]).sumAsync()).toBe(6));
    it('should work with params', async () =>
      expect(await fluent([1, 2, 3]).sumAsync(async (x) => x * 3)).toBe(18));
    it('should work with iterable params', async () =>
      expect(
        await fluent([1, 2, 3].values()).sumAsync(async (x) => x * 3),
      ).toBe(18));
    it('should work with string property name', async () =>
      expect(await fluent([{ a: 1 }, { a: 2 }, { a: 3 }]).sumAsync('a')).toBe(
        6,
      ));
    it('should sum numeric strings', async () =>
      expect(await fluent(['1', '2', '3']).sumAsync()).toBe(6));
  });
  describe('fluentAsync', () => {
    it('should work with empty', async () =>
      expect(await fluentAsync([] as number[]).sum()).toBe(0));
    it('should work with no params', async () =>
      expect(await fluentAsync([1, 2, 3]).sum()).toBe(6));
    it('should work with params', async () =>
      expect(await fluentAsync([1, 2, 3]).sum(async (x) => x * 3)).toBe(18));
    it('should work with iterable params', async () =>
      expect(
        await fluentAsync([1, 2, 3].values()).sum(async (x) => x * 3),
      ).toBe(18));
    it('should work with string property name', async () =>
      expect(await fluentAsync([{ a: 1 }, { a: 2 }, { a: 3 }]).sum('a')).toBe(
        6,
      ));
    it('should sum numeric strings', async () =>
      expect(await fluentAsync(['1', '2', '3']).sum()).toBe(6));
  });
});
