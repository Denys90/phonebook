import { css } from '@emotion/react';
import phonebook from 'images/phonebook.jpg';

export const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0 auto;
    width: 1200px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #212121;
    background-image: url(${phonebook});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    box-sizing: border-box;
  }
`;
