import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { PostData } from '../../services/PostData';
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
      mode: 'no-cors',
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            email: "hugh.daniel@gmail.com",
            name: "Hugh Daniel",
            password: "1234"
        })
    }).
    then((Response)=>Response.json()).
    then((findresponse)=>{
      console.log(findresponse);
    })
    /*fetch('http://localhost:3001/api/users')
     .then(results => {
       return results.json();
     })
     .then((data) => {
        this.setState({name: name});
        console.log("state", this.state.name);
      });*/

    /* fetch('http://localhost:3001/api/users',{
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => {return response.json()})
    .then(data => this.setState({ data }))
    .catch(function(error) {
        console.log(error);
    }); */
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
