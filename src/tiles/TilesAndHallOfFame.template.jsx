/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';

import Button from '../app/common/Button.atom';
import ScoresBoard from '../scores/ScoresBoard.organism';
import Tiles from './Tiles.organism';

import { getItemParsedFromLocalStorage } from '../utils/utils';
import { TILES_GAME_LOCALSTORAGE_KEY } from '../utils/constants';

class TilesAndHallOfFame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScoresListDisplayed: false,
      scoresList: getItemParsedFromLocalStorage(TILES_GAME_LOCALSTORAGE_KEY),
    };

    this.toggleList = this.toggleList.bind(this);
    this.updateListFromLS = this.updateListFromLS.bind(this);
  }

  toggleList() {
    this.setState(prevState => ({
      isScoresListDisplayed: !prevState.isScoresListDisplayed,
    }));
  }

  updateListFromLS() {
    this.setState(() => ({
      scoresList: getItemParsedFromLocalStorage(TILES_GAME_LOCALSTORAGE_KEY),
    }));
  }

  scoresList() {
    const { scoresList } = this.state;

    if (!scoresList) {
      return (
        <p className="play-message">
          Be the first of the Hall of Fame. PLAY the GAME!
        </p>
      );
    }

    return <ScoresBoard list={scoresList} />;
  }

  render() {
    const { isScoresListDisplayed, scoresList } = this.state;
    const textButton = `${isScoresListDisplayed ? 'Hide' : 'Display'} Hall of Fame`;

    return (
      <Fragment>
        <Tiles updateListFromLS={this.updateListFromLS} />
        <Button className="fame-btn" onClick={this.toggleList} text={textButton} />
        {isScoresListDisplayed && this.scoresList(scoresList)}
      </Fragment>
    );
  }
}

export default TilesAndHallOfFame;
