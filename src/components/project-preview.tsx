// import { Link } from "gatsby"
import * as React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { primaryBlue, lightBlue } from '../styles/styleConstants';

const ProjectsAllContainer = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const Number = styled.h2`
  font-weight: 600;
  font-style: italic;
  color: ${primaryBlue};
  font-size: 36px;
  display: inline-block;
  padding-right: 10px;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const Project = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
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

const Name = styled.h2`
  font-size: 24px;
  display: inline-block;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const Date = styled.h3`
  font-weight: 400;
  opacity: 0.5;
  margin-top: -9px;
  font-size: 15px;
`;

const Separator = styled.div`
  border: 2px solid ${lightBlue};
  margin: 1rem 0px;
`;

const PreviewImg = styled(GatsbyImage)`
  max-width: 500px;
  min-width: 200px;
  margin: 0 0 20px 0;
  box-shadow: 0px 0px 15px #00000033;
  width: 90%;
  @media (min-width: 768px) {
    width: 40%};
    margin-top: 8px;
  }
`;

const ProjectHeader = styled.h1`
  text-align: center;
  margin: 0 0 1rem 0;
`;

interface GraphQLProject {
  node: {
    html: string;
    frontmatter: {
      title: string;
      date: string;
      imageAlt: string;
      image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
}

interface Project {
  html: string;
  title: string;
  date: string;
  imageAlt: string;
  image: IGatsbyImageData;
}

const ProjectPreviews = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___order }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              date
              imageAlt
              image {
                childImageSharp {
                  gatsbyImageData(placeholder: DOMINANT_COLOR)
                }
              }
            }
          }
        }
      }
    }
  `);

  const simpleData = data.projects.edges.map((project: GraphQLProject) => {
    return {
      html: project.node.html,
      ...project.node.frontmatter,
      image: project.node.frontmatter.image.childImageSharp.gatsbyImageData,
    };
  });

  return (
    <ProjectsAllContainer>
      <ProjectHeader> Selected Work </ProjectHeader>
      {simpleData.map((project: Project, index: number) => (
        <>
          <Project key={project.title}>
            <TextContainer>
              <Number>0{index + 1}.</Number>
              <Name>{project.title}</Name>
              <Date>{project.date}</Date>
              <div dangerouslySetInnerHTML={{ __html: project.html }} />
            </TextContainer>
            <PreviewImg image={project.image} alt={project.imageAlt} />
          </Project>
          <Separator />
        </>
      ))}
    </ProjectsAllContainer>
  );
};

export default ProjectPreviews;
