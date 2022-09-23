import React from "react";

function Task({task, id, handleDeleteButton}) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text} </div>
      <button className="delete" onClick={(event) => {handleDeleteButton(event, task.text)}} >X</button>
    </div>
  );
}

export default Task;
