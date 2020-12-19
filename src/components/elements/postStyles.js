import styled from 'styled-components';

export const PostWrapper = styled.article`
  margin-bottom: 1rem;

  .post__date {
    color: var(--secondary);
    margin-bottom: 1rem;
    font-size: var(--smallText);
    font-weight: bold;
  }

  .post__body {
    margin-bottom: 1.25rem;
  }

  .post__shareLink {
    .post__shareLink--svg {
      path {
        stroke: var(--linkColor);
      }
    }
  }

  .post__shareLink {
    &:hover {
      .post__shareLink--svg {
        path {
          stroke: var(--linkHoverColor);
        }
      }
    }

    &:active {
      .post__shareLink--svg {
        path {
          stroke: var(--linkActiveColor);
        }
      }
    }
  }

  li {
    list-style: disc;
    margin-left: 2rem;
  }

  @media only screen and (max-width: 640px) {
    .post__title {
      font-size: var(--headingThree);
    }

    .post__body {
      font-size: var(--text-5);
    }

    .post__share-link {
      font-size: var(--text-5);
    }
  }
`;
