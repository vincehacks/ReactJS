// Created by Vince Chang

import React from 'react';

/* =========================================================================
* Function Name: Number
* Task: This function will render the potential numbers that the user can pick * and choose from.
  ========================================================================= */
const Numbers = props => {
  /* =========================================================================
  * Function Name: numberClassName
  * Task: This function will set the appropriate class for each number
    ========================================================================= */
  const numberClassName = number => {
    if (props.usedNumbers.indexOf(number) >= 0) {
      return 'used';
    }
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  };

  return (
    <div style={{ margin: 'auto', marginTop: '2%' }}>
      <div className="card">
        <div>
          {props.arrayOfNumbers.map((number, i) => (
            <span
              key={i}
              className={numberClassName(number)}
              onClick={() => props.selectNumber(number)}
            >
              {number}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Numbers;
