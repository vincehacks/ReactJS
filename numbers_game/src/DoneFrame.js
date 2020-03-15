// Created by Vince Chang

import React from 'react';

/* Function: DoneFrame
 * Description: This function will render a message indicating if the user won
 * or lost the game
 */
const DoneFrame = props => {
  return (
    <div className="message-align">
      <h2 className="text-center">{props.doneStatus}</h2>
      <button className="btn btn-secondary" onClick={props.resetGame}>
        Play Again
      </button>
    </div>
  );
};

export default DoneFrame;
