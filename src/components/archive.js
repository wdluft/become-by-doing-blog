import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY);

  const { allMarkdownRemark } = data;

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.frontmatter.slug}>
            <Link to={`/posts${edge.node.frontmatter.slug}`}>
              {edge.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Archive;
