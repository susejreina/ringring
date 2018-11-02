import React, {Component} from 'react';
import imageUrl from '../../img/banner.jpg';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


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
class SendSms extends Component {
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
        <h3>Send SMS</h3>
        <div className="row">
          <div className="col-md-12 contact-form">
            <h4 className="inner-box-title full">Send A Message</h4>
            <div>
            <RadioButtonGroup name="shipSpeed" labelPosition="right" defaultSelected="not_light">
            <RadioButton
              value="not_light"
              label="Simple"
              style={styles.radioButton}
            />
            <RadioButton
              value="light"
              label="Bulk"
              style={styles.radioButton}
            />
            </RadioButtonGroup>
            </div>
            <div>
            <SelectField
              floatingLabelText="APIDaze Number"
              value={this.state.value}
              onChange={this.handleChange}
              menuItemStyle={selectItemStyle}
            >
              <MenuItem value={1} primaryText="98984980808080" />
              <MenuItem value={2} primaryText="983409894308040" />
            </SelectField>
            </div>
            <div>
              <TextField
                id="message"
                hintText="Message"
                multiLine={true}
                rows={2}
                rowsMax={4}
              />
            </div>

            <RaisedButton label="Send" primary={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default SendSms;
