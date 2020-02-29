import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import myLogo from '../images/logo.png';

const HeaderWrapper = styled.header`
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

  img {
    width: 42px;
    display: inline-block;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div>
      <h1>
        <Link to="/">
          <img src={myLogo} alt="Blog Logo" />

          {siteTitle}
        </Link>
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
