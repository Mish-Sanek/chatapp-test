import React from 'react'
import TodoListItemEdit from './TodoListItemEdit';
import TodoListItemEditConfirm from './TodoListItemEditConfirm';

const TodoListItemEditWrapper = ({ id, isEdit, setIsEdit, dispatchEditedText }) => {

  const changeEditMode = () => setIsEdit(!isEdit);

  return (
    <div className='todo-list__item-edit'>
      {
        isEdit === false ?
          <TodoListItemEdit id={id} changeEditMode={changeEditMode} />
          :
          <TodoListItemEditConfirm dispatchEditedText={dispatchEditedText} changeEditMode={changeEditMode} />

      }
    </div>
  )
}

export default TodoListItemEditWrapper;
