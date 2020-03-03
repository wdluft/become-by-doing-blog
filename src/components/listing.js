import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const Listing_Query = graphql`
  query BlogPostListing {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

const ListingWrapper = styled.article`
  margin-bottom: 36px;

  h2 {
    font-size: var(--text-7);
  }

  p {
    margin-bottom: 1rem;
  }

  .post-date {
    color: var(--tertiary-color-3);
  }
`;

const Listing = () => {
  const data = useStaticQuery(Listing_Query);
  const { allMarkdownRemark } = data;
  return (
    <div>
      {allMarkdownRemark.edges.map(({ node }) => {
        return (
          <ListingWrapper key={node.frontmatter.slug}>
            <Link to={`/posts/${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p className="post-date">{node.frontmatter.date}</p>
            <p className="post-excerpt">{node.excerpt}</p>
            <p>
              <Link to={`/posts/${node.frontmatter.slug}`}>Read More...</Link>
            </p>
          </ListingWrapper>
        );
      })}
    </div>
  );
};

export default Listing;
