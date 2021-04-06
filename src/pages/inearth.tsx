import * as React from 'react';
import Layout from '../components/layout';
import ProjectPreviews from '../components/project-preview';

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=tu5bflsk9s" width="100%" height="500px" seamless={true} scrolling="no" frameBorder="0" allowFullScreen></iframe>
    </Layout>
  );
};

export default IndexPage;