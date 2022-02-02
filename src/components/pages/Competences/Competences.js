import React from 'react';
import {CompetenceContenuOne, CompetenceContenuTwo} from './Data';
import InfoSection from '../../InfoSection/InfoSection';

const Competences = () => {
    return (
        <>
            <InfoSection {...CompetenceContenuOne} />
            <InfoSection {...CompetenceContenuTwo} />
        </>
    );
};

export default Competences;