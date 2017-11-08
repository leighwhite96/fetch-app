import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  handeClose = () => {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <div>
      <AppBar
        title="That's So Fetch"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.handleToggle}
        />
      <Drawer
        docked={false}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}
        >
        <Router>
        <div>
          <MenuItem onClick={this.handeClose} containerElement={<Link to="/"/>}>Click for home</MenuItem>
          <MenuItem onClick={this.handeClose} containerElement={<Link to="/randomuser"/>}>Click for Random User</MenuItem>
          <MenuItem onClick={this.handeClose} containerElement={<Link to="/ron"/>}>Click for Ron</MenuItem>
        </div>
        </Router>
      </Drawer>
      </div>
      )
  }

}
export default NavBar
