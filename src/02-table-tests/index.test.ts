import { Action, simpleCalculator } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 4, b: 2, action: Action.Subtract, expected: 2 },
  { a: 2, b: 5, action: Action.Subtract, expected: -3 },
  { a: 2, b: 2, action: Action.Divide, expected: 1 },
  { a: 4, b: 2, action: Action.Divide, expected: 2 },
  { a: 4, b: 1, action: Action.Divide, expected: 4 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 4, b: 2, action: Action.Multiply, expected: 8 },
  { a: 1, b: 0, action: Action.Multiply, expected: 0 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 4, b: 2, action: Action.Exponentiate, expected: 16 },
  { a: 1, b: 0, action: Action.Exponentiate, expected: 1 },
];

describe('simpleCalculator', () => {
  test.each(testCases)('', ({ a, b, action, expected }) => {
    expect(simpleCalculator({ a, b, action })).toBe(expected);
  });
});
