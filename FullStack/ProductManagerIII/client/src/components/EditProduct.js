import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = (props) => {
    const [title,setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => console.log(err))

    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title:title,
            price:price,
            description:description
        })
        .then((res) => {
            console.log(res);
            navigate("/");
        })
    }

return (
    <div className="w-1/2 mx-auto border bg-white shadow-md rounded px-8 py-5 my-5">
        <form onSubmit={updateProduct}>
            <div>
                <label className="block text-gray-700 text-lg font-bold mb-2">Title</label>
                <input className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 mb-5 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" type = "text" value = {title} onChange = {(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label className="block text-gray-700 text-lg font-bold mb-2">Price</label>                
                <input class="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 mb-5 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" type = "text" value = {price} onChange = {(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label className="block text-gray-700 text-lg font-bold mb-2">Description</label>                
                <input class="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 mb-5 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" type = "text" value = {description} onChange = {(e) => setDescription(e.target.value)}/>
            </div>
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 rounded">
            Edit
            </button>
        </form>
    </div>
)
}

export default EditProduct