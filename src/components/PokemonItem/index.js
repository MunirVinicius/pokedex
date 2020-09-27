import React from 'react';

import  { Container } from './styles';

function PokemonItem() {
  return <Container>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"  alt="bulbasaur"></img>
    <strong>Bulbasaur</strong>
    <div> 
      <button type="button">Detalhes</button>
      <button type="button">Favoritar</button>
    </div>
  </Container>;
}

export default PokemonItem;