/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

import Counter from '../app/common/Counter.atom';
import Modal from '../app/common/modals/Modal.organism';
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

class Tiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridDimension: INITIAL_GRID_DIMENSION,
      counterNb: INITIAL_COUNTER,
      isModalOpen: false,
    };
    this.tileClicked = this.tileClicked.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.modalTimer);
  }

  onClose() {
    clearInterval(this.modalTimer);
    this.setState(() => ({ isModalOpen: false }));
  }

  autoClosingModal(modalProps) {
    this.modalTimer = setInterval(
      () => this.onClose(),
      700,
    );
    return (<Modal {...modalProps} />);
  }

  tileClicked(e) {
    const { className: tileClass } = e.target;

    if (isDiffColorTile(tileClass)) {
      this.setState(prevState => ({
        counterNb: prevState.counterNb + 1,
        gridDimension: prevState.gridDimension + 1,
        isModalOpen: true,
      }));
    } else {
      this.setState(() => ({
        counterNb: 0,
        gridDimension: 2,
        isModalOpen: true,
      }));
    }
  }

  singleTilesRow(rowNb, intTileArray, diffColorTile, colors) {
    const rowChunk = getRowChunkOfSqArray(intTileArray, rowNb);

    return rowChunk.map((item) => {
      const tileProps = {
        className: tileClassname(diffColorTile, item),
        tileKey: tileKey(rowNb, item),
        onClick: this.tileClicked,
        color: !diffColorTile ? colors.baseColor : colors.diffColor,
      };

      return <Tile key={tileProps.tileKey} {...tileProps} />;
    });
  }

  allTilesRows(rowNb, intTileArray, diffColorTile, colors) {
    return (
      <div className="row" key={`row-${rowNb}`}>
        {this.singleTilesRow(rowNb, intTileArray, diffColorTile, colors)}
      </div>
    );
  }

  tiles({
    intRowArray, intTileArray, diffColorTile, colors,
  }) {
    return intRowArray.map(rowNb => this.allTilesRows(rowNb, intTileArray, diffColorTile, colors));
  }

  render() {
    const {
      gridDimension, counterNb, isModalOpen,
    } = this.state;
    const calculateTilesProps = tilesProps(gridDimension);

    const modalProps = {
      children: counterNb !== 0
        ? <Counter className="tiles-counter" text={`Counter ${counterNb}`}/> // eslint-disable-line
        : <p>{`GameOver. Total Counter: ${counterNb}`}</p>, // eslint-disable-line
      triggerText: 'what',
      onClose: this.onClose,
      autoClose: counterNb > 0,
    };

    return (
      <div>
        <div className="grid">
          {this.tiles({ ...calculateTilesProps })}
        </div>
        { isModalOpen && this.autoClosingModal(modalProps) }
      </div>
    );
  }
}

export default Tiles;
