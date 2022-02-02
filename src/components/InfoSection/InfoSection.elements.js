// Cette component va definir les styles des balises qui seront utiliser dans InfoSection.js

import styled from 'styled-components'

// style de toute la section
export const InfoSec = styled.div`
    color: #fff;
    padding: 160px 0;
    // avoir un background light si on a lightBg, sinon elle sera noi
    background: ${({lightBg}) => (lightBg ? '#A9BCF5' : '#0101DF')};
`

// style de la ligne
export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    // parfois on veut que l'image soit a gauche et parfois a droite
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`;

// style de chaque colonne de la ligne
export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

// style du texte a l'interieur de chaque colonne
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`
// style du texte de l'entete
export const TopLine = styled.div`
    color: ${({ lightTopLine }) => (lightTopLine ? '#1c2237' : '#a9b3c1')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

// style du titre (en dessous de l'entete)
export const Heading = styled.h1`
    color: ${ ({lightText}) => (lightText ? 'black' : '#f7f8fa' )};
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
`

// style du sous-titre :
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${ ({ lightTextDesc }) => (lightTextDesc ? '#1c2237' : '#a9b3c1') };
`

// style du conteneur de l'image 
export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`
// style de l'image 
export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`