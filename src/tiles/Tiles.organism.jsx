/* eslint-disable class-methods-use-this */
/* global alert */
import React from 'react';

import Counter from '../app/common/Counter.atom';
import Tile from './Tile.molecule';

import {
  getRowChunkOfSqArray,
} from '../utils/utils';
import {
  tileClassname, tileKey, tilesProps, isDiffColorTile,
} from './helpers';
import {
  INITIAL_GRID_DIMENSION, INITIAL_COUNTER,
} from './constants';

import './tiles.scss';

class Tiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridDimension: INITIAL_GRID_DIMENSION,
      counterNb: INITIAL_COUNTER,
    };
    this.tileClicked = this.tileClicked.bind(this);
  }

  tileClicked(e) {
    const { className: tileClass } = e.target;
    const { counterNb, gridDimension } = this.state;

    if (isDiffColorTile(tileClass)) {
      this.setState({
        counterNb: counterNb + 1,
        gridDimension: gridDimension + 1,
      });
      alert('You\'ve got it! Level up +1 point');
    } else {
      this.setState({
        counterNb: 0,
        gridDimension: 2,
      });
      alert('Game Over... Try again!');
    }
  }

  singleTilesRow(rowNb, intTileArray, diffColorTile) {
    const rowChunk = getRowChunkOfSqArray(intTileArray, rowNb);

    return rowChunk.map((item) => {
      const tileProps = {
        className: tileClassname(diffColorTile, item),
        tileKey: tileKey(rowNb, item),
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
    const { gridDimension, counterNb } = this.state;
    const calculateTilesProps = tilesProps(gridDimension);

    return (
      <div>
        <div className="grid">
          {this.tiles({ ...calculateTilesProps })}
        </div>
        <Counter className="tiles-counter" counterNb={counterNb} />
      </div>
    );
  }
}

export default Tiles;
