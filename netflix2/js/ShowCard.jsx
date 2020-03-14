/* Created by Vince Chang
 * This is an function based React class that represents the show card for each
 * show.
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// These are styled componenets and are new to JS, maybe later I can create
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

const ShowCard = props => (
  <Wrapper to={`/details/${props.imdbID}`}>
    <Image
      alt={`${props.title} Show Poster`}
      src={`/public/img/posters/${props.poster}`}
    />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);

export default ShowCard;
