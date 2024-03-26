import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:5548991745332">+55 (48) 99174-5332</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:felipealcantaravieira@hotmail.com">felipealcantaravieira@hotmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Time for Change</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/FelipeAlcantaraVieira'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='www.linkedin.com/in/felipe-a-vieira'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer> 
    </FooterWrapper>
  );
};

export default Footer;
