import {
  MyAwesomeError,
  resolveValue,
  throwCustomError,
  throwError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const data = await resolveValue('a');
    expect(data).toBe('a');
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => throwError('err')).toThrowError('err');
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrowError('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrowError(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // const data = await rejectCustomError();
    // expect(data).toThrowError(MyAwesomeError);
  });
});
