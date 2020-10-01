import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    background:#fff;
    box-shadow:2px 2px 0;  
    nav{
        display:flex;
        justify-content:flex-end;
        padding: 10px;
    }
    ul{
        list-style: none;
        display:flex;
        li a {
            padding: 5px;
            font-size: 1.2rem;
            text-decoration: none;
            color: black;
            &:hover{
                color:blue;
                font-size: 1rem;
            }
        }
    }
`;
