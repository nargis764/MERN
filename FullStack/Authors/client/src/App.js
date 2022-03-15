import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthorList from "./components/AuthorList"
import NewAuthor from "./components/NewAuthor";
import EditAuthor from "./components/EditAuthor";

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path = "/" element = {<AuthorList/>}/>
        <Route path = "/new" element = {<NewAuthor/>}/>  
        <Route path="/edit/:id" element = {<EditAuthor/>}/>         
      </Routes>      
    </div>
    </BrowserRouter>    
  );
}

export default App;