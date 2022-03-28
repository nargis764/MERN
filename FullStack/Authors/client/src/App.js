import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthorList from "./components/AuthorList"
import NewAuthor from "./components/NewAuthor";
import EditAuthor from "./components/EditAuthor";
import Error from "./components/Error";

import './App.css';

const App = () => {
  const [authors,setAuthors] = useState([]);
  
  return (
    <BrowserRouter>
    <div className = "App">
      <Routes>    
        <Route path = "/" element = {<AuthorList authors={authors} setAuthors={setAuthors}/>}/>
        <Route path = "/new" element = {<NewAuthor/>}/>  
        <Route path="/edit/:id" element = {<EditAuthor authors={authors}/>}/>
        <Route path="/error" element = {<Error/>}/>           
      </Routes>      
    </div>
    </BrowserRouter>    
  );
}

export default App;