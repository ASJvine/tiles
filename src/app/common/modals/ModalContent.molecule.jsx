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

const ModalContent = ({ onClose, children, autoClose }) => (
  <aside className="modal-cover">
    <div className="modal">
      { !autoClose
        && (
          <button type="button" className="modal-close" onClick={onClose}>
            <span className="hide-visually" style={hideVisuallyStyles}>
              Close
            </span>
            <svg className="modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
        )
      }
      <div className="modal-content">
        { children }
      </div>
    </div>
  </aside>
);

ModalContent.defaultProps = {
  autoClose: false,
};

ModalContent.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  autoClose: PropTypes.bool,
};

export default ModalContent;
