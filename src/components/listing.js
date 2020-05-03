import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { ListingWrapper } from './elements/listingStyles';

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

const Listing = () => {
  const data = useStaticQuery(Listing_Query);
  const { allMarkdownRemark } = data;
  return (
    <div className="postsList">
      {allMarkdownRemark.edges.map(({ node }) => (
        <ListingWrapper key={node.frontmatter.slug}>
          <Link to={`/posts/${node.frontmatter.slug}`} className="post__link">
            <h4 className="post__heading">{node.frontmatter.title}</h4>
          </Link>
          <p className="post__date">{node.frontmatter.date}</p>
          <p className="post__excerpt">{node.frontmatter.blurb}</p>
          <Link
            to={`/posts/${node.frontmatter.slug}`}
            className="post__readMore"
          >
            Read More
          </Link>
        </ListingWrapper>
      ))}
    </div>
  );
};

export default Listing;
