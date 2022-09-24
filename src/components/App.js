import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [Tasks, setTasks] = useState(TASKS);

  function handleDeleteButton(deleteButtonEvent, taskText) {
    deleteButtonEvent.preventDefault();
    let newTaskListDeletedElement = Tasks.filter((task) => task.text !== taskText);
    setTasks(newTaskListDeletedElement);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES} />
      <NewTaskForm />
      <TaskList
        Tasks={Tasks}
        setTasks={setTasks}
        handleDeleteButton={handleDeleteButton} />
    </div>
  );
}

export default App;
