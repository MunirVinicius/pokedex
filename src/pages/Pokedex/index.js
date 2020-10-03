import React, {useState, useEffect} from 'react';

import { Container, Wrapper , PokemonList} from './styles';

import ReactPaginate from 'react-paginate';

import api from '../../services/api';

import apii from '../../services/apii';

import PokemonItem from '../../components/PokemonItem';

import Header from '../../components/Header';

import '../../styles/paginate.css';





function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
        useEffect(() =>{
        async function loadPokemons(){
            const offset = 100 * (currentPage - 1);
            const response = await api.get('/pokemon', {
                params: {
                    limit: 100,
                    offset
                }
            });

           const {results, count} = response.data;
           
           const pokemonList = results.map(pokemon =>{
               const id = pokemon.url.match(/\b\d+\b/)[0];
               return {
                   ...pokemon,
                   id,
                   imageUrl:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                   
               }
           })
           setPokemons(pokemonList);
           setPageCount(count / 100);
        }
        loadPokemons();

        const storagedFavorites = JSON.parse(localStorage.getItem('@pokedex:favorites')) || [];

        setFavorites(storagedFavorites.map(({id}) => id));
    }, [currentPage]);

  return (
    <>
    <Header />
    <Container>
      <h1>Pokedex</h1>
      <Wrapper>
          <PokemonList>
              {pokemons.map(pokemon =>(
                  <>
                    <PokemonItem key={pokemon.id} data={pokemon} liked={favorites.includes(pokemon.id)}/>

                </>
              ))}

          </PokemonList>
      </Wrapper>
      <ReactPaginate pageCount={pageCount} 
      marginPagesDisplayed={0} 
      pageRangeDisplayed={6} 
      onPageChange={page  => setCurrentPage(page.selected + 1)}
      containerClassName="paginate-container"/>
  </Container>
  </>)
}

export default Pokedex;