import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';

const EditAuthor = (props) => {
    const [name,setName] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setName(res.data.name)
        })
        .catch((err) => {
            console.log(err);
        })
    })

    const updateAuthor = () => {
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name:name
        })
        .then((res) => {
            console.log(res)
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        })
    }
return (
    <div>
        <form onSubmit={updateAuthor}>
            <input type="text" value = {name} onChange = {(e) => setName(e.target.value)}/>
        </form>
    </div>
)
}

export default EditAuthor