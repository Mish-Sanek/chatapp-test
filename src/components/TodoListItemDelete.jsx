import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodoSlice } from '../store/slices/todoSlice';

const TodoListItemDelete = ({ id }) => {

  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeTodoSlice(id))
  }
  return (
    <button className='todo-list__item-delete'
      type='button'
      onClick={deleteItem}
    >
      <svg width="30px" height="30px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
        <g id="SVGRepo_iconCarrier">
          <path d="M960 160h-291.2a160 160 0 0 0-313.6 0H64a32 32 0 0 0 0 64h896a32 32 0 0 0 0-64zM512 96a96 96 0 0 1 90.24 64h-180.48A96 96 0 0 1 512 96zM844.16 290.56a32 32 0 0 0-34.88 6.72A32 32 0 0 0 800 320a32 32 0 1 0 64 0 33.6 33.6 0 0 0-9.28-22.72 32 32 0 0 0-10.56-6.72zM832 416a32 32 0 0 0-32 32v96a32 32 0 0 0 64 0v-96a32 32 0 0 0-32-32zM832 640a32 32 0 0 0-32 32v224a32 32 0 0 1-32 32H256a32 32 0 0 1-32-32V320a32 32 0 0 0-64 0v576a96 96 0 0 0 96 96h512a96 96 0 0 0 96-96v-224a32 32 0 0 0-32-32z" fill="#231815" strokeWidth='2px'></path>
          <path d="M384 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM544 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM704 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0z" fill="#231815" strokeWidth='2px'></path>
        </g>
      </svg>
    </button>
  )
}

export default TodoListItemDelete;