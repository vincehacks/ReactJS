// Importing the react library from the npm module
import React, {Component} from 'react';
import './HelloWorld.css';

// const HelloWorld = (props) => {
//   return (<div className="HelloWorld">Hello {props.name}!</div>);
// };


class HelloWorld extends Component {

  // Constructor
  constructor(props){
    super(props);
    this.state = {greeting: "Hello "};
    // This tells JavaScript that any time I see 'this' in chineseify, I want
    // you to refer to ME!
    this.chineseify = this.chineseify.bind(this);
  }

  // Method that handles the onClick
  chineseify(){
    // You can't modify the state inside a class, so need to use this.setState
    // to do it for me. ex. can't do greeting = "Ni hao"
    this.setState({greeting: "Ni Hao "});
  }


  render(){
    return (
      // this.props.name will come from only this current class, not parent's
      <div className='HelloWorld'>
        {this.state.greeting} {this.props.name}!
        <br/>
        <button onClick={this.chineseify}>Chineseify!</button>
      </div>
    );
  }
}




// Export this component so it could be used in other files!
export default HelloWorld;