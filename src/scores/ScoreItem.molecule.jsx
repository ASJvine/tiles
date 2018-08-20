import React from 'react';
import PropTypes from 'prop-types';

const ScoreItem = ({ index, name, score }) => (
  <li className="item-wrapper" key={`${name}-${name}`}>
    <p className="item-text name">
      {`(${index}) ${name}`}
    </p>
    <p className="item-text score">
      {`scored ${score}`}
    </p>
  </li>
);

ScoreItem.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default ScoreItem;
