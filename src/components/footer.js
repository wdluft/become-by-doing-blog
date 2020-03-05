import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  margin: 50px 0 0;
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
