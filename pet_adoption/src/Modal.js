// Created by Vince Chang

import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  /* =========================================================================
  * Function Name: constructor
  * Task: This function will use the document to create a div tag to place the
  * Modal into. This div will be injected into a Modal located in index.html
   ========================================================================= */
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
  }

  /* =========================================================================
  * Function Name: componentDidMount (used for fetching info)
  * Task: This function will is reserved for React.
    ======================================================================== */
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  // Need to clean up, so don't have memory leaks
  /* =========================================================================
  * Function Name: componentWillUnmount (used for fetching info)
  * Task: This function will clean up memory (listeners etc.)
  * If you don't do this, you can have memory leaks
    ======================================================================== */
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  /* =========================================================================
  * Function Name: render
  * Task: This function will return a function called createPortal which will
  * this.props.children will be key, and children
  * Children = things that are passed to
   ========================================================================= */
  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
