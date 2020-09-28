import React from 'react';
import {Link} from 'react-router-dom';
import { Container } from './styles';

function Header() {
  return (<Container>
    <nav>  
        <ul>
            <li>
               <Link to="/">Pokedex</Link>
            </li>
            <li><Link to="/favorites">Favorites</Link></li>
        </ul>
    </nav>
  </Container>)
}

export default Header;