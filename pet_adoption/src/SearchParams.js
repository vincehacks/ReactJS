// Created by Vince Chang

import React from 'react';
import SearchBox from './SearchBox';
import { navigate } from '@reach/router';

class SearchParams extends React.Component {
  /* =========================================================================
  * Function Name: handleLocationChange
  * Task: This function will go back to the home page
  * navigate() is a function provided by Reach Router
    ========================================================================*/
  handleSearchSubmit() {
    navigate('/');
  }

  /* =========================================================================
  * Function Name: render
  * Task: This function will render the SearchBox component and will be passed
  * in the function handleSearchSubmit
   ========================================================================= */
  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchParams;
