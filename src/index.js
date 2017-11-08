import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {pink700} from 'material-ui/styles/colors'

import App from './components/App';

import './index.css';

const muiTheme = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 50,
    color: pink700
  },
});

const Page = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<Page />, document.getElementById('root'));
