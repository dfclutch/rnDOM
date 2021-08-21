const { color } = require('../generators/colors');

describe('Color Generators', () => {
  it('should default to a hex string', () => {
    const result = color();
    const prefix = result[0];
    const value = result.substring(1);
    const parsedValue = parseInt(value, 16);
    expect(prefix).toEqual('#');
    expect(parsedValue).toBeGreaterThanOrEqual(0);
    expect(parsedValue).toBeLessThanOrEqual(0xFFFFFF);
  });
  it('should generate a hex string when scheme is "hex"', () => {
    const result = color('hex');
    const prefix = result[0];
    const value = result.substring(1);
    const parsedValue = parseInt(value, 16);
    expect(prefix).toEqual('#');
    expect(parsedValue).toBeGreaterThanOrEqual(0);
    expect(parsedValue).toBeLessThanOrEqual(0xFFFFFF);
  });
  it('should generate an RGB string when scheme is "rgb"', () => {
    const result = color('rgb');
    const prefix = result.substring(0, 4);
    const postfix = result[result.length - 1];
    expect(prefix).toEqual('rgb(');
    expect(postfix).toEqual(')');
    result
      .substring(5, result.length - 1)
      .split(',')
      .map((value) => parseInt(value, 10))
      .forEach((value) => {
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(255);
      });
  });
  it('should generate a named css color string when scheme is "named"', () => {
    const result = color('named');

    expect((/([a-zA-Z])\w+/).test(result)).toBeTruthy();
  });
});
