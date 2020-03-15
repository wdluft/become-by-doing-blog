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
            blurb
          }
        }
      }
    }
  }
`;

const ListingWrapper = styled.article`
  margin-bottom: 32px;

  h2 {
    font-size: var(--text-7);
  }

  p {
    font-size: var(--text-4);
  }

  .post__date {
    color: var(--tertiary-color-2);
  }

  @media only screen and (max-width: 480px) {
    margin-bottom: 16px;

    p {
      margin-bottom: 0;
    }
  }
`;

const Listing = () => {
  const data = useStaticQuery(Listing_Query);
  const { allMarkdownRemark } = data;
  return (
    <div>
      {allMarkdownRemark.edges.map(({ node }) => (
        <ListingWrapper key={node.frontmatter.slug}>
          <Link to={`/posts/${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p className="post__date">{node.frontmatter.date}</p>
          <p className="post__excerpt">{node.frontmatter.blurb}</p>
          <p>
            <Link to={`/posts/${node.frontmatter.slug}`}>Read More</Link>
          </p>
        </ListingWrapper>
      ))}
    </div>
  );
};

export default Listing;
