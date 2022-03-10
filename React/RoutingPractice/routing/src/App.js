import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Item from "./Components/Item";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:item" element={<Item/>}/>
        <Route path="/:item/:color1/:color2" element={<Item/>}/>
        <Route path="/:item/:color1/:color2/:color3" element={<Item/>}/>
      </Routes>      
    </div>
    </BrowserRouter>    
  );
}

export default App;
