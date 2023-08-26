const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('checks the output based on type', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 0), 1);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, -4.5), 5);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, -4.5), -0.25);
  });
});
