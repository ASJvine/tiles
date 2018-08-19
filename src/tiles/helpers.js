/* eslint-disable import/prefer-default-export */
import {
  getIntArray, getRandomInt,
} from '../utils/utils';

import {
  DIFF_COLOR_TILE_CLASSNAME,
} from './constants';

const MIN_HSL_VALUE = 0; // SL = HueSaturationLightness (expressed in %)
const MAX_SL_VALUE = 100; // expressed in %
const MAX_HUE_VALUE = 360; // Int

export const tileClassname = (diffColorTileId, tileId) => `${diffColorTileId === tileId ? DIFF_COLOR_TILE_CLASSNAME : ''}`;

export const tileKey = (rowId, itemId) => `${rowId}-${itemId}`;

export const isDiffColorTile = (string) => {
  const reg = new RegExp(DIFF_COLOR_TILE_CLASSNAME);

  return reg.test(string);
};

export const getTilesRandomColor = () => {
  const hue = getRandomInt(MIN_HSL_VALUE, MAX_HUE_VALUE);
  const saturation = getRandomInt(MIN_HSL_VALUE, MAX_SL_VALUE); // eslint-disable-line
  const lightness = getRandomInt(MIN_HSL_VALUE, MAX_SL_VALUE); // eslint-disable-line

  const baseColor = {
    backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
  };
  const diffColor = {
    backgroundColor: `hsl(${hue}, ${saturation / 2}%, ${lightness}%)`,
  };

  return {
    hue,
    saturation,
    lightness,
    baseColor,
    diffColor,
  };
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
    colors: getTilesRandomColor(),
  };

  return props;
};
