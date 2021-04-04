import * as React from 'react';
import Layout from '../components/layout';
import ProjectPreviews from '../components/project-preview';

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <ProjectPreviews />
    </Layout>
  );
};

export default IndexPage;
