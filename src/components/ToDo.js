import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
      <input type="checkbox" checked={ this.props.isCompleted } />
        { this.props.description }
      </li>
    );
  }
}

export default ToDo;
