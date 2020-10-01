import React, {useState, useEffect} from 'react';

import { Container, Wrapper , PokemonList} from './styles';

import api from '../../services/api';

import apii from '../../services/apii';

import PokemonItem from '../../components/PokemonItem';

import Header from '../../components/Header';
import { Pagination } from '../../components/Footer/styles';

function Pokede() {
    const [pokemons, setPokemons] = useState([]);
    const [favorites, setFavorites] = useState([]);
    useEffect(()=>{

        async function loadPokemons(){
            const response = await api.get('/pokemon', {
                params: {
                    limit: 100,
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

        const storagedFavorites = JSON.parse(localStorage.getItem('@pokedex:favorites')) || [];

        setFavorites(storagedFavorites.map(({id}) => id));
    }, []);

  return (
    <>
    <Header />
    <Container>
      <h1>Pokedex</h1>
      <Wrapper>
          <PokemonList>
              {pokemons.map(pokemon =>(
                <PokemonItem key={pokemon.id} data={pokemon} liked={favorites.includes(pokemon.id)}/>
              ))}

          </PokemonList>
      </Wrapper>
  </Container>
  </>)
}

export default Pokede;