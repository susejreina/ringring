import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

//import { PostData } from '../../services/PostData';
import {Redirect} from 'react-router-dom';

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
  constructor() {
    super();
    this.state = {
      data:[],
      /* name: '',
      pass: '',
      lastname: '',
      email: '',
      status: '',
      type: '',
      redirect: false */
    };

    // this.signIn = this.signIn.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/users',{
      method: 'POST',
      mode: 'no-cors',
    })
    .then(
      function(response) {
        console.log(response);
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });  
  }

  /* signIn() {
    if(this.state.name && this.state.pass) {
      PostData('users', this.state).then((result) => {
        let responseJson = result;
        if(responseJson.userData){
          sessionStorage.setItem('userData', responseJson);
          this.setState({redirect: true})
        }
        else{
          console.log('Login error');
        }
      });
    }
  } */

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    if(this.state.redirect){
      return (<Redirect to={'/home'} />)
    }

    return (
    <div>
      <div className="login-wrapper">
        <div className="login-fields">
          <h3>Login</h3>

            <div>
              <TextField
                name="name"
                floatingLabelText="Username or Email"
                fullWidth={true}
                required={true}
                onChange={this.onChange}
              />
            </div>
            <div>
              <TextField
                name="pass"
                floatingLabelText="Password"
                fullWidth={true}
                required={true}
                type="password"
                onChange={this.onChange}
              />
            </div>
            <div className="pt20">
              <RaisedButton
              label="Log In"
              primary={true}
              fullWidth={true}
              onClick={this.signIn}
            />
            </div>

        </div>
      </div>
    </div>
    );
  }
}

export default Login;
