import styled from 'styled-components';

export const Container = styled.div`
    .pagination {
  display: flex;
}

    .pagination a {
    color: black;
    float: center;
    padding: 8px 16px;
    justify-content:flex-end;
    text-decoration: none;
    transition: background-color .3s;
    }

    .pagination a.active {
    background-color: blueviolet;
    color: blue;
    }

    .pagination a:hover:not(.active) {background-color: #ddd;}
`;
