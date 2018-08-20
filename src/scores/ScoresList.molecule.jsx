import React from 'react';
import PropTypes from 'prop-types';

import ScoreItem from './ScoreItem.molecule';

const ScoresList = ({ list }) => (
  list.map((item, index) => {
    const { name, score } = item;
    const propsItem = {
      key: `${name}-${name}`,
      name,
      score,
      index,
    };
    return <ScoreItem {...propsItem} />;
  })
);

ScoresList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ScoresList;
