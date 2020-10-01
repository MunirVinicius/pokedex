import React, {useState} from 'react';

import  { Container } from './styles';

import {Link, useHistory} from 'react-router-dom';


function PokemonItem({data, liked}) {
  const[favorite, setFavorite] = useState(liked || false);

  function handleToggleFavorite(){
    const favoriteList = JSON.parse(localStorage.getItem('@pokedex:favorites')) || [];

    if(favorite){
      const filteredFavorites = favoriteList.filter(favorite => favorite.id !== data.id)
      localStorage.setItem('@pokedex:favorites', JSON.stringify(filteredFavorites));
    }
    else{
      const newFavoriteList = [...favoriteList, data];
      localStorage.setItem('@pokedex:favorites', JSON.stringify(newFavoriteList));
    }
    setFavorite (!favorite);
  }

  return (<Container favorite={favorite}>
    <img src={data.imageUrl}  alt={data.name}/>
    <strong>{data.id} - {data.name}</strong>
    <div> 
      <button type="button"><Link to={`/details/${data.id}`}>Detalhes</Link></button>
      <button type="button" className="fav" onClick={handleToggleFavorite}>{favorite ? 'desfavoritar' : 'favoritar'}</button>
    </div>
  </Container>);
}

export default PokemonItem;