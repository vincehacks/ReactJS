// @flow

import React, {Component} from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     searchTerm: 'this is some sort of debug statement'
  //   };
  //
  //   // Binds the function to the actual instance
  //   this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  // }

  // He uses this way instead of writing the constructor
  //  "plugins": [
  //    "babel-plugin-transform-class-properties" in .babelrc
  state = {
      searchTerm: ''
  };

  handleSearchTermChange = (event: KeyboardEvent & {target: HTMLInputElement}) => {
    this.setState({searchTerm: event.target.value});
  }

  render(){
    return(
      <div className='search'>
        <header>
          <h1>Vinces  Netflix</h1>
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search'/>
        </header>
        <div>
          {preload.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show}/>)}
        </div>
      </div>
    );
  }
}


export default Search;