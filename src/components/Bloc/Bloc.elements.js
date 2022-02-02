// Cette component est pour definir les styles de la component Pricing

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
  padding: 50px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #0101DF;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 0 10px;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin:-10px;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled.a`
  flex: 1 1 160px;
  margin: 10px;
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;


export const PricingCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;
