// Created by Vince Chang

import React from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import DoneFrame from './DoneFrame';


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
    randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
    answerIsCorrect: null,
    usedNumbers: [],
    numOfRedraws: 5,
    doneStatus: null
  };

  // Numbers that are user can choose from
  arrayOfNumbers = [1,2,3,4,5,6,7,8,9];


  /* Function: selectNumber
   * Description: This function will update the current state with numbers
   * that are selected by the user. It will use array's concat method to append
   * the number the user clicked to the current state
   */
  selectNumber = (clickedNumber) => {
    // So numbers can NOT be selected multiple times, don't concat it!
    if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {return;}

    // Concat new numbers to state, reset answerIsCorrect to reset its value
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  }


  /* Function: unSelectNumber
   * Description: This function will undo the selection if the user decides
   * to change their mind about their answer
   */
  unSelectNumber = (clickedNumber) => {
    // Put the number back into the state so user can select it again.
    // Reset answerIsCorrect to reset its value
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers
        .filter(number => number !== clickedNumber)
    }));
  }


  /* Function: checkAnswer
   * Description: This function will check that the numbers selected are
   * equal to the number of rendered stars. Sets answerIsCorrect to either
   * true or false
   */
  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomNumberOfStars ===
      prevState.selectedNumbers.reduce((accumulator,currVal) => accumulator + currVal , 0)
    }));
  }


  /* Function: acceptAnswer
   * Description: This function will accept an answer if it is correct.
   * This will also mark the accepted numbers as used
   */
  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      randomNumberOfStars: 1 + Math.floor(Math.random()*9),
    }),this.updateDoneStaus);
  };


  /* Function: redraw
   * Description: This function will change the number of stars and decrement
   * the number of redraws if the value of redraws is greater than 0
   */
  redraw = () => {
    if(this.state.numOfRedraws === 0){return;}

    this.setState(prevState => ({
      randomNumberOfStars: 1 + Math.floor(Math.random()*9),
      answerIsCorrect: null,
      selectedNumbers: [],
      numOfRedraws: prevState.numOfRedraws - 1
    }),this.updateDoneStaus);
  }


  /* Function: possibleCombinationSum
   * Description: This function will determine if the possible combination of
   * numbers can add up to the target value.
   */
  possibleCombinationSum = function(arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return this.possibleCombinationSum(arr, n);
    }
    var listSize = arr.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount ; i++ ) {
      var combinationSum = 0;
      for (var j=0 ; j < listSize ; j++) {
        if (i & (1 << j)) { combinationSum += arr[j]; }
      }
      if (n === combinationSum) { return true; }
    }
    return false;
  }


  /* Function: possibleSolutions
   * Description: This function will
   */
  possibleSolutions = ({randomNumberOfStars, usedNumbers}) => {
    // All numbers that are not currently being used
    const possibleNumbers = this.arrayOfNumbers.filter(number =>
      usedNumbers.indexOf(number) === -1
    );

    // Checking the combination of numbers to see if it adds up to the target
    return this.possibleCombinationSum(possibleNumbers,randomNumberOfStars);
  }


  /* Function: updateDoneStatus
   * Description: This function will set the done status based on whether the
   * user has won or loss the game. Winner is determined if all numbers are
   * used and losers are determined if they have 0 number of redraws and there
   * is no possible solution
   */
  updateDoneStaus = () => {
    this.setState(prevState => {
      if(prevState.usedNumbers.length === 9){
        return {doneStatus: 'Great Job! You Won!'}
      }
      if(prevState.numOfRedraws === 0 && !this.possibleSolutions({randomNumberOfStars: this.state.randomNumberOfStars, usedNumbers: this.state.usedNumbers})){
        return {doneStatus: 'Game Over, You Loss.'}
      }
    });
  }


  /* Function: resetGame
   * Description: This function will reset all the states so game can be played
   * again
   */
  resetGame = () => {
    this.setState({
      selectedNumbers: [],
      randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
      answerIsCorrect: null,
      usedNumbers: [],
      numOfRedraws: 5,
      doneStatus: null
    });
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
          <Button
            selectedNumbers={this.state.selectedNumbers}
            checkAnswer={this.checkAnswer}
            answerIsCorrect={this.state.answerIsCorrect}
            acceptAnswer={this.acceptAnswer}
            redraw={this.redraw}
            numOfRedraws={this.state.numOfRedraws}
          />
          <Answer
            selectedNumbers={this.state.selectedNumbers}
            unSelectNumber={this.unSelectNumber}/>
          <br/>
          <br/>
          {this.state.doneStatus ?
            <DoneFrame
              doneStatus={this.state.doneStatus}
              resetGame={this.resetGame}
            /> :
            <Numbers
              arrayOfNumbers={this.arrayOfNumbers}
              selectedNumbers={this.state.selectedNumbers}
              selectNumber={this.selectNumber}
              usedNumbers={this.state.usedNumbers}
            />
          }
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}

export default Game;