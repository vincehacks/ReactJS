// Created by Vince Chang

import React from 'react';

/* Function: Number
 * Description: This function will render the potential numbers that the
 * user can pick and choose from.
 */
const Numbers = (props) => {

  // Numbers that are user can choose from
  const arrayOfNumbers = [1,2,3,4,5,6,7,8,9];

  /* Function: numberClassName
   * Description: This function will set the appropriate class for each number
   */
  const numberClassName = (number) => {
    if(props.selectedNumbers.indexOf(number) >= 0){
      return 'selected';
    }
  }

  return(
    <div className="card">
      <div>
        {arrayOfNumbers.map((number, i) =>
          <span key={i} className={numberClassName(number)}
                onClick={() => props.selectNumber(number)}>
            {number}
          </span>
        )}
      </div>
    </div>
  );
}

export default Numbers;