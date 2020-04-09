const { sum, subtract } = require('../math')

let result, expected

test('should sum numbers', () => {
  result = sum(10, 5)
  expected = 15

  expect(result).toBe(expected)
})

test('should subtract numbers', () => {
  result = subtract(10, 5)
  expected = 5

  expect(result).toBe(expected)
})
