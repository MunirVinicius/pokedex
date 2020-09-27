import React from 'react';

import { Container, Wrapper , PokemonList} from './styles';

import PokemonItem from '../../components/PokemonItem';

function Pokedex() {
  return <Container>
      <h1>Pokedex</h1>
      <Wrapper>
          <PokemonList>
              <PokemonItem />
          </PokemonList>
      </Wrapper>
  </Container>
}

export default Pokedex;