import React, { useEffect, useRef } from 'react'

const TodoItemText = ({ text, setText, isEdit }) => {

  const inputRef = useRef();

  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [isEdit]);

  return (
    <input type='text' ref={inputRef} className='todo-list__item-name' disabled={isEdit === false} onInput={(e) => setText(e.target.value)} value={text} />
  )
}

export default TodoItemText;
