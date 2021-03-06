import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Main from "./views/Main";
import ViewProduct from "./components/ViewProduct"
import EditProduct from "./components/EditProduct";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>

    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/:id" element={<ViewProduct/>}/>
        <Route path="/edit/:id" element={<EditProduct/>}/>
      </Routes>      
    </div>

    </BrowserRouter>    
  );
}

export default App;
