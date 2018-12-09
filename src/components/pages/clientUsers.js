import React, {Component} from 'react';
import imageUrl from '../../img/banner.jpg';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { PostData } from '../../services/PostData';
// import Dids from './Dids';

const style = {
  backgroundImage: 'url('+ imageUrl + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}

const styles = {
  radioButton: {
    marginBottom: 16,
  },
};
class ClientUsers extends Component {
  constructor() {
    super();
    // this.displayData = [];

    this.state = {
      name: '',
      contactname: '',
      contactlastname: '',
      contactphone: '',
      email: '',
      pass: '',
      status: '',
      secret: '',
      key: '',
      did: '',
      showdata : this.displayData,
      displayData: []
    }

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.appendData = this.appendData.bind(this);
  }

  onChange(e) {
    //console.log(e.target.name+':'+e.target.value);
    this.setState({[e.target.name]: e.target.value})
  }

  appendData() {
     this.displayData.push(<tr><td>{this.state.did}</td></tr>);
     this.setState({
        showdata : this.displayData,
        did : '',
     });
  }

  handleSubmit(event) {
    // console.log(this.state);
    event.preventDefault();

    PostData('client', this.state).then((result) => {
      let responseJson = result;

      if(responseJson.rows){
        //console.log(responseJson.rows);
        //sessionStorage.setItem('rows', responseJson);
        //this.setState({redirect: true})
      }
      else{
        console.log('Login error');
      }
    });
  }

  render() {
    return (
      <div>
        <h3>Client</h3>
        <br />
        <form className="readmin-form" name="clientForm" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-12 offset-md-2 col-md-7">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <label>Company Name</label>
                </div>
                <div className="col-md-8">
                  <TextField
                    id="name"
                    name="name"
                    required={true}
                    fullWidth={true}
                    autoComplete='off'
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 offset-md-2 col-md-7">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <label>Contact Name</label>
                </div>
                <div className="col-md-8">
                  <TextField
                    id="contactname"
                    name="contactname"
                    required={true}
                    fullWidth={true}
                    autoComplete='off'
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 offset-md-2 col-md-7">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <label>Contact Last Name</label>
                </div>
                <div className="col-md-8">
                  <TextField
                    id="contactlastname"
                    name="contactlastname"
                    required={true}
                    fullWidth={true}
                    autoComplete='off'
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 offset-md-2 col-md-7">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <label>Contact Phone</label>
                </div>
                <div className="col-md-8">
                  <TextField
                    id="contactphone"
                    name="contactphone"
                    required={true}
                    fullWidth={true}
                    autoComplete='off'
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 offset-md-2 col-md-7">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <label>Email</label>
                </div>
                <div className="col-md-8">
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    required={true}
                    fullWidth={true}
                    autoComplete='off'
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 offset-md-2 col-md-7">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <label>Password</label>
                </div>
                <div className="col-md-8">
                  <TextField
                    id="pass"
                    name="pass"
                    type="pass"
                    required={true}
                    fullWidth={true}
                    autoComplete='off'
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 offset-md-2 col-md-7">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <label>Status</label>
                </div>
                <div className="col-md-8">
                  <RadioButtonGroup style={{ display: 'flex' }} name="status" id="status"
                   labelPosition="right" defaultSelected="true" onChange={this.onChange}>
                    <RadioButton
                      value="true"
                      label="Active"
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value="false"
                      label="Inactive"
                      style={styles.radioButton}
                    />
                  </RadioButtonGroup>
                </div>
              </div>
            </div>
            <div className="col-sm-12 offset-md-2 col-md-7">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <label>API secret</label>
                </div>
                <div className="col-md-8">
                  <TextField
                    id="secret"
                    name="secret"
                    required={true}
                    fullWidth={true}
                    autoComplete='off'
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 offset-md-2 col-md-7">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <label>API Key</label>
                </div>
                <div className="col-md-8">
                  <TextField
                    id="key"
                    name="key"
                    required={true}
                    fullWidth={true}
                    autoComplete='off'
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 offset-md-2 col-md-7">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <label>DID</label>
                </div>
                <div className="col-md-8">
                  <TextField
                    id="did"
                    name="did"
                    fullWidth={true}
                    autoComplete='off'
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-md-1">
                  <FloatingActionButton mini={true} style={style} onClick={this.appendData}>
                    <ContentAdd />
                  </FloatingActionButton>
                </div>
                <div>
                  <table id="DIDlist" width="100px" align="center" border="1">
                    <tbody>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-sm-12 offset-md-2 col-md-7 pt20">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                  <RaisedButton primary={true} type="submit" fullWidth={true} label="Save" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ClientUsers;
