import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";
import styles from "./TodoItems.module.css";

export const TodoItems = (props) => {
  const { tasks, deleteTask, editTask } = props;

  return (
    <ul className={styles.list}>
      {tasks.length ? (
        tasks.map((task, id) => (
          <TodoItem
            key={id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      ) : (
        <p>Задач нет.</p>
      )}
    </ul>
  );
};
