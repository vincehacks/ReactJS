/* Created by Vince Chang
 * This is an ES6 Class based React component that will allow me to use and
 * maintain state!
 * All class base react components need a render method and must return markup
 */

import React from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

class Search extends React.Component {
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

    this.state = {
      searchTerm: ''
    };

    // Bindings so changes and states are updated
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  /* =========================================================================
 * Function Name: handleSearchTermChange
 * Task: This function will wait for change to happen and update the state using
 * React's setState function that will automatically trigger a re-render
 *
 * This function executes on a onChange to the input field for search
   ========================================================================= */
  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  /* =========================================================================
 * Function Name: render
 * Task: This function will render the markup and wait for user to input text in
 * the search bar
   ========================================================================= */
  render() {
    return (
      <div className="search">
        <Header
          searchTerm={this.state.searchTerm}
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
        />
        {/* preload is an array of shows and for each show it calls this
         * function which will create an array of react components.
         * Using the spread operator to make all show card top level props!
         * Need to use a key to properly identify what changes by id
         * Logic for search is that filter by the word being in the title or
         * the description, if there, then index will be non zero = valid
         * then map over each of the valid shows & pass as props to showCard*/}
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
