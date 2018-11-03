import React from 'react';
import Panel from '../components/panel.js';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import ReportsSMS from '../components/tables/reportSMS.js';

const ReportSms = () => (
  <div>
  <h3>SMS REPORT</h3>
    <Panel title="Lists messages">
      <div>
        Date range: <DatePicker id="date_since" hintText="Since" container="inline" /> <DatePicker id="date_to" hintText="To" container="inline" /> <FlatButton label="Search" />

      </div>
      <br />
      <ReportsSMS striped={true}/>
    </Panel>
  </div>

);

export default ReportSms;
