import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SidebarMenuRouters from '../../routers/routers.js';
import Header from '../../containers/header.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import '../../static/css/App.css';
import '../../static/css/vendor-styles.css';

import "react-table/react-table.css";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#258df2',
    accent1Color: '#40c741',
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''};
  }

  handleUsername (e){
        this.setState({username: e.target.value});
  }

  handlePassword (e){
        this.setState({password: e.target.value});
  }  

  login (e){
      e.preventDefault();
      ReactDOM.render(
        <div>
          <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Header />
            <SidebarMenuRouters />
          </div>
          </MuiThemeProvider>
        </div>,
        document.getElementById('root')
      );
  }  

  render() {
    return (
    <div>
      <div className="login-wrapper">
        <div className="login-fields">
          <h3>Login</h3>
          <TextField
            id="name"
            floatingLabelText="Usernae or Email"
            fullWidth={true}
            onChange={this.handleUsername.bind(this)}
          />
          <TextField
            id="pass"
            floatingLabelText="Password"
            fullWidth={true}
            onChange={this.handlePassword.bind(this)}
          />
          <div className="pt20">
            <RaisedButton 
            label="Log In" 
            primary={true} 
            fullWidth={true}
            onClick={this.login.bind(this)}/>
          </div>

        </div>
      </div>
    </div>
    );
  }
}

export default Login;
