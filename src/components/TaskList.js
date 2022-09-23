import React from "react";
import Task from "./Task";

function TaskList({TASKS}) {

function displayTasks (tasks) {
  let newTaskList = tasks.map((task)=> {
    return <Task 
    task = {task}
    key = {task.text}
     />;
    // return (<p key={index}> <span> {task.text} </span> <span> {task.category}</span></p>)
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
