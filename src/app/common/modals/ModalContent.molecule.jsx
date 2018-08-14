import React from 'react';
import PropTypes from 'prop-types';

const hideVisuallyStyles = {
  border: '0',
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  width: '1px',
  whiteSpace: 'nowrap',
};

const ModalContent = ({ onClose, text }) => (
  <aside className="modal-cover">
    <div className="modal">
      <button type="button" className="modal-close" onClick={onClose}>
        <span className="hide-visually" style={hideVisuallyStyles}>
          Close
        </span>
        <svg className="modal-close-icon" viewBox="0 0 40 40">
          <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
        </svg>
      </button>
      <div className="modal-content">
        {text}
      </div>
    </div>
  </aside>
);

ModalContent.propTypes = {
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ModalContent;
