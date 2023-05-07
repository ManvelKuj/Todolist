import React from "react";
import styles from "./AddTodo.module.css";

export const AddTodo = (props) => {
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(e);
  }
  // function editInput() {
  //   props.editTask();
  // }
  return (
    <div className={styles.addtodo}>
      <form className={styles.addForm}>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => props.setTask(e.target.value)}
          value={props.task}
        />
        <button className={styles.add} onClick={handleSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0313 4.25C12.4455 4.25054 12.7809 4.58677 12.7803 5.00098L12.762 19.001C12.7614 19.4152 12.4252 19.7505 12.011 19.75C11.5968 19.7495 11.2614 19.4132 11.262 18.999L11.2803 4.99902C11.2809 4.5848 11.6171 4.24946 12.0313 4.25Z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
              fill="#fff"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};
