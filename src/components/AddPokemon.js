import React from 'react';

class AddPokemon extends React.Component{
    render(){
        return(
            <div className="ui main">
                <h2>Añadir pokimon</h2>
                <form className="ui form">
                    <div className="field">
                        <label>
                            Pokemon
                        </label>
                        <input type="text" name="Pokemon" placeholder="pokemon a buscar"/>
                    </div>
                    <button className="ui button red">Buscar!</button>
                </form>
            </div>
        );
    }
}

export default AddPokemon;
