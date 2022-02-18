import React from 'react';
import './App.css';
import Header from "./Components/Header.js";
import Navigation from "./Components/Navigation.js";
import Main from "./Components/Main.js";
import Subcontents from "./Components/Subcontents.js";
import Advertisement from "./Components/Advertisement.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main> 
        <Subcontents/>
        <Subcontents/>
        <Subcontents/>
        <Advertisement/>
      </Main>    
    </div>
  );
}

export default App;
