import React from "react";

import Task from './Task';

const TaskList = props => {
  return (
    <div className="task-list">
      {props.taskItems.map(item => {
        return (
          <Task
            key={item.id}
            toggleItem={props.toggleItem}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
