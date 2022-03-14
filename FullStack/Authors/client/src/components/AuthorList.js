import React,{useState,useEffect} from 'react';
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";

const AuthorList = (props) => {
    const [authorList, setAuthorList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setAuthorList(res.data);
        })
    },[])

    const handleEdit = (e,idFromBelow) => {
        e.preventDefault();
        navigate("/new/idFromBelow");

    }

    return (
    <div>
        <Link to="/new">Add an author</Link>         
        <table className="shadow-lg bg-white border-collapse">
            <tr>
                <th className="bg-blue-100 border text-left px-10 py-4 ">Author</th>
                <th className="bg-blue-100 border text-left px-10 py-4">Actions available</th> 
            </tr>
            {
            authorList.map((author,index) => {
                return(
                    <tr>
                        <td class="border px-8 py-4">{author.name}</td>
                        <td class="border px-8 py-4">
                            <button onClick={handleEdit(author._id)}
                            className="px-5 py-1 mx-2 text-sm text-white bg-blue-400 rounded">
                                Edit
                            </button>
                            <button className="px-5 py-1 text-sm text-white bg-blue-400 rounded">Delete</button>
                        </td>    
                    </tr>                    
                )                
            })
        }
        </table> 
    </div>
)
}

export default AuthorList