import React, { Component } from 'react';

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { red200 } from 'material-ui/styles/colors'
import './RandomUser.css';

import UserProfile from '../UserProfile'
import Nav from '../NavBar'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: '',
      profile: false
    }
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onNumberChange(e){
    e.preventDefault();
    this.setState({
      num: e.target.value,
      profile: false
    })
  }

  onFormSubmit(e){
    e.preventDefault();
    this.setState({
      profile: true
    })
  }

  render() {
    let profile = this.state.profile
    if(!profile) {
    return (
        <div className="App">
        <Nav />
        <h1>Random User Generator</h1>
        <h3>How many users would you like?</h3>
            <TextField id="userinput" type="number" value={this.state.num} onChange={this.onNumberChange}/>
            <RaisedButton onClick={this.onFormSubmit} backgroundColor={red200}>Submit</RaisedButton>
        </div>
    )
  } else {
      return (

          <div className="App">
          <Nav/>
          <h1>Random User Generator</h1>
          <h3>How many users would you like?</h3>
              <TextField id="userinput" type="number" value={this.state.num} onChange={this.onNumberChange}/>
              <RaisedButton onClick={this.onFormSubmit} backgroundColor={red200}>Submit</RaisedButton>
            <UserProfile number={this.state.num}/>
          </div>

      )
    };
  }
}

export default App;
