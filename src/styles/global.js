import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;

    }
    body{
        background: #fff;
    }
    body, button, input, textarea{
        font: 500 1.6rem Roboto;
        color: #4d4d4d;
    }
`;

