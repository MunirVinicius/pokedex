import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  h1{
      text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;`;

  export const PokemonList= styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  ` ;

