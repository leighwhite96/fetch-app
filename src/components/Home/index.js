import React from 'react'

import muiThemeable from 'material-ui/styles/muiThemeable';
import RaisedButton from 'material-ui/RaisedButton'

import Nav from '../NavBar'

import {pink50, pink700, pink500, red200} from 'material-ui/styles/colors'

const homeStyle = {
  height: '70vh',
  backgroundColor: '#fff4f9',
  boxShadow: '5px 5px 2.5px #888888'
}

const titleStyle = {
  width: '80vw',
  margin: '10vh auto',
  color: pink700
}

const btnContainerStyle = {
  width: '50vw',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}

const btnStyle = {
  color: 'white',
  marginRight: '10vw',
  marginTop: '5vw'
}
const Home = () => (
    <header style={homeStyle}>
    <Nav />
    <div style={titleStyle}>
      <h1>A place to experiment with React Router, Material-UI and AJAX requests in React</h1>
    </div>
    <div style={btnContainerStyle}>
      <RaisedButton style={btnStyle} backgroundColor={red200} label="Click" />
      <RaisedButton style={btnStyle} backgroundColor={red200} label="Click" />
      <RaisedButton style={btnStyle} backgroundColor={red200} label="Click" />
    </div>
    </header>
)

export default Home
