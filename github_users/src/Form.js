import React, {Component} from 'react';

class Form extends Component{
    state = {
        userName:''
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Event: Form submit", this.state.userName);
        fetch(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                return resp.json();
            })
            .then(this.props.onSubmit)
        this.setState({userName:''});
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit} style={{display: 'inline-block', marginLeft: 60, marginTop: 70}}>
                <input type="text"
                       value={this.state.userName}
                       onChange={(event) => this.setState({userName: event.target.value})}
                       placeholder="Github username" required/>
                <button type="submit"> Add Card</button>
            </form>
        );
    }

}

export default Form;