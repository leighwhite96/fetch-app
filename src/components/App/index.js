import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Nav from '../NavBar'
import Ron from '../Ron'
import RandomUser from '../RandomUser'
import Home from '../Home'

import './App.css'

const App = () => (
  <div>
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/randomuser" component={RandomUser}/>
      <Route path="/ron" component={Ron}/>
    </div>
  </Router>
  </div>
)


 export default App
