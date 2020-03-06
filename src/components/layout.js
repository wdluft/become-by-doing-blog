import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';
import './layout.css';

const LayoutWrapper = styled.div`
  max-width: 768px;
  padding: 50px;
  margin: 0 auto;
  background: var(--gray-color-9);

  /* Tablet */
  @media only screen and (max-width: 768px) {
    max-width: 768px;
    padding: 25px 32px;
  }

  /* Smartphone, portrait */
  @media only screen and (max-width: 480px) {
    padding: 25px 18px;
  }
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
        <Footer />
      </div>
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
