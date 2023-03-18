import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  counter = 5;
  state = {
    tasks: [
      {
        id: 0,
        text: '',
        date: '',
        important: false,
        active: false,
        dateFinish: null,
      },
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

  addTask = (text, date, important) => {
    // console.log('add task')
    const task = {
      id: this.counter,
      text, // text input
      important,
      date, // date input
      active: true,
      dateFinish: null,
    }
    this.counter++;
    console.log(task, this.counter);
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task] //we create a new array that we assign to tasks
    }))
    return true
  }

  render() { 
    return (
      <div className="App">
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus} />
      </div>
    );
  }
}
 
export default App;
