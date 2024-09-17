import { fluent } from '../../src';
import { orderAssured } from '../../src/types-internal';

describe('order assuring', () => {
  describe('iterable', () => {
    it('should be possible to assure an ascending order for an iterable', () => {
      const it: any = fluent([1, 2, 3]).assureOrder();

      expect(it[orderAssured]).toBe(1);
    });
    it('should be possible to assure an ascending order for an iterable through alias o', () => {
      const it: any = fluent([1, 2, 3]).o();

      expect(it[orderAssured]).toBe(1);
    });
    it('should be possible to assure an descending order for an iterable', () => {
      const it: any = fluent([1, 2, 3]).assureOrderDescending();

      expect(it[orderAssured]).toBe(-1);
    });
    it('should be possible to assure an descending order for an iterable through alias od', () => {
      const it: any = fluent([1, 2, 3]).od();

      expect(it[orderAssured]).toBe(-1);
    });
    it('should keep an assured ascending order through filter and takeWhile operations, but not through a mapper', () => {
      const it: any = fluent([1, 2, 3])
        .o()
        .filter((x) => x > 1);

      expect(it[orderAssured]).toBeDefined();
      const tw = it.takeWhile((x: any) => x < 3);

      expect(tw[orderAssured]).toBeDefined();
      const mp: any = tw.map((x: any) => x * 2);

      expect(mp[orderAssured]).not.toBeDefined();
    });
    it('should keep an assured descending order through filter and takeWhile operations, but not through a mapper', () => {
      const it: any = fluent([1, 2, 3])
        .od()
        .filter((x) => x > 1);
      expect(it[orderAssured]).toBe(-1);
      const tw = it.takeWhile((x: any) => x < 3);
      expect(tw[orderAssured]).toBe(-1);
      const mp = tw.map((x: any) => x * 2);
      expect(mp[orderAssured]).not.toBeDefined();
    });
  });
});
