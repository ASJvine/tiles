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
    const { contentText, onClose } = this.props;

    return createPortal(
      <ModalContent onClose={onClose} text={contentText} />,
      this.el,
    );
  }
}

Modal.defaultProps = {
  contentText: '',
};

Modal.propTypes = {
  contentText: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
