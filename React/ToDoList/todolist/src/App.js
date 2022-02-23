import React,{useState} from "react";
import './App.css';

const App = () => {
  const [addItem,setAddItem] = useState("");
  const [todoList,setTodoList] = useState([])
   
  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList,addItem]);
    setAddItem("");
  }

  const handleDelete = (index) => {
    const newList = todoList.filter((todo,i) => {return i !== index})
    setTodoList(newList);
    //console.log(index)
  }
 
  return (
    <div className="App">
      <form onSubmit={(e)=>{handleForm(e)}}>
          <input type="text" value={addItem} onChange={(e) => setAddItem(e.target.value)}/>
          <input type="submit" value="Add"/>        
      </form>      
      {todoList.map((todo,i) => {
        return(
          <div key={i}>
            <p>{todo}</p>
            <button onClick={e => handleDelete(i)}>Delete</button>
          </div>       
        )        
      })}
    </div>
  );
}

export default App;
