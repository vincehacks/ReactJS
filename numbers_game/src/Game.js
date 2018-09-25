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

  // state will be an object that holds array of selected numbers by the user
  state = {
    selectedNumbers: [],
    randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
  };


  /* Function: selectNumber
   * Description: This function will update the current state with numbers
   * that are selected by the user. It will use array's concat method to append
   * the number the user clicked to the current state
   */
  selectNumber = (clickedNumber) => {
    // So numbers can NOT be selected multiple times, don't concat it!
    if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {return;}

    // Concat new numbers to state
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  }

  /* Function: unSelectNumber
   * Description: This function will undo the selection if the user decides
   * to change their mind about their answer
   */
  unSelectNumber = (clickedNumber) => {

    // Put the number back into the state so user can select it again
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers
        .filter(number => number !== clickedNumber)
    }));
  }


  /* Function: render
   * Description: This function will render the following components
   */
  render(){
    return (
      <div className="container">
        <h3>Play Nine!</h3>
        <hr/>
        <div className="row">
          <Stars numberOfStars = {this.state.randomNumberOfStars}/>
          <Button selectedNumbers={this.state.selectedNumbers}/>
          <Answer selectedNumbers={this.state.selectedNumbers}
                  unSelectNumber={this.unSelectNumber}/>
          <br/>
          <br/>
          <Numbers
             selectedNumbers={this.state.selectedNumbers}
             selectNumber={this.selectNumber}
          />
        </div>
      </div>
    );
  }
}

export default Game;