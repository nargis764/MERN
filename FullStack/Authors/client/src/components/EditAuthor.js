import React,{useState, useEffect} from 'react';
import axios from "axios";
import { useParams, useNavigate, Link} from 'react-router-dom';

const EditAuthor = (props) => {
    const [name,setName] = useState("");
    const [errors, setErrors] = useState({});    
    const {authors} = props;

    const {id} = useParams();
    const navigate = useNavigate();        

        useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res)
                console.log(res.data);               
                setName(res.data.name);                
            })
            .catch((err) => {
                console.log(err)
                }
            )
    }, [])

    useEffect(() => {
        //creating an array of ids
        const newArr = [];        
        console.log(authors)     
        authors.forEach(author => {     
        console.log(author._id)  
        newArr.push(author._id)      
    })

    //checking to see if the requested id is in the id array
    const foundId = newArr.includes(id);
    if(!foundId) {
        navigate("/error")
    }
    }, [])

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name : name
        })
        .then((res) => {
            console.log(res);
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        })
    }

return (
    <div className = "w-1/2 mx-auto border bg-white shadow-md rounded px-8 py-5 mt-52">
        <header>
            <h1 class="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">Favorite Authors</h1>
        </header>
        <Link to="/" className = "font-medium leading-tight text-lg underline mt-0 mb-10 text-blue-600">Home</Link>
        <form onSubmit = {updateAuthor}>            
            <label 
            className = "text-purple-600 text-lg mb-12">
            Edit this author
            </label>
            <input 
            className = "bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 mt-3 mb-5 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" 
            type = "text" 
            value = {name} 
            onChange = {(e) => {setName(e.target.value)}
            }/>
            {
                errors.name? 
                <p>{errors.name.message}</p>
                :null

            }
        
            <button 
            className="px-5 py-1 mx-2 text-sm text-white bg-blue-400 rounded"
            onClick = {() => {navigate("/")}}>
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

export default EditAuthor