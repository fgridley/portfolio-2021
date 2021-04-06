import * as React from 'react';
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title?: string,
  description?: string,
}

interface SEOGraphQL {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  siteUrl: string;
}

const SEO = ({ title, description }: SEOProps): JSX.Element=> {
  const site: SEOGraphQL = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          description
          defaultTitle: title
          titleTemplate
          siteUrl: url
        }
      }
    }
  `);

  console.log(site);

  const { pathname } = useLocation()

  console.log(pathname);

  const seo = {
    title: title || site.defaultTitle,
    description: description || site.defaultDescription,
    url: `${site.siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={site.titleTemplate}>
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      <link rel="icon" href='../data/images/favicon.ico' />
    </Helmet>
  )
}

export default SEO