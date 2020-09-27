import React from 'react';

import { Container, Wrapper , PokemonList} from './styles';

import api from '../../services/api'

import PokemonItem from '../../components/PokemonItem';

function Favorites() {

  return <Container>
      <h1>Favorites</h1>
      <Wrapper>
          <PokemonList>
              {/* {pokemons.map(pokemon =>(
                <PokemonItem key={pokemon.id} data={pokemon} />
              ))} */}
          </PokemonList>
      </Wrapper>
  </Container>
}

export default Favorites;