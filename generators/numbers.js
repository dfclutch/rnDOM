/**
 * Generates a random float between min and max
 *
 * @param {number} min The inclusive lower bound of random range
 * @param {number} max The non-inclusive upper bound of random range
 * @returns {number}
 */
const between = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('rndom: Interval values must be of type Number');
  }

  const multiplier = Math.random();
  const range = max - min;

  if (range === Infinity) {
    throw new Error('rndom: Range exceeds maximum Number');
  }

  if (min > max) {
    throw new Error('rndom: Min is larger than max');
  }

  return multiplier * range + min;
};

/**
 * Generates an random integer between min and max
 *
 * @param {number} min The inclusive lower bound of random range
 * @param {number} max The non-inclusive upper bound of random range
 * @returns {number}
 */
const intBetween = (min, max) => Math.floor(between(min, max));

module.exports = { between, intBetween };
