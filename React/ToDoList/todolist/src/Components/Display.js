import React,{useState} from 'react'
import styles from "./Todo.module.css";

const Display = (props) => {
    const {todoList,setTodoList} = props;
    const [completed,setCompleted] = useState(false);
    
    const handleDelete = (idfmdelete) => {
    const newList = todoList.filter((todo,index) => {return todo.id !== idfmdelete})
    setTodoList(newList);    
}
    const handleChange = (idfmcheckbox) => {
    setCompleted(!completed);
    const updatedList = todoList.map((todo,index) => {
            
            if(todo.id === idfmcheckbox) {
                
                return {
                    ...todo,completed:!completed
                }
            }
            return todo;
        })
    setTodoList(updatedList); 
    }
return (
    <div>
        
        {todoList.map((todo,index)=> {
            return (
                <div key={index} className={styles.tasklist}>
                    <p style={todo.completed? { textDecoration: "line-through" }: { textDecoration: "none" }}>{todo.addItem}</p>
                    <input type="checkbox" checked = {todo.completed? "checked": ""} onChange={() =>handleChange(todo.id)}/>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>                
            )
        })}
    </div>
)
}

export default Display