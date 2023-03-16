import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className="App">
        <AddTask />
        <TaskList />
      </div>
    );
  }
}
 
export default App;
