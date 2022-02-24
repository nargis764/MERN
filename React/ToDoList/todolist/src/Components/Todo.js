import React, { useState } from "react";
import styles from "./Todo.module.css";

const Todo = (props) => {
  const [addItem, setAddItem] = useState("");
  const { todoList, setTodoList } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        addItem: addItem,
        id: Math.floor(Math.random() * 10000).toString(),
        taskcompleted: false,
      },
    ]);
    setAddItem("");
  };
  return (
    <div>
      <form className={styles.additem} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={addItem}
          onChange={(e) => setAddItem(e.target.value)}
        />
        <button className={styles.addbutton}>Add</button>
      </form>
    </div>
  );
};

export default Todo;