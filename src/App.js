import { useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoListWrapper from './components/TodoListWrapper';
import { useDispatch } from 'react-redux';
import { addTodosFromLocalStorage } from './store/slices/todoSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('todos') !== null) {
      dispatch(addTodosFromLocalStorage())
    }
  }, [dispatch]);

  return (
    <div className="App">
      <TodoForm />
      <TodoListWrapper />
    </div>
  );
}

export default App;
