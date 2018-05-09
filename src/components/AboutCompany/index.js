import React from 'react';
import Link from 'gatsby-link';
import { HTMLContent } from '../Content';

const AboutCompany = ({ aboutSection }) => (
  <div className="section about-company">
    <h1 className="section__title">{aboutSection.frontmatter.title}</h1>
    <HTMLContent className="section__text" content={aboutSection.html} />
  </div>
);

export default AboutCompany;

export const AboutSectionQuery = graphql`
  fragment aboutSection on RootQueryType {
    aboutSection: markdownRemark(frontmatter: { id: { eq: "about-section" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
