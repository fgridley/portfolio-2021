import * as React from 'react';
import Layout from '../components/layout';
import AboutContainer from '../components/about-container';
import SEO from '../components/seo';

const AboutPage = (): JSX.Element => (
  <Layout>
    <SEO title="About · Fiona Gridley" />
    <AboutContainer />
  </Layout>
);

export default AboutPage;
