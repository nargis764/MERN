import React from 'react'
import {Link} from "react-router-dom"

const Error = (props) => {
return (
    <div className = "w-1/2 mx-auto border bg-white shadow-md rounded px-8 py-5 mt-52">
        <p class="p-4 italic text-justify text-xl">"We're sorry, but we could not find the author you are looking for. 
            Would you like to add an author to our database?" </p>
        <Link to="/new" className = "px-8 text-blue-600 text-lg underline">Add a new author</Link>       
    </div>
)
}

export default Error