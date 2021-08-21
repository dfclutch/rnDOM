const { between, intBetween } = require('./generators/numbers');
const { color } = require('./generators/colors');
const { coinflip, weightedCoinflip } = require('./generators/booleans');
const { oneOf, nOf } = require('./generators/selectors');

const rndom = Object.create(null);

// numbers
rndom.between = between;
rndom.intBetween = intBetween;

// colors
rndom.color = color;

// booleans
rndom.coinflip = coinflip;
rndom.weightedCoinflip = weightedCoinflip;

// selectors
rndom.oneOf = oneOf;
rndom.nOf = nOf;

Object.freeze(rndom);
module.exports = rndom;
