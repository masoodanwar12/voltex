import { useState } from 'react'

function TaskInput({ onAddTask }) {
  const [text, setText] = useState('')

  function handleClick() {
    if (text.trim() === '') return
    onAddTask(text)
    setText('')
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  )
}

export default TaskInput