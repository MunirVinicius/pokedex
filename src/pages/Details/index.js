import React, { useState } from 'react';

import { Container, Wrapper , PokemonList} from './styles';

import api from '../../services/api'

import PokemonItem from '../../components/PokemonItem';

import Header from '../../components/Header'

import PokemonCard from '../../components/PokemonCard';

function Details() {
    const [pokemons, setPokemons] = useState(JSON.parse(localStorage.getItem('@pokedex:favorites')) || []);

  return (
    <>
    <Header />
  <Container>
      <h1>Details</h1>
      <Wrapper>
          <PokemonCard></PokemonCard>
      </Wrapper>
  </Container>
  </>)
}

export default Details;