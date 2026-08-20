import { useState } from 'react'
import TaskInput from './component/Taskinput.jsx'
import TaskList from './component/TaskList.jsx'

import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(taskText) {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  function toggleTask(id) {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div>
      <h1>Tast 3</h1>
      <p>Number of tasks: {tasks.length}</p>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  )
}
export default App