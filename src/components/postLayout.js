import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SEO from './seo';
import Layout from './layout';
import { PostWrapper } from './elements/postStyles';

const postLayout = ({ data, location }) => {
  const { markdownRemark } = data;
  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} />
      <PostWrapper className="post">
        <h2 className="post__title">{markdownRemark.frontmatter.title}</h2>
        <p className="post__date">{markdownRemark.frontmatter.date}</p>
        <div
          className="post__body"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
        <a
          className="post__shareLink"
          href={`https://twitter.com/intent/tweet?text=${
            markdownRemark.frontmatter.title
          }&via=IAmWillDL&url=${encodeURIComponent(location.href)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on Twitter<span className="post__shareLinkSpace">&nbsp;</span>
          <svg
            className="post__shareLink--svg"
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8685 1.00725C16.1777 1.49437 15.413 1.86694 14.6036 2.1106C14.1692 1.61122 13.5919 1.25727 12.9497 1.09662C12.3075 0.935974 11.6315 0.976383 11.0131 1.21238C10.3946 1.44838 9.86357 1.86859 9.49178 2.41616C9.11998 2.96374 8.92535 3.61227 8.93423 4.27404V4.99518C7.66665 5.02805 6.41062 4.74698 5.278 4.17701C4.14538 3.60704 3.17132 2.76586 2.44259 1.7284C2.44259 1.7284 -0.442587 8.2187 6.04905 11.1033C4.56357 12.1114 2.79397 12.6169 1 12.5456C7.49164 16.1513 15.4259 12.5456 15.4259 4.2524C15.4252 4.05153 15.4059 3.85116 15.3682 3.65385C16.1043 2.92802 16.6238 2.0116 16.8685 1.00725V1.00725Z"
              stroke="#FF8906"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </PostWrapper>
    </Layout>
  );
};

postLayout.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
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
