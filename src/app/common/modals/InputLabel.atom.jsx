import React from 'react';
import PropTypes from 'prop-types';

const InputLabel = ({ className, text }) => (
  <h6 className={`${className} input-label`}>
    {text.trim()}
  </h6>
);

InputLabel.defaultProps = {
  className: '',
};

InputLabel.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default InputLabel;
