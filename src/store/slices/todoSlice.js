import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodoSlice: (state, action) => {
      state.todos.push({
        id: Date.now(),
        name: action.payload,
        isCompleted: false,
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodoSlice: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    editTodoStatus: (state, action) => {
      const el = state.todos.find((el) => el.id === action.payload);
      el.isCompleted = !el.isCompleted;
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    editTodoText: (state, action) => {
      const el = state.todos.find((el) => el.id === action.payload.id);
      el.name = action.payload.text;
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    addTodosFromLocalStorage: (state) => {
      const todos = JSON.parse(localStorage.getItem('todos'));
      state.todos = todos;
    }
  }
})

export const { addTodoSlice, removeTodoSlice, editTodoStatus, editTodoText, addTodosFromLocalStorage } = todoSlice.actions

export default todoSlice.reducer;
