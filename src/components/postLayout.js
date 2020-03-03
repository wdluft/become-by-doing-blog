import React from 'react';
import { graphql } from 'gatsby';
import SEO from './seo';
import Layout from './layout';
import styled from 'styled-components';

const PostWrapper = styled.article`
  .post__title {
    color: var(--primary-color-5);
  }

  .post__date {
    color: var(--tertiary-color-3);
    margin-bottom: 1rem;
  }

  .post__body {
    p {
      font-size: var(--text-4);
    }
  }
`;

const postLayout = ({ data }) => {
  const { markdownRemark } = data;
  console.log(data);
  console.log(markdownRemark);
  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} />
      <PostWrapper className="post">
        <h1 className="post__title">{markdownRemark.frontmatter.title}</h1>
        <p className="post__date">{markdownRemark.frontmatter.date}</p>
        <div
          className="post__body"
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </PostWrapper>
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
