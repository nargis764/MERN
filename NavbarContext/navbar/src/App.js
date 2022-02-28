import './App.css';
import Wrapper from "./Components/Wrapper";
import Navbar from "./Components/Navbar";
import FormWrapper from "./Components/FormWrapper";

import React,{useState,createContext} from 'react'
export const NavbarContext = createContext();

const App = () => {
  const [name,setName] =useState(""); 
  
  return (
    <div className="App">
      <NavbarContext.Provider value={{name,setName}}>
        <Wrapper>
         <Navbar/>
         <FormWrapper/>
        </Wrapper>
      </NavbarContext.Provider>
      
    </div>
  );
}

export default App;