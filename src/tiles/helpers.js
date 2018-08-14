/* eslint-disable import/prefer-default-export */
import {
  getIntArray,
  getRandomInt,
} from '../utils/utils';

export const tilesProps = (gridDimension) => {
  const intTileArray = getIntArray(gridDimension * gridDimension, 1);
  const intRowArray = getIntArray(gridDimension, 1);
  // +1 to the second argument to include the last element of the array
  const diffColorTile = getRandomInt(1, (gridDimension * gridDimension) + 1);
  const props = {
    intTileArray,
    intRowArray,
    diffColorTile,
  };

  return props;
};
