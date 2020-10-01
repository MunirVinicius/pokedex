import React, {useState, useEffect} from 'react';

import  { Container } from './styles';

import {useParams} from 'react-router-dom';

import apii from '../../services/apii';

import {Link, useHistory} from 'react-router-dom';

function PokemonCard() {
    const [pokemons, setPokemons] = useState([]);
    const {id} = useParams();
    useEffect(() =>{
        async function loadPokemons(){
            const response = await apii.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const  name = response.data.name;


            setPokemons(name);
            console.log(pokemons);
        }
        loadPokemons();
    },[]);    

        return(
            <>
                <Container>
                    <div classname="card">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Avatar" />
                        <div classname="container">
                            <h4><b>{pokemons}</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                </Container>
            </>
        )
    }

export default PokemonCard;