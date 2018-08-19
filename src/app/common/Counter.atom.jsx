import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({
  className, text,
}) => (
  <div className={`${className} counter`}>
    <h5 className="counter-title">
      { text }
    </h5>
  </div>
);

Counter.defaultProps = {
  className: '',
};

Counter.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Counter;
