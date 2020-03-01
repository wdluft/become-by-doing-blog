import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

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

const Listing = () => {
  const data = useStaticQuery(Listing_Query);
  const { allMarkdownRemark } = data;
  return (
    <div>
      {allMarkdownRemark.edges.map(({ node }) => {
        return (
          <article key={node.frontmatter.slug}>
            <Link to={`/posts/${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <p>
              <Link to={`/posts/${node.frontmatter.slug}`}>Read More...</Link>
            </p>
          </article>
        );
      })}
    </div>
  );
};

export default Listing;
