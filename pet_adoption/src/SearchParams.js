// Created by Vince Chang

import React from 'react';
import SearchBox from './SearchBox';
import { navigate } from '@reach/router';

class SearchParams extends React.Component {
  // Goes back to home page
  handleSearchSubmit() {
    navigate('/');
  }
  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchParams;
