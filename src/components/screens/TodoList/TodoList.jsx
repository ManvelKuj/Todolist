import React, { useState, useEffect } from "react";
import { AddTodo } from "./AddTodo/AddTodo";
import styles from "./TodoList.module.css";
import { TodoItems } from "./TodoItems/TodoItems";

export const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  function addTask(e) {
    e.preventDefault();
    if (!task) {
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      task: task,
    };
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    setTask("");
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task && task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
  function editTask(id) {
    const updatedTasks = tasks.filter((task) => task && task.id !== id);
  }
  return (
    <div className={styles.todo}>
      <AddTodo addTask={addTask} task={task} setTask={setTask} />
      <TodoItems editTask={editTask} deleteTask={deleteTask} tasks={tasks} />
    </div>
  );
};
