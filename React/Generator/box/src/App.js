import React,{useState} from 'react';
import BoxGenerator from "./components/BoxGenerator"
import Form from './components/Form';
import './App.css';


const App = () => {
  const [generateBox, setGenerateBox] = useState([]);

  return (
    <div className="App">
      <Form generateBox={generateBox} setGenerateBox={setGenerateBox}/>
      <BoxGenerator generateBox={generateBox}/>      
    </div>
  );
}

export default App;
