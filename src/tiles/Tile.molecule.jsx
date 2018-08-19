import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({
  className, tileKey, onClick, color,
}) => (
  <div
    className={`tile ${className}`}
    id={tileKey}
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex="0"
    style={color}
  />
);

Tile.defaultProps = {
  className: '',
};

Tile.propTypes = {
  className: PropTypes.string,
  tileKey: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tile;
