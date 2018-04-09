import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
      <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        { this.props.description } <button onClick={ this.props.deleteTodo } >Delete</button>
      </li>
    );
  }
}

export default ToDo;
