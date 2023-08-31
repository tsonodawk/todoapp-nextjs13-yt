'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Task } from '../types'
import { isElement } from 'react-dom/test-utils'
import { deleteTodo, editTodo } from '../api'

type TodoProps = { todo: Task }

const Task = ({ todo }: TodoProps) => {
  const ref = useRef<HTMLInputElement>(null)

  const [isEdit, setIsEdit] = useState(false)
  const [taskTitle, setTaskTitle] = useState(todo.text)

  useEffect(() => {
    if (isEdit) {
      ref.current?.focus()
    }
  }, [isEdit])

  const handleEdit = async () => {
    setIsEdit(true)
  }

  const handleSave = async () => {
    await editTodo(todo.id, taskTitle)
    setIsEdit(false)
  }

  // Delete時の処理
  const handleDelete = async () => {
    await deleteTodo(todo.id)
  }

  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 mt-4"
    >
      {isEdit ? (
        <input
          ref={ref}
          type="text"
          placeholder="Add a task"
          className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none"
          onChange={(e) => setTaskTitle(e.target.value)}
          value={taskTitle}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {isEdit ? (
          <button
            className="px-2 py-1 mr-1 text-white bg-green-500 rounded hover:bg-green-400"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="px-2 py-1 mr-1 text-white bg-indigo-500 rounded hover:bg-indigo-400"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}
        <button
          className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-400"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default Task
