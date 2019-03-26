// @flow

import React, {Component} from 'react';
import ShowCard from './ShowCard';
import Header from './Header'

// Exported this to types.js
// type Show = {title: string, description: string, year: string, imdbID: string,
// trailer: string, poster: string};

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

  props: {
    shows: Array<Show>
  };

  handleSearchTermChange = (event: KeyboardEvent & {target: HTMLInputElement}) => {
    this.setState({searchTerm: event.target.value});
  }

  render(){
    return(
      <div className='search'>
        <Header searchTerm={this.state.searchTerm} showSearch handleSearchTermChange={this.handleSearchTermChange} />
        <div>
          {this.props.shows
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