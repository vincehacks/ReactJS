// Created by Vince Chang

import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  /* =========================================================================
  * Function Name: constructor
  * Task: This function will bind the state
  * Every time you call .bind will create a new function, so that's why do it
  * in the constructor, but good thing it will only happen once
  * In newer JS, you no longer need to write the constructor if you write
  * functions using the arrow function, it will automatically do the binding
  * refer to transform-class-properties
   ========================================================================= */
  constructor(props) {
    super(props);

    // This is a div that will be injected into Modal located in index.html
    this.el = document.createElement('div');
  }

  /* =========================================================================
  * Function Name: componentDidMount (used for fetching info)
  * Task: This function will is reserved for React. It will use the petfinder
  * API and get the information of a pet using the id. It will then return back
  * a promise that can be iterated over to find out the breed. After getting the
  * object, now can set the state for all other fields
  *
  * NOTE: That one animal can have a mix of breeds or can just be a pure breed
  * The if-else logic will handle if a animal has more than one breed or is a
  * single breed
    ======================================================================== */
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  // Need to clean up, so don't have memory leaks
  /* =========================================================================
  * Function Name: componentWillUnmount (used for fetching info)
  * Task: This function will is reserved for React. It will use the petfinder
  * API and get the information of a pet using the id. It will then return back
  * a promise that can be iterated over to find out the breed. After getting the
  * object, now can set the state for all other fields
  *
  * NOTE: That one animal can have a mix of breeds or can just be a pure breed
  * The if-else logic will handle if a animal has more than one breed or is a
  * single breed
    ======================================================================== */
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  /* =========================================================================
  * Function Name: render
  * Task: This function will render the show's markup for a pet. It handles
  * logic for photos because the API will return different sizes of photos.
  * The output will be the photo of the pet with its breed and location.
  *
  * Since Provider is wrapping everything, wherever I instantiate a Context obj
  * I will have the state that Provider is making accessible which is App's
  * state.
  *
  * Provider defines where I am going to get the resources from, in this case it
  * is this file App.js 's state. Note you can have multiple Providers
   ========================================================================= */
  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
