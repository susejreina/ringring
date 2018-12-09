import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


/* const style = {
  backgroundImage: 'url('+ imageUrl + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
} */
const styles = {
  radioButton: {
    marginBottom: 16,
  },
};

const acceptedFileTypes = 'image/png';

class SendSms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipSpeed: 'S'
    }
  }
  /* state = {
    value: 1,
  }; */

  // handleChange = (event, index, value) => this.setState({value});

  handleClickRadio = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  /* handleFileSelect = event => {
    console.log(event);
    if(event.target.files && event.target.files.length > 0) {

    }
  } */

  render() {
    const selectItemStyle = {
      'whiteSpace': 'preWrap'
    }

    return (
      <div>
        <h3>Send SMS</h3>
        <div className="row">
          <div className="col-md-7 contact-form offset-md-2 col-md-7">
            <h4 className="inner-box-title full">Send A Message</h4>
            <form>
              <div className="form-group">
                <SelectField
                  floatingLabelText="Client List"
                  value={this.state.value}
                  onChange={this.handleChange}
                  menuItemStyle={selectItemStyle}
                >
                  <MenuItem value={1} primaryText="CLiente 1" />
                  <MenuItem value={2} primaryText="Cliente 2" />
                </SelectField>
              </div>
              <div className="form-group">
                <RadioButtonGroup style={{ display: 'flex' }} name="shipSpeed" labelPosition="right" defaultSelected="S">
                  <RadioButton
                    value="S"
                    label="Simple"
                    style={styles.radioButton}
                    onClick={this.handleClickRadio}
                  />
                  <RadioButton
                    value="B"
                    label="Bulk"
                    style={styles.radioButton}
                    onClick={this.handleClickRadio}
                  />
                </RadioButtonGroup>
              </div>
              <div className="form-group">
                <SelectField
                  floatingLabelText="DID"
                  value={this.state.value}
                  onChange={this.handleChange}
                  menuItemStyle={selectItemStyle}
                >
                  <MenuItem value={1} primaryText="98984980808080" />
                  <MenuItem value={2} primaryText="983409894308040" />
                </SelectField>
              </div>
              {
                this.state.shipSpeed === 'S' ?
                <div className="form-group">
                  <TextField
                    id="phone_number"
                    hintText="Phone number"
                  />
                </div>
                :
                <div className="form-group">
                  <TextField
                    id="browser"
                    hintText="Search"
                    type="file"
                    accept={acceptedFileTypes}
                    multiple={false}
                    onChange={this.handleFileSelect}
                  />
                </div>
              }

              <div className="form-group">
                <TextField
                  id="message"
                  hintText="Message"
                  multiLine={true}
                  rows={2}
                  rowsMax={4}
                />
              </div>

              <RaisedButton label="Send" primary={true} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SendSms;
