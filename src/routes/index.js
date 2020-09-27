import React from 'react';

import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Pokedex from '../pages/Pokedex';

import Favorites from  '../pages/Favorites';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Pokedex} />
                <Route path="/favorites" component={Favorites} />

            </Switch>
        </BrowserRouter>
    )
}