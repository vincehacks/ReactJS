// Created by Vince Chang

import React from 'react';

/* Function: Number
 * Description: This function will render the potential numbers that the
 * user can pick and choose from.
 */
const Numbers = (props) => {

  const arrayOfNumbers = [1,2,3,4,5,6,7,8,9];

  const numberClassName = (number) => {
    if(props.selectedNumbers.indexOf(number) >= 0){
      return 'selected';
    }
  }

  return(
    <div className="card text-center">
      <div>
        {arrayOfNumbers.map((number, i) =>
          <span key={i} className={numberClassName(number)}>{number}</span>
        )}
      </div>
    </div>
  );
}

export default Numbers;