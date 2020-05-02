import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { HeaderWrapper } from './elements/headerStyles';

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1 className="header__title">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <p className="header__paragraph">
      A collection of thoughts by{' '}
      <a
        className="header__link"
        href="https://twitter.com/iamwilldl"
        rel="noopener noreferrer"
        target="_blank"
      >
        Will Luft
      </a>
      {'. '} Can be anything from web development, sports, philosophy, or
      whatever else grabs my attention.
    </p>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
