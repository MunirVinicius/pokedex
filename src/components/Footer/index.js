import React from 'react';
import {Link} from 'react-router-dom';
import { Container } from './styles';

function Table(){
    return (
        <Container>
            <div class="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">7</a>
            <a href="#">8</a>
            <a href="#">9</a>
            <a href="#">10</a>
            <a href="#">&raquo;</a>
            </div>
        </Container>
    )
}

export default Table;