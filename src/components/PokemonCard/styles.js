import styled from 'styled-components';

export const Container = styled.div`
  width:500px;

  border: 1px solid blue;
  border-radius: 8px;

    display: flex;
    flex-direction : column;
    align-items: center;
    margin: auto;

    img{
        width: 100px;
        height: 100px;
        margin: auto;
    }

    strong {
        font-size: 1.4rem;
    }

    div{
        width:300px;
        padding: 10px;
        display: rows;
        justify-content: center;
    }

`;
export const Card = styled.div`
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
`;