import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './static/css/App.css';
import './static/css/vendor-styles.css';

import LoginPage from './pages/login.js';

import "react-table/react-table.css";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#258df2',
    accent1Color: '#40c741',
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <LoginPage />
          </div>
        </MuiThemeProvider>
      </div>

    );
  }
}

export default App;
