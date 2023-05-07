import React from "react";
import styles from "./App.module.css";
import { TodoList } from "./components/screens/TodoList/TodoList";

const App = () => {
  return (
    <div className="wrapper">
    <div className="container">
      <h1 className="title">Todolist</h1>
      <TodoList />
      </div>
    </div>
  );
};

export default App;
