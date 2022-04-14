import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';
import reset from 'styled-reset';
import theme from 'styled-theming';
import palette from '../lib/palette';

export const mainTextColor = theme('theme', {
  light: palette.gray[9],
  dark: palette.gray[4],
});

export const subTextColor = theme('theme', {
  light: palette.gray[4],
  dark: palette.gray[9],
});

export const backgroundColor = theme('theme', {
  light: palette.gray[1],
  dark: palette.gray[9],
});

export const buttonColor = theme('theme', {
  light: css`
    color: ${palette.gray[1]};
    background-color: ${palette.gray[7]};
    border: 0px solid ${palette.gray[9]};

    &:hover {
      background-color: ${palette.gray[6]};
    }

    ${(props) =>
      props.accent &&
      css`
        background-color: ${palette.teal[6]};
        &:hover {
          background-color: ${palette.teal[5]};
        }
      `}
  `,
  dark: css`
    color: white;
    background-color: ${palette.gray[9]};
    border: 2px solid ${palette.gray[7]};

    &:hover {
      background-color: ${palette.gray[7]};
    }

    ${(props) =>
      props.accent &&
      css`
        background-color: ${palette.teal[7]};
        &:hover {
          background-color: ${palette.teal[5]};
        }
      `}
  `,
});

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: "Yeongdo-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/Yeongdo-Rg.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "MinSans-Thin";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/MinSans-Thin.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "MinSans-Medium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/MinSans-Medium.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: MinSans-Medium, -apple-system, sans-serif;
    text-rendering: optimizeLegibility;
    transition: background-color 0.5s ease-in-out;
    background-color: ${(props) =>
      props.dark ? palette.gray[9] : palette.gray[1]}
  }

  html {
    scroll-behavior: smooth;
  }

  img {
    transition: 0.3s;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
