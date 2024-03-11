import React from 'react'

const TodoListItemEditConfirm = ({ changeEditMode, dispatchEditedText }) => {

  const submitShanges = () => {
    changeEditMode();
    dispatchEditedText();
  }

  return (
    <button className='todo-list__item-edit-confirm' onClick={submitShanges}>
      <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" id="file-done-2-1" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_iconCarrier">
          <path id="primary" d="M12,21h7a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1H10L6,7v8" style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1.5' }}></path>
          <polyline id="primary-2" points="4 19 6 21 10 17" style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1.5' }}></polyline>
        </g>
      </svg>
    </button>
  )
}

export default TodoListItemEditConfirm;
