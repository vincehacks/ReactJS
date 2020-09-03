import React from 'react';
import CountryCard from './CountryCard.js';


/* =========================================================================
 * Function Name: List
 * Task: This function is going to use props which in this case is the
 * covidData. The data is then checked to see if there is any data to pass to
 * <CountryCard/>. If there is no data, display a message, if there is data,
 * then iterate over all the countries in the Countries[] and for each country
 * display and create a <CountryCard/>.
 *
 * The <CountryCard/> will be passed all the details in each Country object that
 * is found in the Country[]
  =========================================================================*/
const List = (props) => {

  // Initializing a prop for the component called covidData
  const { covidData, index } = props;
  if (!covidData || covidData.length === 0) return <p>No Covid-19 Data, sorry</p>;


  // WIP
  let arr = [];
  for (let i = index; i < index + 10; i++) {
    console.log(i);
    console.log(covidData[i]);
    //arr.push(new Object(covidData[i]));
    arr.push(i);
  }

  return (
    <>
      <h2 className='list-head'>Countries</h2>
      {covidData.Countries.map((country) => {
        return (
          <CountryCard {...country} />
        );
      })}
      {/* {arr.map((country) => {
        return (
          <CountryCard {...country} />
        );
      })} */}
    </>
  );
};
export default List;