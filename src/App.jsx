import React, { useEffect, useState } from 'react'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import Progresstracker from './Components/Progresstracker'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=> {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  });

  const addTask = (task) =>{
    setTasks([...tasks, task]);
  }

  const updateTask =(updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  
  const deleteTask =() => {
    
  }

  return (
    <div>
      <header>
        <h1>Taskman</h1>
        <p><b>Your friendly Task Manager</b></p>
      </header>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}/>
      <Progresstracker />
      <button>Clear Tasks</button>
    </div>
  )
}
