import React from 'react';
import Panel from '../components/panel.js';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TableMasters from '../components/tables/tableMasters.js';

const TableMaster = () => (
  <div>
    <h3>Operators list</h3>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-3 offset-md-8">
        <RaisedButton primary={true} fullWidth={true} label="New operator" />
      </div>
    </div>
    <br />
    <TableMasters striped={true}/>
  </div>

);

export default TableMaster;
