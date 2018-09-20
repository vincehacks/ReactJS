import React, {Component} from 'react';

class Card extends Component {
  render(){
    return (
      <div style={{margin:'4em'}}>
        <img width="200" height="200" src={this.props.avatarUrl}/>
        <div style={{display: 'inline-block', marginLeft: 10}}>
          <div style={{fontSize:'1.25em', fontWeight: 'bold'}}>{this.props.name}</div>
          <div>Github ID: {this.props.githubID}</div>
        </div>
      </div>
    );
  }
}

export default Card;