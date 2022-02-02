import React from 'react';
import {FormationContenuOne, FormationContenuTwo, FormationContenuThree, FormationContenuFor} from './Data';
import InfoSection from '../../InfoSection/InfoSection';
import Bloc from '../../Bloc/Bloc';

const Formations = () => {
    return (
        <>
            <InfoSection {...FormationContenuOne} />
            <InfoSection {...FormationContenuTwo} />
            <InfoSection {...FormationContenuThree} />
            <InfoSection {...FormationContenuFor} />
        </>
    );
};

export default Formations;