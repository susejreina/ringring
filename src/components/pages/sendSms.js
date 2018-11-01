import React, {Component} from 'react';
import imageUrl from '../../img/banner.jpg';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  backgroundImage: 'url('+ imageUrl + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}

class SendSms extends Component {
  render() {
    return (
      <div>
        <h3>Send SMS</h3>
        <div className="row">
          <div className="col-md-12 contact-form">
            <h4 className="inner-box-title full">Send Us Message</h4>
            <div>
              <TextField
                id="name"
                hintText="Name"
                fullWidth={true}
              />
            </div>
            <div>
              <TextField
                id="email"
                hintText="Email"
                type="email"
                fullWidth={true}
              />
            </div>
            <div>
              <TextField id="message" multiLine={true} fullWidth={true} />
            </div>

            <RaisedButton label="Send" primary={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default SendSms;
