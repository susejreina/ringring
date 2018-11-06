import React from 'react';
import Panel from '../components/panel.js';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import ReportsSMS from '../components/tables/reportSMS.js';

const ReportSms = () => (
  <div>
  <h3>SMS REPORT</h3>
    <Panel title="Lists messages">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-3">
          Date range:
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <DatePicker id="date_since" hintText="Since" container="inline" />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <DatePicker id="date_to" hintText="To" container="inline" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3">
          <FlatButton label="Search" />
        </div>
      </div>
      <br />
      <ReportsSMS striped={true}/>
    </Panel>
  </div>

);

export default ReportSms;
