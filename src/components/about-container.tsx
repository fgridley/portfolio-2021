import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { primaryBlue } from '../styles/styleConstants';

const AboutSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const TextContainer = styled.div`
  max-width: 550px;
  min-width: 300px;
  width: 100%;
  @media (min-width: 768px) {
    width: 40%};
  }
`;

const AboutHeader = styled.h2`
  font-weight: 600;
  color: ${primaryBlue};
  font-size: 36px;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const AboutText = styled.p`
  font-weight: 400;
  color: #000000;
`;

const AboutImg = styled.div`
  margin: 1rem 0 1rem 0;
  min-width: 200px;
  max-width: 500px;
  width: 90%;
  @media (min-width: 768px) {
    width: 40%};
    margin-top: 8px;
  }
`;

const AboutContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "About" } }) {
        frontmatter {
          header
        }
        html
      }
    }
  `);
  return (
    <AboutSection>
      <AboutImg>
        <StaticImage src="../data/images/me.jpeg" alt="Fiona in a sunflower field" />
      </AboutImg>
      <TextContainer>
        <AboutHeader dangerouslySetInnerHTML={{ __html: data.markdownRemark.frontmatter.header }} />
        <AboutText dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </TextContainer>
    </AboutSection>
  );
};

export default AboutContainer;
