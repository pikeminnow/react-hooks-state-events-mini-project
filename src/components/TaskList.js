import React from "react";

function TaskList({TASKS}) {

function displayTasks (tasks) {
  let newTaskList = tasks.map((task, index)=> {
    return (<p key={index}> <span> {task.text} </span> <span> {task.category}</span></p>)
  })
  return newTaskList;
}


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTasks(TASKS)}
    </div>
  );
}

export default TaskList;
