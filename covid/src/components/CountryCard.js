// Created by: Vince Chang

import React from 'react';

/* =========================================================================
 * Function Name: CountryCard
 * Task: This function is going to render each Country's information in its own
 * div block.
  ========================================================================= */
function CountryCard(props) {
  return (
    <div className="cards">
      <h3 className='country-text'>Country: {props.Country}</h3>
      <p>New Deaths: <span className='country-description'> {props.NewDeaths} </span></p>
      <p>Total Deaths: <span className='country-description'>{props.TotalDeaths} </span></p>
      <p>Newly Recovered: <span className='country-description'>{props.NewRecovered}</span></p>
    </div>
  );
}

export default CountryCard;