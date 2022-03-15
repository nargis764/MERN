import React,{useState,useEffect} from 'react';
import {useNavigate, Link} from "react-router-dom";
import axios from "axios";

const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setAuthors(res.data);
        })
    },[])

    const deleteAuthor = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            //deleting from DOM
            setAuthors(authors.filter(author => author._id !== idFromBelow))
        })
    }

    return (
    <div>
        <h1>Favorite authors</h1>    
        <Link to="/new">Add an author</Link>         
        <table className="shadow-lg bg-white border-collapse">
            <tr>
                <th className="bg-blue-100 border text-left px-10 py-4 ">Author</th>
                <th className="bg-blue-100 border text-left px-10 py-4">Actions available</th> 
            </tr>
            {
            authors.map((author,index) => {
                return(
                    <tr key={index}>
                        <td className="border px-8 py-4">{author.name}</td>
                        <td className="border px-8 py-4">
                            <button onClick={() => navigate(`/edit/${author._id}`)}
                            className="px-5 py-1 mx-2 text-sm text-white bg-blue-400 rounded">
                            Edit
                            </button>
                            <button 
                            onClick={(e)=> {deleteAuthor(author._id)}}
                            className="px-5 py-1 text-sm text-white bg-blue-400 rounded">
                            Delete
                            </button>
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