/**
 * Generates a random float between min and max
 *
 * @param {number} min The inclusive lower bound of random range
 * @param {number} max The non-inclusive upper bound of random range
 * @returns {number}
 */
const between = (min, max) => {
  const multiplier = Math.random();
  const range = max - min;

  if (range === Infinity) {
    throw new Error('Range exceeds maximum Number.');
  }

  if (min > max) {
    throw new Error('Min is larger than max');
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
