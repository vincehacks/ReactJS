// Created by Vince Chang

import React from 'react';

/* Function: Stars
 * Description: This function will render a random number of stars (1-9) and
 * render them onto the screen
 */
const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random() * 9);

  let stars = [];

  for(let i = 0; i < numberOfStars; i++){
    stars.push(<i key={i} className="fas fa-star"></i>);
  }
  return(
    <div className="col-5">
      {stars}
    </div>
  );
}

export default Stars;