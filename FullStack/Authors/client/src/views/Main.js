import React,{useState} from 'react';
import NewAuthor from "../components/NewAuthor";
import AuthorList from "../components/AuthorList";

const Main = (props) => {
    const [authors, setAuthors] = useState([]);
return (
    <div>
        <NewAuthor authors = {authors} setAuthors = {setAuthors}/>
        <AuthorList authors = {authors} setAuthors = {setAuthors}/>
    </div>
)
}

export default Main;