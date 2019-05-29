import React from 'react';

class Task extends React.Component {    
    render() {
      return (
        <div className="task-card">
          <div className="task-info">
            <h3>{this.props.taskInfo.task}</h3>
            <p>
              <strong>id:</strong> {this.props.taskInfo.id}
            </p>
            <p>
              <strong>completed:</strong> {this.props.taskInfo.completed.toString()}
            </p>
            <button id='btnComplete' onClick = {this.setCompleted}>Completed</button>
          </div>
        </div>
      );
    }
    setCompleted = event => {
        
    }
  }
  
  export default Task;