// Definir les styles que va porendre toute la page
import styled, { createGlobalStyle } from 'styled-components';

// style de tout ce qui est dans la page web
export const GlobaleStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

// Style de n'importe quel contenaire
export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

// pour avoir une page responsive
@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`
// style de n'importe quelle boutton
export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB') };
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`   