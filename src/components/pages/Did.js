import React, { Component } from 'react'

export default class Dids extends Component {
  render() {
    return (
      <tr>
          <td>
            id = {this.props.id}
            {this.props.body}
            <button onClick={this.props.delete}>Delete</button>
          </td>
        </tr>
    )
  }
}
