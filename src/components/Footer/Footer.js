// Cette composante sera deposer dans la dernier page de l'application web
import React, { useState } from 'react';
import { FacebookOutlined, InstagramFilled, YoutubeOutlined, LinkedinFilled, GithubOutlined } from '@ant-design/icons';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    SocialIcons,
    SocialIconLink,
    ImgWrapper,
    Img,
    Ligne
} from './Footer.elements';
import {Button} from '../../components/GloableStyle';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

const Footer = () => {
    const [remplie, setRemplie] = useState(true);

    const [state, handleSubmit] = useForm("mqknegjz");
    
    const handleRemplie = () => {
        setRemplie(false);
    }

    return (
        
        <FooterContainer>
            <Ligne>
                <FooterSubscription>
                    {/* l'entete du footer */}
                    <FooterSubHeading>
                        CONTACTEZ-MOI
                    </FooterSubHeading>
                    {remplie ? 
                        <Form onSubmit={handleSubmit, handleRemplie} method='GET'>
                            <FormInput name="email" placeholder="Votre adresse mail" />
                            <FormInput name="nom" placeholder="Votre nom" />
                            <FormInput name="prenom" placeholder="Votre prenom" />
                            <FormInput name="message" placeholder="Votre message" />

                            <Button type="submit" disabled={state.submitting}>Susbcribe</Button>
                        </Form>
                        :
                        <FooterSubText>
                            Merci d'avoir me contacter !
                        </FooterSubText>
                    }
                    
                </FooterSubscription>
                <FooterSubscription>
                    <ImgWrapper>
                        <Img src={require('../../static/contact.svg').default} width={'400px'} />
                    </ImgWrapper>
                </FooterSubscription>
            </Ligne>
            
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        RD-TOOSSA
                    </SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href={'https://www.facebook.com/too.ssa.5'} target="_blank" aria-label="Facebook">
                            <FacebookOutlined style={{ fontSize: '30px', color: 'white' }}/>
                        </SocialIconLink>

                        <SocialIconLink href={'https://www.instagram.com/oussama_touaoussa/'} target="_blank" aria-label="Instagram">
                            <InstagramFilled style={{ fontSize: '30px', color: 'white' }}/>
                        </SocialIconLink>

                        <SocialIconLink href={'https://www.linkedin.com/in/oussama-touaoussa-7619a21a1'} target="_blank" aria-label="Linkedin">
                            <LinkedinFilled style={{ fontSize: '30px', color: 'white' }}/>
                        </SocialIconLink>

                        <SocialIconLink href={'https://github.com/TOUAOUSSA-Oussama'} target="_blank" aria-label="Linkedin">
                            <GithubOutlined style={{ fontSize: '30px', color: 'white' }}/>
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;