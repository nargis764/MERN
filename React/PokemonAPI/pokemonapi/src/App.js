import './App.css';
import React,{useState,useEffect} from 'react';
import axios from "axios";

const App = () => {
    const [pokemonList,setPokemonList]=useState([]);

  useEffect(() => {axios.get("https://pokeapi.co/api/v2/pokemon?limit=1126")
  .then((res)=>{
    setPokemonList(res.data.results)    
  })
  },[])
  
return (
    <div className="App">
      {pokemonList.map((pokemon,index)=>{
        return (
          <div key={pokemon.id}>
            <p><span>{`${index+1}`}. </span>{pokemon.name}</p>
          </div>
        )
      })}    
      
    </div>
  );
}

export default App;
