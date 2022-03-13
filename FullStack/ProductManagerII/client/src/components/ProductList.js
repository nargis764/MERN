import React,{useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const ProductList = (props) => {
    const {products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

return (
    <div className = "w-1/2 mx-auto border bg-white shadow-md rounded px-8 py-5 mt-10">
        <h1 className = "text-2xl font-bold mb-5">All Products</h1>
        {
            products.map((product,index) => {
                return (
                <div key={index}>
                    <Link className="text-base font-bold mb-5 text-gray-500 hover:bg-purple-400" to = {`/${product._id}`} style={{display:"block"}}>{product.title}</Link>
                </div>)                
            })
        }
    </div>
)
}

export default ProductList