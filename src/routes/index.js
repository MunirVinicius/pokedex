import React from 'react';

import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Pokedex from '../pages/Pokedex';

import Favorites from  '../pages/Favorites';


import Pagination  from '../pages/Pagination'

import PokemonCard from '../components/PokemonCard';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Pokedex} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/pagination" component={Pagination} />
                <Route exact path="/details/:id" component={PokemonCard} />

            </Switch>
        </BrowserRouter>
    )
}