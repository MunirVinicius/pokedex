import React, {useState, useEffect} from 'react';

import { Container, Wrapper , PokemonList} from './styles';

import api from '../../services/api'

import PokemonItem from '../../components/PokemonItem';

function Pokedex() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() =>{

        async function loadPokemons(){
            const response = await api.get('/pokemon', {
                params: {
                    limit: 10,
                    offset: 0
                }
            });
           const {results} = response.data;
           const pokemonList = results.map(pokemon =>{
               const id = pokemon.url.match(/\b\d+\b/)[0];
               return {
                   ...pokemon,
                   id,
                   imageUrl:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
               }
           })
           setPokemons(pokemonList);
        }
        loadPokemons();
    }, []);

  return <Container>
      <h1>Pokedex</h1>
      <Wrapper>
          <PokemonList>
              {pokemons.map(pokemon =>(
                <PokemonItem key={pokemon.id} data={pokemon} />
              ))}

          </PokemonList>
      </Wrapper>
  </Container>
}

export default Pokedex;