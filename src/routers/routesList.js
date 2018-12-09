import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class RoutesList extends Component {

  componentDidMount() {
    $('.sidebar-nav ul .has-child .child-menu').hide();
    $('.sidebar-nav ul .has-child > a').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next('.child-menu').slideToggle(300);
    });
  }

  render() {
    return (
      <div className="sidebar-nav">
        <ul>
          <li>
            <Link to="/"><span className="material-icons">apidaze</span>Apidaze</Link>
          </li>

          <li className="divider"></li>

          <li>
            <Link to="/pages/sendmsg"><span className="material-icons">border_color</span>Send SMS</Link>
          </li>
          <li>
            <Link to="/table/report-sms"><span className="material-icons">folder</span>SMS Report</Link>
          </li>
          <li className="has-child">
            <a href=""><span className="material-icons">equalizer</span>User Administrador</a>
            <ul className="child-menu">
              <li><Link to="/table/masterUser">Master User</Link></li>
              <li><Link to="/pages/client">Clients</Link></li>
              <li><Link to="/pages/operators">Operators</Link></li>


            </ul>
          </li>
        </ul>
      </div>

    );
  }
}

/*  <li><Link to="/pages/masterUser">Master User</Link></li>
<li><Link to="/pages/client">Clients</Link></li>
<li><Link to="/pages/operators">Operators</Link></li>  */

export default RoutesList;
