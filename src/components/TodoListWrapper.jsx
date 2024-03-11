import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import { useSelector } from 'react-redux';
import TodoEmpty from './TodoEmpty';

const TodoListWrapper = () => {

  const todos = useSelector((state) => state.todos.todos);
  const [activeFilter, setActiveFilter] = useState('all');
  const [list, setList] = useState(todos);

  useEffect(() => {
    if (activeFilter === 'all') {
      setList(todos);
    } if (activeFilter === 'completed') {
      setList(todos.filter((item) => item.isCompleted === true))
    } else if (activeFilter === 'uncompleted') {
      setList(todos.filter((item) => item.isCompleted === false))
    }

  }, [todos, activeFilter]);

  if (!todos.length) {
    return <TodoEmpty />
  }

  return (
    <div className='todo-list-wrapper'>
      <TodoFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <TodoList list={list} />
    </div>
  )
}

export default TodoListWrapper;
