import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="inEarth · Fiona Gridley" />
      <iframe
        src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=tu5bflsk9s"
        width="100%"
        height="500px"
        seamless={true}
        scrolling="no"
        frameBorder="0"
        title="inEarth brand book"
        allowFullScreen
      ></iframe>
    </Layout>
  );
};

export default IndexPage;
