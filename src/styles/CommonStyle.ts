import { createGlobalStyle } from "styled-components";

export const CommonStyle = createGlobalStyle`
    :root{
        --maxWidth: 600px;
        --white: #fff;
        --black: #111;
        --lightGray: #eee;
        --mediumGray: #353535;
        --darkGray: #242424;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    body{
        font-family: 'Saira Semi Condensed', sans-serif;
        h1{
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);  
        }
        h3{
            font-size: 1.1rem;
            font-weight: 600;
        }
        p{
            font-size: 1rem;
            color: var(--white);
        }
    }
`;
