import AuthorList from "./components/AuthorList"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>

    <div className="App">
      <Routes>
        <Route path="/" element={<AuthorList/>}/>        
      </Routes>      
    </div>

    </BrowserRouter>    
  );
}

export default App;