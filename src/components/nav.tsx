import { useStaticQuery, graphql, Link } from 'gatsby';
import * as React from 'react';
import Logo from '../data/images/fionaGridleyLogo';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin-bottom: 1.45rem;
  position: fixed;
  background: #ffffff;
  z-index: 2000;
  max-width: 100%;
  width: 100%;
  top: 0;
  box-shadow: 0px 10px 10px #00000009;
`;
const NavContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 1rem 1.0875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  min-width: 130px;
  max-width: 270px;
  margin-left 1rem;
`;
const LinkUL = styled.ul`
  list-style: none;
  margin: 0;
  float: right;
`;
const LinkContainer = styled.div`
  height: 100%;
  margin-right: 2rem;
`;

const ListLink = styled.li`
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 0;
`;

const Nav: React.FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "resume" }) {
        publicURL
      }
    }
  `);
  return (
    <HeaderContainer>
      <NavContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <div>
          <LinkContainer>
            <LinkUL>
              <ListLink>
                <Link to="/">work</Link>
              </ListLink>
              <ListLink>
                <Link to="/about/">about</Link>
              </ListLink>
              <ListLink>
                <a href={data.file.publicURL}>resume</a>
              </ListLink>
            </LinkUL>
          </LinkContainer>
        </div>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Nav;
