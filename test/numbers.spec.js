const { between, intBetween } = require('../generators/numbers');

describe('Number Generators', () => {
  describe('between', () => {
    let min;
    let max;
    let actual;

    it('should produce a value between min and max', () => {
      min = 0;
      max = 100;

      actual = between(min, max);
      expect(actual).toBeGreaterThanOrEqual(min);
      expect(actual).toBeLessThan(max);
    });

    it('should work with negative ranges', () => {
      min = -100;
      max = 0;

      actual = between(min, max);
      expect(actual).toBeGreaterThanOrEqual(min);
      expect(actual).toBeLessThan(max);
    });

    it('should work with negative/positive ranges', () => {
      min = -10;
      max = 10;

      actual = between(min, max);
      expect(actual).toBeGreaterThanOrEqual(min);
      expect(actual).toBeLessThan(max);
    });

    it('should throw an error on overflowing range size', () => {
      min = -Number.MAX_VALUE;
      max = Number.MAX_VALUE;

      expect(() => between(min, max)).toThrow();
    });

    it('should throw an error when min > max', () => {
      min = 10;
      max = 0;

      expect(() => between(min, max)).toThrow();
    });
  });

  describe('intBetween', () => {
    let min; let max; let
      actual;

    it('should produce an integer value between min and max', () => {
      min = 0;
      max = Number.MAX_VALUE;

      actual = intBetween(min, max);
      expect(actual).toBeGreaterThanOrEqual(min);
      expect(actual).toBeLessThan(max);
      expect(Number.isInteger(actual));
    });

    it('should work with negative ranges', () => {
      min = -Number.MAX_VALUE;
      max = 0;

      actual = intBetween(min, max);
      expect(actual).toBeGreaterThanOrEqual(min);
      expect(actual).toBeLessThan(max);
      expect(Number.isInteger(actual));
    });

    it('should work with negative/positive ranges', () => {
      min = -Number.MAX_VALUE;
      max = 0;

      actual = intBetween(min, max);
      expect(actual).toBeGreaterThanOrEqual(min);
      expect(actual).toBeLessThan(max);
      expect(Number.isInteger(actual));
    });

    it('should throw an error on overflowing range size', () => {
      min = -Number.MAX_VALUE;
      max = Number.MAX_VALUE;

      expect(() => intBetween(min, max)).toThrow();
    });

    it('should throw an error when min > max', () => {
      min = 10;
      max = 0;

      expect(() => intBetween(min, max)).toThrow();
    });
  });
});
