import React from 'react';
import PropTypes from 'prop-types';

import ScoresList from './ScoresList.molecule';

import './scoresBoard.scss';

const ScoresBoard = ({ list }) => (
  <div className="scores-wrapper">
    <h5 className="title">
      Hall of Fame - Top10 MVP
    </h5>
    <ScoresList list={list} />
  </div>
);

ScoresBoard.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ScoresBoard;
