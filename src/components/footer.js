import React from 'react';
import { FooterWrapper } from './elements/footerStyles';

const footer = () => (
  <FooterWrapper>
    <h6 className="footer__heading">Will Luft</h6>
    <p>
      <a
        className="footer__link"
        href="https://twitter.com/iamwilldl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>{' '}
      |{' '}
      <a
        className="footer__link"
        href="https://github.com/wdluft"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>{' '}
      |{' '}
      <a
        className="footer__link"
        href="https://www.willluft.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Portfolio
      </a>
    </p>
  </FooterWrapper>
);

export default footer;
