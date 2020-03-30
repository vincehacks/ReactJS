// Created by Vince Chang

import React from 'react';

/* =========================================================================
* Function Name: Button
* Task: This function will render the button that will allow a user
* to check their answer to the game.
* 3 cases: Answer is true, false, and default case where nothing is selected
  ========================================================================= */
const Button = props => {
  let button;
  switch (props.answerIsCorrect) {
    case true:
      button = (
        <button className="btn btn-success" onClick={props.acceptAnswer}>
          <i className="fa fa-check"></i>
        </button>
      );
      break;
    case false:
      button = (
        <button className="btn btn-danger">
          <i className="fa fa-times"></i>
        </button>
      );
      break;
    default:
      button = (
        <button
          disabled={props.selectedNumbers.length === 0}
          onClick={props.checkAnswer}
        >
          =
        </button>
      );
      break;
  }
  return (
    <div className="col-2">
      {button}
      <br />
      <br />
      <button className="btn btn-warning" disabled={props.numOfRedraws === 0}>
        <i className="fa fa-refresh" onClick={props.redraw}>
          REDRAW: {props.numOfRedraws}
        </i>
      </button>
    </div>
  );
};

export default Button;
