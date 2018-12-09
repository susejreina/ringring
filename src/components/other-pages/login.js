import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { PostData } from '../../services/PostData';

import '../../static/css/App.css';
import '../../static/css/vendor-styles.css';

import "react-table/react-table.css";

import HomePage from '../../pages/home.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pass: '',
      redirect: false
    };

    this.signIn = this.signIn.bind(this);
    this.onChange = this.onChange.bind(this);
  }
   signIn() {
    if(this.state.email && this.state.pass) {
      PostData('login', this.state).then((result) => {
        let responseJson = result;

        if(responseJson.user){
          sessionStorage.setItem('user', responseJson);
          this.setState({redirect: true})
        }
        else{
          console.log('Login error');
        }
      });
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    if(this.state.redirect){
      return (<HomePage />)
    }

    if(sessionStorage.getItem('user')){
      return (<HomePage />)
    }

    return (
    <div>
      <div className="login-wrapper">
        <div className="login-fields">
          <h3>Login</h3>

            <div>
              <TextField
                name="email"
                id="email"
                floatingLabelText="Username or Email"
                fullWidth={true}
                required={true}
                onChange={this.onChange}
              />
            </div>
            <div>
              <TextField
                name="pass"
                id="pass"
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
