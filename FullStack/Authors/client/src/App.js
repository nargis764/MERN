import AuthorList from "./components/AuthorList"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EditAuthor from "./components/EditAuthor";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>

    <div className="App">
      <Routes>
        <Route path="/" element={<AuthorList/>}/>
        <Route path="/new/:id" element={<EditAuthor/>}/>         
      </Routes>      
    </div>

    </BrowserRouter>    
  );
}

export default App;