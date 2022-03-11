import React,{useState} from 'react'

const productForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title:title,
            price:price,
            description:description
        })
        .then(res => {
            console.log(res);
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit = {submitHandler}>
            <div>
                <label>Title</label>
                <input type = "text" value = {title} onChange = {(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type = "text" value = {price} onChange = {(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type = "text" value = {description} onChange = {(e) => setDescription(e.target.value)}/>
            </div>
            <button>Create</button>
        </form>
    </div>
  )
}

export default productForm
