import React from 'react'
import TodoItem from './TodoItem';
import TodoEmpty from './TodoEmpty';

const TodoList = ({ list }) => {

  if (!list.length) {
    return <TodoEmpty />
  }

  return (
    <ul className='todo-list'>
      {
        list.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      }
    </ul>
  )
}

export default TodoList;
