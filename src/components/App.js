import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import api from '../pokeapi/pokemons';
import './App.css';
import Header from './Header';
import AddPokemon from './AddPokemon';
import PokemonList from './PokemonList';

function App() {


  const retrievePokemon = async () => {
    const response = await api.get("/pokemon?limit=151");
    console.log(response.data)
    return response.data;
  }

  const [pokemons, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResult] = useState([]);

  const searchHandler = () =>{
    setSearchTerm(searchTerm)
    if(searchTerm !== ""){
      const newPokemonList = pokemons.filter((pokemon) => {
        return Object.values(pokemon).join("").toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
      });
      setSearchResult(newPokemonList);
    }else{
      setSearchResult(pokemons)
    }
  };

  useEffect(() => {
    const getAllPokemon = async () => {
      const allPokemon = await retrievePokemon();
      console.log("pokemonesss", allPokemon)
      if (allPokemon) setPokemon(allPokemon.results);
    }
    getAllPokemon();
  }, [])

  useEffect(() => {

  },[pokemons])


  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" render={(props) => (<PokemonList 
           pokemons={searchTerm.length < 1 ? pokemons : searchResults} term={searchTerm}
           searchKeyword={searchHandler}  />)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
