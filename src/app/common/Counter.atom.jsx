import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ className, counterNb, precedingText }) => (
  <div className={`${className} counter`}>
    <h5 className="counter-title">
      {`${precedingText.trim()} ${counterNb}`}
    </h5>
  </div>
);

Counter.defaultProps = {
  className: '',
  precedingText: 'Counter',
};

Counter.propTypes = {
  counterNb: PropTypes.number.isRequired,
  precedingText: PropTypes.string,
  className: PropTypes.string,
};

export default Counter;
