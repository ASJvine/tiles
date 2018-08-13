import React from 'react';
import PropTypes from 'prop-types';

const MainTitle = ({ className, text }) => (
  <h1 className={`${className} main-title`}>
    {text.trim()}
  </h1>
);

MainTitle.defaultProps = {
  className: '',
};

MainTitle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default MainTitle;
