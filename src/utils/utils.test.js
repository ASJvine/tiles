import {
  getIntArray, getRandomInt, getRowsSqArray, getRowChunkOfSqArray,
} from './utils';

describe('getIntArray function', () => {
  test('just passing first argument (dimension = 2)', () => {
    expect(getIntArray(2)).toEqual([0, 1]);
  });
  test('just passing first argument (dimension = 0) - returns an empty array', () => {
    expect(getIntArray(0)).toEqual([]);
  });
  test('just passing first argument (dimension)', () => {
    expect(getIntArray(2, 1)).toEqual([1, 2]);
  });
});

describe('getRandomInt function', () => {
  test('range [0-2]', () => {
    expect(getRandomInt(0, 2)).toBeGreaterThanOrEqual(0);
    expect(getRandomInt(0, 2)).toBeLessThanOrEqual(1);
    expect(String(getRandomInt(0, 2))).toMatch(/[0-1]/);
  });
  test('range [0-10]', () => {
    expect(getRandomInt(5, 10)).toBeGreaterThanOrEqual(5);
    expect(getRandomInt(5, 10)).toBeLessThanOrEqual(9);
    expect(String(getRandomInt(5, 10))).toMatch(/[5-9]/);
  });
});

describe('getRowsSqArray function', () => {
  test('array 2x2', () => {
    const array = [1, 2, 3, 4];
    expect(getRowsSqArray(array)).toEqual(2);
  });
  test('array 3x3', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(getRowsSqArray(array)).toEqual(3);
  });
});

describe('getRowChunkOfSqArray function', () => {
  test('array 2x2', () => {
    const array = [1, 2, 3, 4];
    expect(getRowChunkOfSqArray(array, 1)).toEqual([1, 2]);
  });
  test('array 2x2', () => {
    const array = [1, 2, 3, 4];
    expect(getRowChunkOfSqArray(array, 2)).toEqual([3, 4]);
  });
});
