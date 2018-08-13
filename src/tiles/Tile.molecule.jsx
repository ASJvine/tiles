import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ className, tileKey, onClick }) => (
  <div
    className={`tile ${className}`}
    id={tileKey}
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex="0"
  />
);

Tile.defaultProps = {
  className: '',
};

Tile.propTypes = {
  className: PropTypes.string,
  tileKey: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tile;
