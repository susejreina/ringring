import React, { Component } from 'react'

export default class Dids extends Component {
  render() {
    return (
      <div>
        id = {this.props.id}
        {this.props.body}
      </div>
    )
  }
}
