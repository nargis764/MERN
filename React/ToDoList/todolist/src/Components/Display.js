import React from "react";
import styles from "./Todo.module.css";

const Display = (props) => {
  const { todoList, setTodoList } = props;

  const handleDelete = (idfmdelete) => {
    const newList = todoList.filter((todo, index) => {
      return todo.id !== idfmdelete;
    });
    setTodoList(newList);
  };
  const handleChange = (idfmcheckbox) => {
    setTodoList(
      todoList.map((todo, index) => {
        if (todo.id === idfmcheckbox) {
          todo.taskcompleted = !todo.taskcompleted;
        }
        return todo;
      })
    );
  };
  return (
    <div className={styles.tasklist}>
      <h2 className={styles.listheading}>My Todo list</h2>
      {todoList.map((todo, index) => {
        return (
          <div key={todo.id} className={styles.tasks}>
            <div className={styles.task}>
              <p
                style={
                  todo.taskcompleted
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {todo.addItem}
              </p>
              <input
                type="checkbox"
                checked={todo.taskcompleted ? "checked" : ""}
                onChange={() => handleChange(todo.id)}
              />
            </div>

            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Display;