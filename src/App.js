import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [state, setState] = useState(0);
  const getPokemon = (e) =>{
      e.preventDefault();
      fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
        return response.json();
      }).then(response => {
        console.log(response);
        setState({pokemon: response.results})
      }).catch(err=>{
        console.log(err);
      });
  }


  const axiosPokemon = () =>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    //axios gives us the results in a .data object
    .then(res => {
      console.log(res.data)
      setState({pokemon: res.data.results})
    })
    .catch(err => console.log(err))
  }



  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <button onClick = {getPokemon}>Fetch Pokemon</button>
      <button onClick = {axiosPokemon}>Axios Pokemon</button>
      {state.pokemon ? state.pokemon.map((item,idx)=>{
          return(<div key={idx}>{item.name}</div>)
      }):null}

    </div>
    );
}

export default App;
