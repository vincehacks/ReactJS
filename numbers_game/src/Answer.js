// Created by Vince Chang

import React from 'react';

/* Function: Answer
 * Description: This function will render the selectedNumbers
 */
const Answer = (props) => {
  // Iterate and display over selectedNumbers that were passed in as props
  return(
    <div className="col-5">
      {props.selectedNumbers.map((number, i) =>
        <span key={i}
          onClick={() => props.unSelectNumber(number)}>
          {number}
        </span>
      )}
    </div>
  );
}

export default Answer;