const { sum, subtract } = require("../math");

/**
 * An automated test in JavaScript is code that throws an error when things are unexpected. Let's do that. Let's get our result from the sum of three and seven.
 */
let result, expected;

result = sum(10, 5);
expected = 15;

/**
 * Most fundamental kind of test
 */
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(10, 5);
expected = 5;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
