import { expect } from 'chai';
import { fluent } from '../src';
import { orderAssured } from '../src/types-internal';

describe('order assuring', () => {
  describe('iterable', () => {
    it('should be possible to assure an ascending order for an iterable', () => {
      const it = fluent([1, 2, 3]).assureOrder();

      expect(it[orderAssured]).to.eq(1);
    });
    it('should be possible to assure an ascending order for an iterable through alias o', () => {
      const it = fluent([1, 2, 3]).o();

      expect(it[orderAssured]).to.eq(1);
    });
    it('should be possible to assure an descending order for an iterable', () => {
      const it = fluent([1, 2, 3]).assureOrderDescending();

      expect(it[orderAssured]).to.be.eq(-1);
    });
    it('should be possible to assure an descending order for an iterable through alias od', () => {
      const it = fluent([1, 2, 3]).od();

      expect(it[orderAssured]).to.be.eq(-1);
    });
    it('should keep an assured ascending order through filter and takeWhile operations, but not through a mapper', () => {
      const it = fluent([1, 2, 3])
        .o()
        .filter((x) => x > 1);

      expect(it[orderAssured]).to.exist;
      const tw = it.takeWhile((x) => x < 3);

      expect(tw[orderAssured]).to.exist;
      const mp = tw.map((x) => x * 2);

      expect(mp[orderAssured]).to.not.exist;
    });
    it('should keep an assured descending order through filter and takeWhile operations, but not through a mapper', () => {
      const it = fluent([1, 2, 3])
        .od()
        .filter((x) => x > 1);
      expect(it[orderAssured]).to.be.eq(-1);
      const tw = it.takeWhile((x) => x < 3);
      expect(tw[orderAssured]).to.be.eq(-1);
      const mp = tw.map((x) => x * 2);
      expect(mp[orderAssured]).to.not.exist;
    });
  });
});
