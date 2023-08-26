const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('checks the output', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(1.4, 3.7), 5);
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
    assert.strictEqual(calculateNumber(1.4, 0), 1);
    assert.strictEqual(calculateNumber(1.4, -4.5), -3);
    assert.strictEqual(calculateNumber(1.4, -4.5), -3);
  });
});
