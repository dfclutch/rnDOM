const { intBetween } = require('./numbers');

const oneOf = (a) => a[intBetween(0, a.length)];

const nOf = (n, a) => {
  const indices = [];
  const output = [];
  while (indices.length < n) {
    const candidate = intBetween(0, a.length);
    if (!indices.includes(candidate)) {
      indices.push(candidate);
      output.push(a[candidate]);
    }
  }

  return output;
};

module.exports = { oneOf, nOf };
