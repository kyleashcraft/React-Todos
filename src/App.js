import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { desc: 'Walk the cat', isCompleted: true },
        { desc: 'Throw the dishes away', isCompleted: false },
        { desc: 'Buy new dishes', isCompleted: false}
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.desc} isCompleted={ todo.isCompleted } />
          )}
        </ul>
      </div>
    );
  }
}

export default App;
