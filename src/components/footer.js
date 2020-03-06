import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  margin: 40px 0 0;
  padding-top: 10px;
  border-top: 2px solid var(--primary-color-2);

  /* Tablet, portrait */
  @media only screen and (max-width: 768px) {
    margin: 24px 0 0;
  }

  /* Smartphone, portrait */
  @media only screen and (max-width: 480px) {
    margin: 15px 0 0;
    font-size: var(--text-5);
  }
`;

const footer = () => {
  return (
    <FooterWrapper>
      <p>Will Luft</p>
      <p>
        <a
          href="https://twitter.com/iamwilldl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/wdluft"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{' '}
        |{' '}
        <a
          href="https://www.willluft.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </p>
    </FooterWrapper>
  );
};

export default footer;
