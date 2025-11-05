import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: 'all',
  isAddingTodo: false
}
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers:{
    setIsAddingTodo: (state, action) => {
      state.isAddingTodo = action.payload
    },
    addTodo: (state, action) => {
      const  newTodo = {
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      state.items.unshift(newTodo)
      state.isAddingTodo = false
    },
    setFilter:(state, action) => {
      state.filter = action.payload
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload)
      if(todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo:(state, action)=> {
      state.items = state.items.filter(todo => todo.id !== action.payload)
    },
    updateTodo:(state, action) => {
      const {id, update} = action.payload
      const todo = state.items.find(todo => todo.id === id)
      if(todo) {
        Object.assign(todo, update , {
          updatedAt: new Date().toISOString()
        })
      }
    },
    markAllComplete:(state,action) => {
      const hasComplete = state.items.some(todo => !todo.completed )
      state.items.forEach(todo => {
        todo.completed = hasComplete
      })
    },
    clearComplete : (state, action) => {
      state.items = state.items.filter(todo => !todo.completed)
    }
  }
})

export const {setIsAddingTodo, addTodo, setFilter, toggleTodo, deleteTodo, updateTodo, markAllComplete ,clearComplete} = todoSlice.actions
export default todoSlice.reducer
