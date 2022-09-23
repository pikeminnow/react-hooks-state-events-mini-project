import React from "react";
import Task from "./Task";

function TaskList({Tasks, setTasks, handleDeleteButton}) {

function displayTasks (tasks) {
  let newTaskList = tasks.map((task, index)=> {
    return <Task 
    task = {task}
    key = {task.text}
    handleDeleteButton = {handleDeleteButton}
     />;
  })
  return newTaskList;
}


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTasks(Tasks)}
    </div>
  );
}

export default TaskList;
