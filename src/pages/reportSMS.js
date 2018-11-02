import React from 'react';
import Panel from '../components/panel.js';
import ReportsSMS from '../components/tables/reportSMS.js';

const ReportSms = () => (
  <div>
    <Panel title="Report SMS">
      <ReportsSMS striped={true}/>
    </Panel>
  </div>

);

export default ReportSms;
