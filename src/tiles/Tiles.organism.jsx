/* eslint-disable class-methods-use-this */
import React from 'react';

import './tiles.scss';

import { setIntArray, getRandomInt } from '../utils/utils';

class Tiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridDimension: getRandomInt(2, 10),
    };
    this.boxClicked = this.boxClicked.bind(this);
  }

  boxClicked(e) {
    console.log('e clicked id', e.target.id);
    console.log('e clicked id', e.target.className);
  }

  boxes(rowNb, intBoxArray, diffColorTile) {
    const boxesInRow = Math.sqrt(intBoxArray.length);
    const start = boxesInRow * (rowNb - 1);
    const end = boxesInRow * rowNb;
    const rowChunk = intBoxArray.slice(start, end);

    return rowChunk.map(item => (
      <div
        className={`box ${diffColorTile === item ? 'diff-color-tile' : ''}`}
        key={`${rowNb}-${item}`}
        id={`${rowNb}-${item}`}
        onClick={this.boxClicked}
        onKeyPress={this.boxClicked}
        role="button"
        tabIndex="0"
      />
    ));
  }

  row(rowNb, intBoxArray, diffColorTile) {
    return (
      <div className="row" key={`row-${rowNb}`}>
        {this.boxes(rowNb, intBoxArray, diffColorTile)}
      </div>
    );
  }

  rows(intRowArray, intBoxArray, diffColorTile) {
    return intRowArray.map(rowNb => this.row(rowNb, intBoxArray, diffColorTile));
  }

  render() {
    const { gridDimension } = this.state;
    const intBoxArray = setIntArray(gridDimension * gridDimension, 1);
    const intRowArray = setIntArray(gridDimension, 1);
    const diffColorTile = getRandomInt(1, gridDimension * gridDimension);

    return (
      <div className="grid">
        { this.rows(intRowArray, intBoxArray, diffColorTile) }
      </div>
    );
  }
}

export default Tiles;
