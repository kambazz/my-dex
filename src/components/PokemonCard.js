import React, { useState, useEffect }from 'react'
import api from '../pokeapi/pokemons';

const PokemonCard = (props) => {
    const {name} = props.pokemon;
    const [pokemonInfo, setPokemonInfo] = useState([]);

     const img = async () => {
        const response = await api.get("/pokemon/"+name);
        return response.data;
     }

     useEffect(() => {
        const getInfor = async () => {
          const allPokemon = await img();
          setPokemonInfo(allPokemon);
        }
        getInfor();
      }, [])

    return(
        <div className="item">
            <img className="ui avatar image" src={pokemonInfo.sprites.front_default}/>
            <div className="content">
                <div className="header">{name}</div>
            </div>
        </div>
    )
}

export default PokemonCard;