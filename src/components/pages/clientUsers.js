import React, {Component} from 'react';
import imageUrl from '../../img/banner.jpg';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


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
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const selectItemStyle = {
      'whiteSpace': 'preWrap'
    }
    return (
      <div>
        <h3>Clients</h3>
        <br />
        <form className="readmin-form">
          <div className="row">
            <div className="col-sm-12 offset-md-2 col-md-7">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <label>Company Name</label>
                </div>
                <div className="col-md-8">
                  <TextField
                    id="company"
                    fullWidth={true}
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
                    id="name"
                    fullWidth={true}
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
                    id="last_name"
                    fullWidth={true}
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
                    id="phone"
                    fullWidth={true}
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
                    id="add_email"
                    type="email"
                    fullWidth={true}
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
                    id="password"
                    type="password"
                    fullWidth={true}
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
                  <RadioButtonGroup name="shipSpeed" labelPosition="right" defaultSelected="not_light">
                    <RadioButton
                      value="not_light"
                      label="Active"
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value="light"
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
                  <label>API SECRET</label>
                </div>
                <div className="col-md-8">
                  <TextField
                    id="api_secret"
                    fullWidth={true}
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
                    id="numbers_did"
                    fullWidth={true}
                  />
                </div>
                <div className="col-md-1">
                  <FloatingActionButton mini={true} style={style}>
                    <ContentAdd />
                  </FloatingActionButton>
                </div>
              </div>
            </div>
            <div className="col-sm-12 offset-md-2 col-md-7 pt20">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                  <RaisedButton primary={true} fullWidth={true} label="Save" />
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
