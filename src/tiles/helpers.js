/* eslint-disable import/prefer-default-export */
import {
  getIntArray, getRandomInt,
} from '../utils/utils';

import {
  DIFF_COLOR_TILE_CLASSNAME,
} from './constants';

export const tileClassname = (diffColorTileId, tileId) => `${diffColorTileId === tileId ? DIFF_COLOR_TILE_CLASSNAME : ''}`;

export const tileKey = (rowId, itemId) => `${rowId}-${itemId}`;

export const isDiffColorTile = (string) => {
  const reg = new RegExp(DIFF_COLOR_TILE_CLASSNAME);

  return reg.test(string);
};

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
