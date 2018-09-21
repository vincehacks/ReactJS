import React, {Component} from 'react';
import CardList from './CardList';
import Form from './Form';


class App extends Component  {

    // Actual data that is initially being rendered
    state = {
        cards: [
            {
                name:"Vince Chang",
                avatar_url:"https://avatars2.githubusercontent.com/u/11703494?v=4",
                login:"vincehacks"
            },
            {
                name:"Zach Ho",
                avatar_url:"https://avatars1.githubusercontent.com/u/15718708?v=4",
                login:"zachho123"
            }
        ]
    };

    addNewCard = (cardInfo) => {
        this.setState({cards: this.state.cards.concat(cardInfo)});
    };

    render(){
        return (
            <div className="App">
                <Form onSubmit={this.addNewCard}/>
                <CardList cards={this.state.cards}/>
            </div>
        );
    }
}

export default App;