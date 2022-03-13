import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Main from "./views/Main";
import ViewProduct from "./components/ViewProduct"
import './App.css';

const App = () => {
  return (
    <BrowserRouter>

    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/:id" element={<ViewProduct/>}/>
      </Routes>      
    </div>

    </BrowserRouter>    
  );
}

export default App;
