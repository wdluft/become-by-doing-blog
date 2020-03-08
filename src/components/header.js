import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  margin-bottom: 36px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary-color-2);

  h1 {
    font-size: var(--text-9);
    font-weight: bold;
    letter-spacing: 0.25rem;

    a {
      &:hover {
        text-decoration: none;
      }
    }
  }

  p {
    font-size: var(--text-4);
  }

  /* Tablet, portrait */
  @media only screen and (max-width: 768px) {
    margin-bottom: 24px;

    h1 {
      font-size: var(--text-8);
    }
  }

  /* Smartphone, portrait */
  @media only screen and (max-width: 480px) {
    margin-bottom: 10px;

    h1 {
      font-size: var(--text-8);
      margin-bottom: 0.5rem;
    }

    p {
      font-size: var(--text-5);
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <p>
        A collection of thoughts by{' '}
        <a
          href="https://twitter.com/iamwilldl"
          rel="noopener noreferrer"
          target="_blank"
        >
          Will Luft
        </a>
      </p>
    </div>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
