import React from 'react';
import {ExperienceContenuOne, ExperienceContenuTwo, ExperienceContenuThree, ExperienceContenuFor, ExperienceContenuFive} from './Data';
import InfoSection from '../../InfoSection/InfoSection';

const Experiences = () => {
    return (
        <>
            <InfoSection {...ExperienceContenuOne} />
            <InfoSection {...ExperienceContenuTwo} />
            <InfoSection {...ExperienceContenuThree} />  
            <InfoSection {...ExperienceContenuFor} />  
            <InfoSection {...ExperienceContenuFive} />  
        </>
    );
};

export default Experiences;