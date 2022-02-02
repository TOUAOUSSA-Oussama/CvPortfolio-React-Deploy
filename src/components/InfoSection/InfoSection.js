// Cette component est pour definir la base de chaque page
// pour chaque page, on va utiliser cette meme component mais avec un contenu different

import React from 'react';
import { useState } from 'react';
// importer les differents styles definies dans InfoSection.elements.js
import {
    InfoSec,
    InfoRow,
    InfoColumn, 
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img

} from './InfoSection.elements';
// importer les styles qu'on a definit dans GlobaleStyle.js
import {
    Button,
    Container
} from '../GloableStyle';
// importer Link 
import {Link} from 'react-router-dom'
import NightBulb from '../../static/night-bulb.png';
import LightBulb from '../../static/light-bulb.png';

const InfoSection = ({
    // on definit les params de ce component qui seront remplie lorsqu'on l'appelle
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightTextDesc, 
    topLine, 
    headline, 
    description, 
    lightText, 
    buttonLabel, 
    primary,
    img,
    start,
    alt,
    imgBulb}) => {
    // pour modifier le mode
    const [NightMode, setNightMode] = useState(false)

    const handleNightMode = () => {
        setNightMode(!NightMode)
    }



    return (
        <>  
            {/* lightBg : true pour un background blanc, false pour noir */}
            <InfoSec lightBg={NightMode}>
                <Container>
                    {/* imgStart : true pour image a droite, false pour gauche */}
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                {/* Pour chnager le mode */}
                                <Link onClick={handleNightMode} to=''>
                                    {NightMode ? <Img src={NightBulb} width="100" /> : <Img src={LightBulb} width="100" /> }
                                    
                                </Link>

                                {/* lightTopLine : true pour un couleur #a9b3c1, false pour #4B59F7 */}
                                {/* topLine : texte a afficher en dessus du titre */}
                                <TopLine lightTopLine={NightMode}>{topLine}</TopLine>
                                {/* lightText : true pour couleur #f7f8fa, false pour #1c2237 */}
                                {/* headline : texte du titre */}
                                <Heading lightText={NightMode}>{headline}</Heading>
                                {/* lightTextDesc : true pour couleur #a9b3c1, false pour #1c2237 */}
                                {/* description : texte en dessous du titre */}
                                <Subtitle lightTextDesc={NightMode}>{description}</Subtitle>
                                
                            </TextWrapper>
                        </InfoColumn>
                        
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default InfoSection;