import React from "react";

const Task = props => {
  return (
    <div
      className={`task-card${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Task;


  // <div className="task-card">
  // <div className="task-info">
