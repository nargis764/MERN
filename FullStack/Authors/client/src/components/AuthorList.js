import React,{useEffect} from 'react';
import {useNavigate, Link} from "react-router-dom";
import axios from "axios";

const AuthorList = (props) => {
    const {authors, setAuthors} = props;    
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
        <header>
            <h1 class="font-medium leading-tight text-3xl mt-4 mb-2 text-blue-600">Favorite Authors</h1>
        </header>          
        <Link to="/new" className = "text-blue-600 text-lg underline">Add an author</Link>         
        <table className="shadow-lg bg-white border-collapse mt-8">
            <tr>
                <th className="bg-blue-100 border text-left px-10 py-4 ">Author</th>
                <th className="bg-blue-100 border text-left px-10 py-4">Actions available</th> 
            </tr>
            {//sorting and then mapping         
            authors.sort((a, b) => {return a.name.localeCompare(b.name)}).map((author,index) => {
                return(
                    <tr key={index}>
                        <td className="border px-8 py-4">{author.name}</td>
                        <td className="border px-8 py-4">

                            <button onClick={() => navigate(`/edit/${author._id}`)}
                            className="px-5 py-1 mx-2 text-sm text-white bg-blue-400 rounded">
                            Edit
                            </button>
                            
                            <button 
                            onClick = {(e)=> {deleteAuthor(author._id)}}
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