import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, text, onClick }) => (
  <button
    className={`default-btn ${className}`}
    onClick={onClick}
    type="button"
  >
    { text }
  </button>
);

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
