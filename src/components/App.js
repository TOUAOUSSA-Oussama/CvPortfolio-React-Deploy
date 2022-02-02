import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobaleStyle} from './GloableStyle';
import Navbar from "./Navbar/Navbar";
import Acceuil from './pages/Acceuil/Acceuil';
import Competences from './pages/Competences/Competences';
import Experiences from './pages/Experiences/Experiences';
import Formations from './pages/Formations/Formations';
import ContactezMoi from './pages/ContactezMoi/ContactezMoi';
import Projets from './pages/Projets/Projets';

const App = () => {
    return (
        <>
            <Router>
                <GlobaleStyle />
                <Navbar />
            
                {/* Afficher la componenet Acceuil */}
                <Routes>
                    <Route path='/CvPortfolio-React-Deploy' exact  element={<Acceuil/>} />
                    <Route path='/competences' exact  element={<Competences/>} />
                    <Route path='/formations' exact  element={<Formations/>} />
                    <Route path='/experiences' exact  element={<Experiences/>} />
                    <Route path='/projets' exact  element={<Projets/>} />
                    <Route path='/contactezmoi' exact  element={<ContactezMoi/>} />
                </Routes> 
            </Router>
        </>
    );
};

export default App;