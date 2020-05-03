import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding-top: 18px;
  border-top: 2px solid var(--primary);

  /* Tablet, portrait */
  @media only screen and (max-width: 768px) {
  }

  /* Smartphone, portrait */
  @media only screen and (max-width: 640px) {
    font-size: var(--smallText);
  }
`;
