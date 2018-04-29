import React, {Component} from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';

class HelloWorldList extends Component {

  constructor(props){
    super(props);
    this.state = {greetings: ['VINCE','CHANG',"AHMA"]};
    // Passing down the addGreeting function
    this.addGreeting = this.addGreeting.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  // Helper function that will return a list of JSX components
  renderGreetings() {
    return this.state.greetings.map(name => (
      <HelloWorld key={name} name={name} removeGreeting={this.removeGreeting}/>
    ));
  }

  // This function will add the new name to the greetings list
  addGreeting(newName){
    // This is how to do an append shortcut, keep original array the same then
    // add newName to the end of it
    this.setState({greetings: [...this.state.greetings, newName]});
  }

  // This function will remove a name from the greetings HelloWorldList
  // The filter will return back a list that excludes the name we are removing!
  removeGreeting(removeName){
    const filteredGreetings = this.state.greetings.filter(name=>{
      return name !== removeName;
    });
    this.setState({greetings: filteredGreetings});
  }

  // Render with out the renderGreetings()
  // render() {
  //   return(
  //     <div className="HelloWorldList">
  //       <HelloWorld name='Vincent'/>
  //       <HelloWorld name='Chang'/>
  //     </div>
  //   );
  // }

  // Render with function call
  render() {
    return(
      <div className="HelloWorldList">
        <AddGreeter addGreeting={this.addGreeting}/>
        {this.renderGreetings()}
      </div>
    );
  }
}

export default HelloWorldList;