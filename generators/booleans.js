const { between } = require('./numbers');

const coinflip = () => between(0, 1) > 0.5;

const weightedCoinflip = (p) => between(0, 1) < p;

module.exports = { coinflip, weightedCoinflip };
