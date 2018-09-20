import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';


let data =[
  {
    name:"Vince Chang",
    avatarUrl:"https://avatars2.githubusercontent.com/u/11703494?v=4",
    githubID:"vincehacks"
  },
  {
    name:"Zach Ho",
    avatarUrl:"https://avatars1.githubusercontent.com/u/15718708?v=4",
    githubID:"zachho123"
  }
]

const App = (props) => {
  return (
    <div className="App">
      {props.cards.map(card => <Card {...card}/>)}
    </div>
  );
};


export default App;
