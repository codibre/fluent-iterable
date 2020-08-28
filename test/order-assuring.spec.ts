import { expect } from 'chai';
import { fluent } from '../src';
import { descendingOrderAssured, orderAssured } from '../src/types-internal';

describe('order assuring', () => {
  context('iterable', () => {
    it('should be possible to assure an ascending order for an iterable', () => {
      const it = fluent([1, 2, 3]).assureOrder();

      expect(it[orderAssured]).to.exist;
    });
    it('should be possible to assure an ascending order for an iterable through alias o', () => {
      const it = fluent([1, 2, 3]).o();

      expect(it[orderAssured]).to.exist;
    });
    it('should be possible to assure an descending order for an iterable', () => {
      const it = fluent([1, 2, 3]).assureOrderDescending();

      expect(it[descendingOrderAssured]).to.exist;
    });
    it('should be possible to assure an descending order for an iterable through alias od', () => {
      const it = fluent([1, 2, 3]).od();

      expect(it[descendingOrderAssured]).to.exist;
    });
    it('should keep an assured ascending order through filter and takeWhile operations, but not through a mapper', () => {
      const it = fluent([1, 2, 3])
        .o()
        .filter((x) => x > 1);
      const tw = it.takeWhile((x) => x < 3);
      const mp = tw.map((x) => x * 2);

      expect(it[orderAssured]).to.exist;
      expect(tw[orderAssured]).to.exist;
      expect(mp[orderAssured]).to.not.exist;
    });
    it('should keep an assured descending order through filter and takeWhile operations, but not through a mapper', () => {
      const it = fluent([1, 2, 3])
        .od()
        .filter((x) => x > 1);
      const tw = it.takeWhile((x) => x < 3);
      const mp = tw.map((x) => x * 2);

      expect(it[descendingOrderAssured]).to.exist;
      expect(tw[descendingOrderAssured]).to.exist;
      expect(mp[descendingOrderAssured]).to.not.exist;
    });
  });
});
