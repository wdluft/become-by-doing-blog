import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  margin-bottom: 36px;
  padding-bottom: 18px;
  border-bottom: 2px solid var(--primary);

  h1 {
    a {
      &:hover {
        text-decoration: none;
        color: var(--primary);
      }
    }
  }

  /* Tablet, portrait */
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: var(--headingTwo);
    }
  }

  /* Smartphone, portrait */
  @media only screen and (max-width: 640px) {
    margin-bottom: 18px;

    h1 {
      font-size: var(--headingThree);
    }
  }
`;
