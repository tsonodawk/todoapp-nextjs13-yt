'use client'

import React, { use, useState } from 'react'
import { addTodo } from '../api'
import { v4 as uuidv4 } from 'uuid'

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await addTodo({
      id: uuidv4(),
      text: taskTitle,
    })

    setTaskTitle('')
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none"
        onChange={(e) => setTaskTitle(e.target.value)}
        value={taskTitle}
      />
      <button
        type="submit"
        className="px-4 py-2 mt-2 text-white bg-indigo-500 rounded hover:bg-indigo-400"
      >
        Add Task
      </button>
    </form>
  )
}

export default AddTask
