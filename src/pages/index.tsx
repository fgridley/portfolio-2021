import * as React from 'react';
import Layout from '../components/layout';
import ProjectPreviews from '../components/project-preview';
import SEO from '../components/seo';

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Work · Fiona Gridley" />
      <ProjectPreviews />
    </Layout>
  );
};

export default IndexPage;
