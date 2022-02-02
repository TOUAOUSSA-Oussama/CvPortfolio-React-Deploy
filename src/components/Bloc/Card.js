import React from 'react';
import { Button } from '../GloableStyle';
import { GiRock } from 'react-icons/gi';
import {
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardLength
} from './Bloc.elements';

const Card = (props) => {
    return (
        <>  
        
            <PricingCard href={props.name.html_url}>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>{props.name.name}</PricingCardPlan>
                <PricingCardLength>Language : {props.name.language}</PricingCardLength>
                <Button primary>Cliquer ici</Button>
              </PricingCardInfo>
            </PricingCard>
        </>
    );
};

export default Card;