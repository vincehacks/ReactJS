// Created by Vince Chang
   
import React from 'react';

/* Function: Button
 * Description: This function will render the button that will allow a user
 * to check their answer to the game
 */
const Button = (props) => {

  return(
    <div className="col-2">
      <button disabled={props.selectedNumbers.length === 0}>=</button>
    </div>
  );

}

export default Button;