import React, { useState, useEffect } from "react";
import styles from "./TodoItem.module.css";

export const TodoItem = (props) => {
  const { task, deleteTask, editTask } = props;
  function handleDelete() {
    deleteTask(task.id);
  }
  function handleEdit() {
    editTask(task.task);
  }
  return (
    <li className={styles.item}>
      <div className={styles.itemLeft}>
        <input type="checkbox" />
        <label className={styles.task}>{task.task}</label>
      </div>
      <div className={styles.itemRight}>
        <button onClick={handleEdit} className={styles.edit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.6886 1.42072C17.9815 1.12783 18.4564 1.12783 18.7493 1.42072L22.9919 5.66335C23.1326 5.804 23.2116 5.99477 23.2116 6.19368C23.2116 6.39259 23.1326 6.58336 22.9919 6.72401L7.43557 22.2804C7.29492 22.421 7.10414 22.5 6.90523 22.5L2.66271 22.4999C2.24851 22.4999 1.91274 22.1642 1.91273 21.75L1.9126 17.5074C1.91259 17.3085 1.99161 17.1177 2.13227 16.977L17.6886 1.42072ZM18.2189 3.01171L3.41261 17.818L3.4127 20.9999L6.59459 21L21.4009 6.19368L18.2189 3.01171Z"
              fill="#1C1B1E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.4457 5.66327C13.7386 5.37038 14.2135 5.37038 14.5064 5.66327L18.7491 9.90592C19.0419 10.1988 19.0419 10.6737 18.7491 10.9666C18.4562 11.2595 17.9813 11.2595 17.6884 10.9666L13.4457 6.72393C13.1529 6.43104 13.1529 5.95617 13.4457 5.66327Z"
              fill="#1C1B1E"
            />
          </svg>
        </button>
        <button onClick={handleDelete} className={styles.delete}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#6B7399"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#6B7399"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};
