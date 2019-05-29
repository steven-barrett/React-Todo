import React from 'react';

import { data } from './components/data';
import Task from './components/TodoComponents/Task';

import './Task.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskData: data,
      task: '',
      id: 0,
      completed: false
    }
  }

  addTask = e => {
    e.preventDefault();
    if (this.state.task === '') {
      return;
    }
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      taskData: [...this.state.taskData, newTask],
      task: '',
      id: 0,
      completed: false
    });
  }

  handleChanges = event => {    
    this.setState({      
      [event.target.name]: event.target.value,
      id: Date.now,
      completed: 'false'      
    });
  };
  setCompletedState = event => {
    console.log(event);
  }
  render() {
    return (
      <div className='task-list' onClick = {this.setCompletedState}>
        <h1>ToDo:</h1>
        {this.state.taskData.map(task => (
          <Task taskInfo={task} />
        ))}
                   
      <form onSubmit={this.addTask}>
      <input
          placeholder="Task"
          onChange={this.handleChanges}
          value={this.state.task}
          name="task"
        />
        {/* <input
          placeholder="Enter id to complete the task"
          onChange={this.handleChanges}
          value={this.state.task}
          name="completed"
        />
          <button>Complete Task</button> */}
          <button>Clear Completed</button>
      </form>
      </div>
    );
  }
}

export default App;
