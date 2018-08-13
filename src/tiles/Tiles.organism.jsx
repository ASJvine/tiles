/* eslint-disable class-methods-use-this */
import React from 'react';

import './tiles.scss';

import Tile from './Tile.molecule';

import {
  getIntArray, getRandomInt, getRowChunkOfSqArray,
} from '../utils/utils';

const tilesProps = (gridDimension) => {
  const intTileArray = getIntArray(gridDimension * gridDimension, 1);
  const intRowArray = getIntArray(gridDimension, 1);
  const diffColorTile = getRandomInt(1, gridDimension * gridDimension);
  const props = {
    intTileArray,
    intRowArray,
    diffColorTile,
  };

  return props;
};

class Tiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridDimension: getRandomInt(2, 10),
    };
    this.tileClicked = this.tileClicked.bind(this);
  }

  tileClicked(e) {
    console.log('e clicked id', e.target.id);
    console.log('e clicked id', e.target.className);
  }

  singleTilesRow(rowNb, intTileArray, diffColorTile) {
    const rowChunk = getRowChunkOfSqArray(intTileArray, rowNb);

    return rowChunk.map((item) => {
      const tileProps = {
        className: `${diffColorTile === item ? 'diff-color-tile' : ''}`,
        tileKey: `${rowNb}-${item}`,
        onClick: this.tileClicked,
      };

      return <Tile key={tileProps.tileKey} {...tileProps} />;
    });
  }

  allTilesRows(rowNb, intTileArray, diffColorTile) {
    return (
      <div className="row" key={`row-${rowNb}`}>
        {this.singleTilesRow(rowNb, intTileArray, diffColorTile)}
      </div>
    );
  }

  tiles({ intRowArray, intTileArray, diffColorTile }) {
    return intRowArray.map(rowNb => this.allTilesRows(rowNb, intTileArray, diffColorTile));
  }

  render() {
    const { gridDimension } = this.state;
    const calculateTilesProps = tilesProps(gridDimension);
    return (
      <div className="grid">
        { this.tiles({ ...calculateTilesProps }) }
      </div>
    );
  }
}

export default Tiles;
