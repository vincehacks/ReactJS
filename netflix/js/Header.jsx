/* Created by Vince Chang
 * This is a function based component of the Header that is displayed at the
 * top of the Search and Detail pages
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  /* Header conditional logic that defines utilSpace and the input logic if
   * passed, otherwise it will be displayed as a Back button
   * Search bar will be displayed in /search
   * Back button will be displayed in /details
   */
  let utilSpace;
  // Only Search.jsx will pass props here
  if (props.showSearch) {
    utilSpace = (
      <input
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
        type="text"
        placeholder="Search"
      />
    );
  } else {
    // Only Details will not pass any props here, so display back button
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }

  // Will render Vince's Netflix in the upper left corner and either a input
  // box for Search.jsx or a back button for Details.jsx
  return (
    <header>
      <h1>
        <Link to="/">Vince's Netflix</Link>
      </h1>
      {utilSpace}
    </header>
  );
};
export default Header;
