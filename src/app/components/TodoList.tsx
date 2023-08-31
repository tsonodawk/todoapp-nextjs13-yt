import React from 'react'
import { Task } from '../types'
import Todo from './Todo'

type TodoListProps = { todos: Task[] }

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="mt-6">
      {todos.map((todo: Task) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
