import React from 'react';

import { data } from './components/data';
import Task from './components/TodoComponents/Task';
import TaskList from './components/TodoComponents/TodoList';
import ItemForm from './components/TodoComponents/TodoForm';

import './Task.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskData: data
    };
  }
  toggleItem = id => {
    // loop through this.state.taskData
    // find the item I clicked on
    // toggle the purchased property
    this.setState(prevState => {
      return {
        taskData: prevState.taskData.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    });
  };

  addItem = itemName => {
    // add an item from the form to our list
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState(prevState => {
      return {
        taskData: [...prevState.taskData, newItem]
      };
    });
  };
  removeCompleted = () => {  
    this.setState(prevState => {
      return {
        taskData: [...prevState.taskData].filter(item => !item.completed)
    };
    });  
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <TaskList
          taskItems={this.state.taskData}
          toggleItem={this.toggleItem}
        />
        <ItemForm removeCompleted={this.removeCompleted} addItem={this.addItem}  />
      </div>
    );
  }
}

export default App;

{/* <div className='task-list'> */}

