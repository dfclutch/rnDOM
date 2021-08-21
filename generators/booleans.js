const { between } = require('./numbers');

const coinflip = () => between(0, 1) > 0.5;

const weightedCoinflip = (p) => {
  if (typeof p !== 'number') {
    throw new Error('rndom: Probability must be a number');
  }

  if (p > 1) throw new Error('rndom: Probability must be in range [0-1]');

  return between(0, 1) < p;
};

module.exports = { coinflip, weightedCoinflip };
