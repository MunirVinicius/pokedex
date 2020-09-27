import React, { useState } from 'react';

import { Container, Wrapper , PokemonList} from './styles';

import api from '../../services/api'

import PokemonItem from '../../components/PokemonItem';

function Favorites() {
    const [pokemons, setPokemons] = useState(JSON.parse(localStorage.getItem('@pokedex:favorites')) || []);

  return <Container>
      <h1>Favorites</h1>
      <Wrapper>
          <PokemonList>
              {pokemons.map(pokemon =>(
                <PokemonItem key={pokemon.id} data={pokemon}  liked/>
              ))}
          </PokemonList>
      </Wrapper>
  </Container>
}

export default Favorites;