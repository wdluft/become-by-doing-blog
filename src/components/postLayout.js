import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

const postLayout = ({ data }) => {
  const { markdownRemark } = data;
  console.log(data);
  console.log(markdownRemark);
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html,
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

export default postLayout;
