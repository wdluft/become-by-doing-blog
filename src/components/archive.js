import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const ALL_POSTS_QUERY = graphql`
  query AllPostsQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

const Archive = () => {
  const data = useStaticQuery(ALL_POSTS_QUERY);

  const { allMarkdownRemark } = data;
  console.log(allMarkdownRemark);

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {allMarkdownRemark.edges.map(edge => {
          console.log(edge);
          return (
            <li key={edge.node.frontmatter.slug}>
              {edge.node.frontmatter.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Archive;
