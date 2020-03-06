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
    font-size: var(--text-4);
  }

  .post__body {
    font-size: var(--text-4);
    margin-bottom: 1.25rem;
  }

  .post__share-link {
    font-size: var(--text-4);
  }

  @media only screen and (max-width: 480px) {
    margin-bottom: 10px;

    .post__title {
      font-size: var(--text-8);
    }

    .post__body {
      font-size: var(--text-5);
    }

    .post__share-link {
      font-size: var(--text-5);
    }
  }
`;

const postLayout = ({ data, location }) => {
  const { markdownRemark } = data;
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
        <a
          className="post__share-link"
          href={`https://twitter.com/intent/tweet?text=${markdownRemark.frontmatter.title}&via=IAmWillDL&url=${location.href}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on Twitter
        </a>
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default postLayout;
