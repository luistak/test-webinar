const { sum, subtract } = require("../math");

const expect = (result) => ({
  toBe: (expected) => {
    if (result !== expected) {
      throw new Error(`${result} should be: ${expected}`);
    }
  },
});

function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

let result, expected;

test("should sum numbers", () => {
  result = sum(10, 5);
  expected = 15;

  expect(result).toBe(expected);
});

test("should subtract numbers", () => {
  result = subtract(10, 5);
  expected = 5;

  expect(result).toBe(expected);
});
