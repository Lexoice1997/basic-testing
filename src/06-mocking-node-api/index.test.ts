import { doStuffByInterval, doStuffByTimeout } from '.';

const callback = (): null => null;
let interval: number;
const timeout = (interval = 1000);

describe('doStuffByTimeout', () => {
  let spyTimeout: jest.SpyInstance;

  beforeAll(() => jest.useFakeTimers());
  beforeEach(() => (spyTimeout = jest.spyOn(global, 'setTimeout')));
  afterEach(() => jest.clearAllMocks());
  afterAll(() => jest.useRealTimers());

  test('should set timeout with provided callback and timeout', () => {
    doStuffByTimeout(callback, timeout);
    expect(spyTimeout).toBeCalledWith(callback, timeout);
  });

  test('should call callback only after timeout', () => {
    const mockCallback: jest.Mock = jest.fn(callback);

    doStuffByTimeout(mockCallback, timeout);
    expect(mockCallback).not.toBeCalled();

    jest.advanceTimersByTime(timeout);
    expect(mockCallback).toBeCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  let spyInterval: jest.SpyInstance;

  beforeAll(() => jest.useFakeTimers());
  beforeEach(() => (spyInterval = jest.spyOn(global, 'setInterval')));
  afterEach(() => jest.clearAllMocks());
  afterAll(() => jest.useRealTimers());

  test('should set interval with provided callback and timeout', () => {
    doStuffByInterval(callback, interval);
    expect(spyInterval).toBeCalledWith(callback, interval);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const mockCallback: jest.Mock = jest.fn(callback);

    doStuffByInterval(mockCallback, timeout);
    expect(mockCallback).not.toBeCalled();

    jest.advanceTimersByTime(timeout);
    expect(mockCallback).toBeCalledTimes(1);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
