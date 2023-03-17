import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: 'Zagrać w heros IV',
        date: '2018-01-05',
        important: true,
        active: true,
        dateFinish: null,
      },
      { id: 1, text: 'umyć auto', date: '2023-03-24', important: false, active: true, dateFinish: null, },
      { id: 2, text: 'umyć okna', date: '2023-03-25', important: false, active: true, dateFinish: null, },
      {id: 3, text: 'zrobić zakupy', date: '2023-03-25', important: true, active: true, dateFinish: null,},
    ]
  } 
  
  deleteTask = (id) => {
    console.log("delete w stanie elementu o id " + id);
    console.log(id)
    let tasks = [...this.state.tasks]; //copy array of tasks
    const index = tasks.findIndex(task => task.id === id); // look index of task ||
    // tasks = tasks.filter(task => task.id !== id)
    tasks.splice(index, 1); // removing one element from the array
    this.setState({ tasks }); 
  }

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.dateFinish = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  render() { 
    return (
      <div className="App">
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus} />
      </div>
    );
  }
}
 
export default App;
