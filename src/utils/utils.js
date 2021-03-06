/* globals localStorage */
export const getIntArray = (dimension, startFrom = 0) => (
  Array.from(Array(dimension).keys()).map(item => item + startFrom)
);

export const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
};

export const getRowsSqArray = arr => Math.sqrt(arr.length);

export const getRowChunkOfSqArray = (arr, rowNb) => {
  const itemsInRow = getRowsSqArray(arr);
  const start = itemsInRow * (rowNb - 1);
  const end = itemsInRow * rowNb;

  return arr.slice(start, end);
};

export const setItemToLocalStorage = (key, value) => (
  localStorage.setItem(key, JSON.stringify(value))
);

export const getItemParsedFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);

  return value && JSON.parse(value);
};
