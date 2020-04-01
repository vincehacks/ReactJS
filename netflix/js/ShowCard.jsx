/* Created by Vince Chang
 * This is an ES6 Class based React component that will allow me to use and
 * maintain state!
 * All class base react components need a render method and must return markup
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// These are styled components and are new to JS, maybe later I can create
// classes that will just use these styles below and then call it here
// <Wrapper> will need to change to <div className="wrapper"> and Image -> img
const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class ShowCard extends React.Component {
  /* =========================================================================
 * Function Name: constructor
 * Task: This function will bind the state
 * Every time you call .bind will create a new function, so that's why do it in
 * the constructor, but good thing it will only happen once
 * In newer JS, you no longer need to write the constructor if you write
 * functions using the arrow function, it will automatically do the binding
 * refer to transform-class-properties
   ========================================================================= */
  constructor(props) {
    super(props);
  }

  /* =========================================================================
 * Function Name: shouldComponentUpdate
 * Task: This React Life Cycle function is needed for performance. I do not
 * want the render to happen for each showCard multiple times. This will make
 * sure that once the showCard has been rendered, it does not render again!
  ========================================================================= */
  shouldComponentUpdate() {
    return false;
  }

  /* =========================================================================
 * Function Name: render
 * Task: This function will render the show's markup and wait for user to input
 * text in the search bar. This wIll also render the rating returned back from
 * the API fetch call
   ========================================================================= */
  render() {
    return (
      <Wrapper to={`/details/${this.props.imdbID}`}>
        <Image
          alt={`${this.props.title} Show Poster`}
          src={`/public/img/posters/${this.props.poster}`}
        />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}

export default ShowCard;
