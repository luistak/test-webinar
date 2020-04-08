const { sum, minus } = require('../math');

/**
 * This function is like an assertion library
 * It takes a value and compare to the expected result
 */
const expect = (result) => ({
  toBe: (expected) => {
    if (result !== expected) {
      throw new Error(`${result} should be: ${expected}`);
    }
  }
});

let result, expected;

result = sum(10, 5);
expected = 15;

expect(result).toBe(expected)

result = minus(10, 5);
expected = 5;

expect(result).toBe(expected)
