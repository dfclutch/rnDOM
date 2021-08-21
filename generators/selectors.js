const { intBetween } = require('./numbers');

const oneOf = (a) => {
  if (!Array.isArray(a)) {
    throw new Error('rndom: Argument must be an array');
  }

  return a[intBetween(0, a.length)];
};

const nOf = (n, a) => {
  if (!Array.isArray(a)) {
    throw new Error('rndom: Argument must be an array');
  }

  if (n > a.length) {
    throw new Error(`Cannot select ${n} elements from an array of length ${a.length}`);
  }

  const indices = [];
  const selectedValues = [];
  while (indices.length < n) {
    const candidateIndex = intBetween(0, a.length);
    if (!indices.includes(candidateIndex)) {
      indices.push(candidateIndex);
      selectedValues.push(a[candidateIndex]);
    }
  }

  return selectedValues;
};

module.exports = { oneOf, nOf };
