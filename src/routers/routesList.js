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
            <Link to="/"><span className="material-icons">apidazze</span>Apidaze</Link>
          </li>

          <li className="divider"></li>

          <li>
            <Link to="/pages/sendmsg"><span className="material-icons">border_color</span>Send SMS</Link>
          </li>
          <li>
            <Link to="/table/report-sms"><span className="material-icons">folder</span>SMS Report</Link>
          </li>
          <li>
            <Link to="/other-pages/login"><span className="material-icons">equalizer</span>User Administrador</Link>
          </li>

        </ul>
      </div>

    );
  }
}

export default RoutesList;
