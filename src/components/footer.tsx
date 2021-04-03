import * as React from 'react';
import Github from '../data/images/github';
import LinkedIn from '../data/images/linkedin';
import Email from '../data/images/email';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
  display: flex;
  justify-content: flex-end;
`;

const LinkContainer = styled.div`
  padding-right: 2rem;
`;
const Icon = styled.a`
  margin-left: 30px;
`;

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <LinkContainer>
        <Icon href="https://github.com/fgridley">
          <Github />
        </Icon>
        <Icon href="https://www.linkedin.com/in/fiona-gridley/">
          <LinkedIn />
        </Icon>
        <Icon href="mailto:gridley.f@northeastern.edu">
          <Email />
        </Icon>
      </LinkContainer>
    </FooterContainer>
  );
};

export default Footer;
