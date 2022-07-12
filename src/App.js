import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import style from './main.module.css'


function App() {
  return (
      <div className={style.container}>
        <h1>📝To-do List!</h1>
        <TodoForm />
        <TodoList />
        <ToastContainer position="bottom-center" theme="colored" autoClose={3000} limit="3" />
      </div>
  );
}

export default App;
