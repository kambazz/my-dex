import React, {useRef} from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = (props)  => {
    const inputEl = useRef("");
    const renderPokemonList = props.pokemons.map((pokemon) =>{
        return(
            <PokemonCard pokemon={pokemon}/>
        );
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    };
    return(
        <div className="main">
            <h2>Listado de pokemon</h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputEl} type="text" placeholder="pokemon que buscaras!" className="prompt" value={props.term} onChange={getSearchTerm()} />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">          
                {renderPokemonList}
            </div>
        </div>
    );
}

export default PokemonList;