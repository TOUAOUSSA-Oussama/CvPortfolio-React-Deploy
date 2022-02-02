// Cette component est pour definir la barre de navigation
import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../GloableStyle'
import {
    Nav, 
    NavbarContainer,
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} 
    from './Navbar.elements'
import Logo from '../../static/logo-2.png';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);    
    const closeMobileMenu = () => setClick(false);

    const handleClick = () => setClick(!click);

    // pour n'afficher le grand boutton que pour les garndes ecrans
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    return (
        // Nav, NavbarContainer, ... sont des styles qu'on a definti dans Navbar.elements.js
        <Nav>
            <NavbarContainer>
                {/* Logo + icone */}
                <NavLogo to="/" onClick={closeMobileMenu}> 
                    <img src={Logo} width="80"/>
                </NavLogo> 
                {/* Les trois lignes qui apparaitre lorsqu'on reduit la page (pour les telephones par exemple) */}
                <MobileIcon onClick={handleClick}>
                    {/* si le menu est cliquer => la component FaTimes */}
                    {/* sinon => la component FaBars */}
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                {/* Le menu que va contenir le Navbar */}
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to="/CvPortfolio-React-Deploy">
                            Accueil
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/competences">
                            Mes compétences
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/formations">
                            Mes formations
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/experiences">
                            Mes expériences 
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/projets">
                            Mes projets 
                        </NavLinks>
                    </NavItem>
                    {/* ajouter bouton de sign up */}
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to='/contactezmoi'>
                                <Button primary>CONTACTEZ-MOI</Button>
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to='/contactez-moi'>
                                <Button fontBig primary>
                                    CONTACTEZ-MOI
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;