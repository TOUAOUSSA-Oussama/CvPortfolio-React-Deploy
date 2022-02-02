// Definition de la component Bloc

import React, { Component } from 'react';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer
} from './Bloc.elements';
import Card from './Card';

class Bloc extends  Component {

    constructor(){
        super();
        this.state = {
            loading: true,
            gitData: null
        }
    };

    async componentDidMount(){
        const url = "https://api.github.com/users/TOUAOUSSA-Oussama/repos";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            loading: false,
            gitdata: data
        });
        console.log(this.state.gitdata.length)
    }


    render() {
        return (
            <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
              <PricingSection>
                <PricingWrapper>
                  <PricingHeading>Mes Projets Github</PricingHeading>
                  <PricingContainer>
                    {this.state.loading? <><PricingHeading>Laoding...</PricingHeading></>:
                        <>
                                {this.state.gitdata.length !== 0? this.state.gitdata.map( (info) => <Card name={info} />): <span>blabla</span>} 
                        </>}
                  </PricingContainer>
                </PricingWrapper>
              </PricingSection>
            </IconContext.Provider>
          );
    }
  
}
export default Bloc;
