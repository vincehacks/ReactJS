// Created by Vince Chang

import React from 'react';

/* =========================================================================
* Function Name: Answer
* Task: Function based component that will iterate and display over
* selectedNumbers that were passed in from props.
  ========================================================================= */
const Answer = props => {
  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i) => (
        <span key={i} onClick={() => props.unSelectNumber(number)}>
          {number}
        </span>
      ))}
    </div>
  );
};

export default Answer;
