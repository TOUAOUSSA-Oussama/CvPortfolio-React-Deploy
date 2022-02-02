// Cette component va definir les pages d'acceuil

import React from 'react';
import {AcceuilContenuOne, AcceuilContenuTwo} from './Data';
import InfoSection from '../../InfoSection/InfoSection';

const Acceuil = () => {
    return (
        <>
            <InfoSection {...AcceuilContenuOne} />
            <InfoSection {...AcceuilContenuTwo} />
        </>
    );
};

export default Acceuil;