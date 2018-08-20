import React, { Component, Fragment } from 'react';

import Button from './common/Button.atom';
import MainTitle from './common/MainTitle.atom';
import Tiles from '../tiles/Tiles.organism';
import ScoresBoard from '../scores/ScoresBoard.organism';

import { getItemParsedFromLocalStorage } from '../utils/utils';
import { TILES_GAME_LOCALSTORAGE_KEY } from '../utils/constants';

import './styleguide.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScoresListDisplayed: false,
      scoresList: getItemParsedFromLocalStorage(TILES_GAME_LOCALSTORAGE_KEY),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isScoresListDisplayed: !prevState.isScoresListDisplayed,
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
        <MainTitle text="Colored Tiles Game" />
        <Tiles />
        <Button className="fame-btn" onClick={this.handleClick} text={textButton} />
        { isScoresListDisplayed && this.scoresList(scoresList) }
      </Fragment>
    );
  }
}

export default App;
