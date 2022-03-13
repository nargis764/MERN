import React,{useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
    

const ViewProduct = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res)
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => console.log(err))
    },[])  

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProduct("")
                navigate("/")
            })
            .catch((err) => console.log(err))
    }

return (
    <div className="w-1/2 mx-auto mt-20 leading-10 text-base">
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <button onClick={deleteProduct}>Delete</button>
    </div>
)
}

export default ViewProduct