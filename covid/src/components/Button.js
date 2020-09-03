// Created by: Vince Chang

import React from 'react';

function handleClick(props) {
  // props.handleClick;
  alert("Hello Worlds");
}

/* =========================================================================
 * Function Name: Button
 * Task: This function is going to render a button that will render the next
 * 10 countries.
  ========================================================================= */
function Button() {
  return (
    <button onClick={handleClick}>Next 10 Countries</button>
  );
}

export default Button;