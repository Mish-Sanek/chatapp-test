import React, { useState } from 'react'
import TodoListItemDelete from './TodoListItemDelete';
import TodoItemStatus from './TodoItemStatus';
import TodoItemText from './TodoItemText';
import TodoListItemEditWrapper from './TodoListItemEditWrapper';
import { useDispatch } from 'react-redux';
import { editTodoText } from '../store/slices/todoSlice';

const TodoItem = ({ todo }) => {
  const { id, name } = todo;

  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(name);

  const dispatch = useDispatch();

  const dispatchEditedText = () => {
    dispatch(editTodoText({ id, text }))
  }

  return (
    <li className='todo-list__item'>
      <TodoItemStatus todo={todo} />
      <TodoItemText text={text} setText={setText} isEdit={isEdit} />
      <TodoListItemEditWrapper id={id} isEdit={isEdit} setIsEdit={setIsEdit} dispatchEditedText={dispatchEditedText} />
      <TodoListItemDelete id={id} />
    </li>
  )
}

export default TodoItem
