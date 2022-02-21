import './App.css';
import React,{useState} from 'react'
import Tabs from "./Components/Tabs";
import Display from "./Components/Display";

const tabs = [
{label:"Tab 1",content:"Tab 1 content is showing here"},
{label:"Tab 2",content:"Tab 2 content is showing here"},
{label:"Tab 3",content:"Tab 3 content is showing here"}
]

const App = () => {
const [showTabs,setShowTabs]=useState([]);

  return (
    <div className="App">
    <Tabs tabs={tabs} setShowTabs={setShowTabs}/>    
    <Display showTabs={showTabs}/>
    </div>
  );
}

export default App;
