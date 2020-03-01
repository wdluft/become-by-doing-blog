import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';
import './layout.css';
import Archive from './archive';

const LayoutWrapper = styled.div`
  max-width: 705px;
  margin: 50px auto;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <LayoutWrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Archive />
        <Footer />
      </div>
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
