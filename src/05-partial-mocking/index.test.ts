import { mockOne, mockThree, mockTwo, unmockedFunction } from './index';

describe('partial mocking', () => {
  test('mockOne, mockTwo, mockThree should not log into console', () => {
    const mockOneSpy = jest.spyOn(console, 'log').mockImplementation();
    const mockTwoSpy = jest.spyOn(console, 'log').mockImplementation();
    const mockThreeSpy = jest.spyOn(console, 'log').mockImplementation();

    mockOne();
    mockTwo();
    mockThree();

    expect(mockOneSpy).toHaveBeenCalledWith('foo');
    expect(mockTwoSpy).toHaveBeenCalledWith('bar');
    expect(mockThreeSpy).toHaveBeenCalledWith('baz');

    mockOneSpy.mockRestore();
    mockTwoSpy.mockRestore();
    mockThreeSpy.mockRestore();
  });

  test('unmockedFunction should log into console', () => {
    jest.spyOn(console, 'log').mockImplementation((): null => null);
    unmockedFunction();
    
    expect(console.log).toHaveBeenCalledWith('I am not mocked');
  });
});
