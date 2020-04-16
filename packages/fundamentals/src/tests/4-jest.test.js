const { sum, subtract } = require('../math');

test('should sum numbers', () => {
  const result = sum(10, 5);
  const expected = 15;

  expect(result).toBe(expected);
});

test('should subtract numbers', () => {
  const result = subtract(10, 5);
  const expected = 5;

  expect(result).toBe(expected);
});
