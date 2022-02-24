import React,{useState, useEffect} from "react";
import Todo from "./Components/Todo";
import Display from "./Components/Display";
import './App.css';

const App = () => {
const [todoList,setTodoList] = useState([]); 

useEffect(()=>{
  if(localStorage.getItem("listItems")) {
    setTodoList(JSON.parse(localStorage.getItem("listItems")))
  }  
},[])

useEffect(()=>{
  localStorage.setItem("listItems",JSON.stringify(todoList))
},[todoList])
  
return (
    <div className="App">
      <Todo todoList={todoList} setTodoList={setTodoList}/>    
      <Display todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
