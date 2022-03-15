import React,{useState} from 'react'
import axios from "axios";
import {useNavigate, Link} from "react-router-dom"

const NewAuthor = (props) => {
    const [name,setName] = useState("");
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();

    const createAuthor = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", {
            name:name
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setAuthor(...author,res.data);          
            navigate("/");
        })
        .catch((err) => {
            console.log(err)
        })
    }

return (
    <div className = "w-1/2 mx-auto border bg-white shadow-md rounded px-8 py-5 my-5">
        <form onSubmit = {createAuthor}>
            <Link to="/">Home</Link>
            <p>Add a new author:</p>
            <label className="block text-gray-700 text-lg font-bold mb-2">
            Name:
            </label>
            <input 
            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 mb-5 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" 
            type = "text" 
            value={name} 
            onChange={(e) => {setName(e.target.value)}
            }/>
            <button 
            className="px-5 py-1 mx-2 text-sm text-white bg-blue-400 rounded"
            onClick={() => {navigate("/")}}>
            Cancel
            </button>
            <button
            className="px-5 py-1 mx-2 text-sm text-white bg-blue-400 rounded">
            Submit
            </button>
        </form>
    </div>
)
}

export default NewAuthor