/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

import Counter from '../app/common/Counter.atom';
import Modal from '../app/common/modals/Modal.organism';
import Tile from './Tile.molecule';
import ScoreForm from '../scoreForm/ScoreForm.organism';

import {
  getRowChunkOfSqArray,
} from '../utils/utils';
import {
  tileClassname, tileKey, tilesProps, isDiffColorTile,
} from './helpers';
import {
  INITIAL_GRID_DIMENSION, INITIAL_COUNTER, MAX_TILES_GAME_LEVEL,
} from './constants';

import './tiles.scss';

class Tiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridDimension: INITIAL_GRID_DIMENSION,
      counter: INITIAL_COUNTER,
      isCounterModalOpen: false,
      isScoreModalOpen: false,
      score: 0,
    };

    this.tileClicked = this.tileClicked.bind(this);
    this.onCloseCounterModal = this.onCloseCounterModal.bind(this);
    this.onCloseScoreModal = this.onCloseScoreModal.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.modalTimer);
  }

  onCloseCounterModal() {
    clearInterval(this.modalTimer);
    this.setState(() => ({ isCounterModalOpen: false }));
  }

  onCloseScoreModal() {
    this.setState(() => ({ isScoreModalOpen: false }));
  }

  counterModal(counter) {
    const modalProps = {
      children: counter !== 0
        ? <Counter className="tiles-counter" text={`Counter ${counter}`} /> // eslint-disable-line
        // NEVER reaches this case!!!
        : <p>{`Game Over. Total Counter: ${counter}`}</p>, // eslint-disable-line
      onClose: this.onCloseCounterModal,
      autoClose: counter > 0,
      justChildren: counter > 0,
    };

    this.modalTimer = setInterval(
      () => this.onCloseCounterModal(),
      700,
    );
    return (<Modal {...modalProps} />);
  }

  scoreFormModal(counter) {
    const modalProps = {
      children: <ScoreForm score={counter} />,
      onClose: this.onCloseScoreModal,
    };
    return <Modal {...modalProps} />;
  }

  tileClicked(e) {
    const { className: tileClass } = e.target;
    const { counter } = this.state;

    if (isDiffColorTile(tileClass)) {
      if (counter === MAX_TILES_GAME_LEVEL) {
        alert('Congrats you\'ve finished the game'); // eslint-disable-line
        return;
      }
      this.setState(prevState => ({
        counter: prevState.counter + 1,
        gridDimension: prevState.gridDimension + 1,
        isCounterModalOpen: true,
      }));
    } else {
      this.setState(prevState => ({
        counter: 0,
        gridDimension: 2,
        isScoreModalOpen: counter !== 0,
        score: prevState.counter,
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
      gridDimension, counter, isCounterModalOpen, isScoreModalOpen, score,
    } = this.state;
    const calculateTilesProps = tilesProps(gridDimension);

    return (
      <div>
        <div className="grid">
          {this.tiles({ ...calculateTilesProps })}
        </div>
        { isCounterModalOpen && this.counterModal(counter) }
        { isScoreModalOpen && this.scoreFormModal(score) }
      </div>
    );
  }
}

export default Tiles;
