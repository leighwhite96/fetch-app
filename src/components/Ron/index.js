import React, { Component } from 'react'

import RaisedButton from 'material-ui/RaisedButton'

import Nav from '../NavBar'

import {red200} from 'material-ui/styles/colors'

export default class Ron extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: ''
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  handleBtnClick(){
    fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(results => results.json())
    .then(data => {
      let quote = data[0];
      this.setState({
        quote
      })
    })
  }
  render(){
    return (
      <div>
      <Nav />
      <h2>Get a random Ron Swanson quote</h2>
      <div id="ron">
        <img src="https://ih0.redbubble.net/image.69141097.8710/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg" alt="ron"/>
        <RaisedButton backgroundColor={red200} onClick={this.handleBtnClick}>Click for quote</RaisedButton>
      </div>
      <div id="quote">
        <p>{this.state.quote}</p>
      </div>
      </div>
    )
  }



}
