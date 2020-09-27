import styled, {css} from 'styled-components';

export const Container = styled.div`
  width:100%;
  border: 1px solid blue;
  border-radius: 8px;

    display: flex;
    flex-direction : column;
    align-items: center;

    img{
        width: 70%;
        height: auto;
    }

    strong {
        font-size: 1.4rem;
    }

    div{
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-around;

        button{
            width: 44%;
            border: 1px solid blue;
            background:transparent;
            font-size: 1rem;
            border-radius: 4px;
            color: blue;
            cursor: pointer;
            transition: all 0.4s;

            

            &: hover{
                background: blue;
                color: #fff;
                border-color:#fff;
                font-size: 0.7rem;
            }
        }

        .fav{
            ${(props) => props.favorite && 
                css`
                background: blue;
                color: #fff;
                border-color:#fff;
                font-size: 0.7rem;

                &: hover{
                    background: #fff;
                    color: blue;
                    border-color:blue;
                    font-size: 0.7rem;
                }
                `
            }
        }
    }
`;

