// Created by Vince Chang

import React from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

/* Function: Game
 * Description: The purpose of the game is to allow users to click from the
 * numbers component that add up to the target number, until all numbers
 * have been used. If the user experiences a case where the remaining
 * numbers don't add up to the target number, then they are allowed the
 * ability to refresh their target number in hopes of having a combination
 * of two numbers that add up to the target number
 */
class Game extends React.Component {

  state = {
    selectedNumbers: [2,4]
  };
  /* Function: render
   * Description: This function will render the following components
   */
  render(){
    return (
      <div className="container">
        <h3>Play Nine!</h3>
        <hr/>
        <div className="row">
          <Stars/>
          <Button/>
          <Answer selectedNumbers={this.state.selectedNumbers}/>
          <br/>
          <br/>
          <Numbers selectedNumbers={this.state.selectedNumbers}/>
        </div>
      </div>
    );
  }
}

export default Game;