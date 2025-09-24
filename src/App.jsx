import React from 'react'
import {TodoApp} from './components/todoApp.jsx';
import {Provider} from "react-redux";
import {store} from "./Store/store.js";

export const App = () => {
  return (
    <div>
      <Provider store={store}>

      <TodoApp />
      </Provider>
    </div>
  )
}
