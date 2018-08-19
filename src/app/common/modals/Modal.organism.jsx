/* globals document */
// NOTE: inspired by https://reactjs.org/docs/portals.html
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import ModalContent from './ModalContent.molecule';

import './modal.scss';

const modalRoot = document.getElementById('modal');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { children, onClose, autoClose } = this.props;

    return createPortal(
      <ModalContent onClose={onClose} autoClose={autoClose}>
        { children }
      </ModalContent>,
      this.el,
    );
  }
}

Modal.defaultProps = {
  autoClose: false,
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
  autoClose: PropTypes.bool,
};

export default Modal;
