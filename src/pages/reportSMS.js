import React from 'react';
import Panel from '../components/panel.js';
import ReportsSMS from '../components/tables/reportSMS.js';

const ReportSms = () => (
  <div>
  <h3>SMS REPORT</h3>
    <Panel title="Lists messages">
      <ReportsSMS striped={true}/>
    </Panel>
  </div>

);

export default ReportSms;
