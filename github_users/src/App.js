// Created by Vince Chang

import React, {Component} from 'react';
import CardList from './CardList';
import Form from './Form';


class App extends Component  {

  // Data that is initially being rendered, using github API to retrieve Avatar
  // State is updated to contain new cards that are added dynamically
  state = {
    cards: [
      {
        name: "Vince Chang",
        avatar_url: "https://avatars2.githubusercontent.com/u/11703494?v=4",
        login: "vincehacks",
        url:"https://api.github.com/users/vincehacks"
      },
      {
        name: "Zach Ho",
        avatar_url: "https://avatars1.githubusercontent.com/u/15718708?v=4",
        login: "zachho123",
        url:"https://api.github.com/users/zachho123"
      }
    ]
  };

  /* Function: addNewCard
   * Description: This function will take a JSON object that is returned by the
   * call to github's API. Will reset the new cards object to contain the new
   * card that was retrieved
   */
  addNewCard = (cardInfo) => {
    this.setState({cards: this.state.cards.concat(cardInfo)});
  };

  /* Function: render
   * Description: This function will render both the Form and CardList
   * components. Form will be passed onSubmit and the CardList will be passed
   * the data of cards
   */
  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;