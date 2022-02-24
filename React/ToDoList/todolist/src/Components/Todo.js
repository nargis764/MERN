import React,{useState} from 'react'

const Todo = (props) => {
const [addItem,setAddItem] = useState("");
const {todoList,setTodoList} = props;

const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList,
    {
        addItem:addItem,
        id:Math.floor(Math.random()*10000).toString()
    }
    ])
    setAddItem("");
}
return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={addItem} onChange={(e)=>setAddItem(e.target.value)}/>
            <button>Add</button>
        </form>        
    </div>
)
}

export default Todo