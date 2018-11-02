import React, {Component} from 'react';
import classNames from 'classnames';

class ReportsSMS extends Component {
  render() {
    const tableClass = classNames({
      'table': true,
      'table-striped': this.props.striped,
      //'table-bordered': this.props.bordered,
      //'table-hover': this.props.hover,
      //'table-condensed': this.props.condensed
    });
    return (
      <table className={tableClass}>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Recipient Number</th>
            <th>Status</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ReportsSMS;
