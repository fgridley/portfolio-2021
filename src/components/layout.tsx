import * as React from 'react';
import styled from 'styled-components';
import Nav from './nav';
import Footer from './footer';
import GlobalStyle from '../styles/GlobalStyles';

const PageContent = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 110px 1.0875rem 1.45rem;
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent = ({ children }: Props): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <PageContent>
        <main>{children}</main>
      </PageContent>
      <Footer />
    </>
  );
};

export default Layout;
