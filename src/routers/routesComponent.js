import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import HomePage from '../pages/home.js';
import ReportSms from '../pages/reportSMS.js';
import UserTables from '../pages/userTables.js';
import Sendmsg from '../pages/sendmsg.js';
import MasterUser from '../pages/masterUser.js';
import ClientUser from '../pages/clientUser.js';
import OperatorsUser from '../pages/operatorUser.js';
import LoginPage from '../pages/login.js';
import Page404 from '../pages/page404.js';

class RoutesComponent extends Component {
  render() {
    return (
      <div>
        <Route exact path="/other-pages/home" component={HomePage}/>
        <Route path="/table/report-sms" component={ReportSms}/>
        <Route path="/table/user-tables" component={UserTables}/>
        <Route path="/pages/sendmsg" component={Sendmsg}/>
        <Route path="/pages/masterUser" component={MasterUser}/>
        <Route path="/pages/client" component={ClientUser}/>
        <Route path="/pages/operators" component={OperatorsUser}/>
        <Route path="/other-pages/login" component={LoginPage}/>
        <Route path="/other-pages/404" component={Page404}/>
      </div>
    );
  }
}

export default RoutesComponent;
